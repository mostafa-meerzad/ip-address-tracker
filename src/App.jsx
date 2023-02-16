import { useState, useEffect } from "react";
import Details from "./components/Details";
import Search from "./components/Search";
import Map from "./components/Map";

import "./styles.css";
import { ConnectionError } from "./icons";

const apiKey= import.meta.env.VITE_IPFY_KEY

function App() {
  const [position, setPosition] = useState(undefined);
  const [details, setDetails] = useState([]);
  const [notConnected, setNotConnected] = useState(false)

  function getData(searchKey="") {
    fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}&ipAddress=`+searchKey).then((res) => res.json()).then(data=>{

      setPosition([`${data.location.lat}`, `${data.location.lng}`]);

      setDetails([
        { name: "ip address", value:`${data.ip}` },
        {
          name: "location",
          value: `${data.location.country} ${data.location.city}`
        },
        { name: "timezone", value: `${data.location.timezone} ` },
        { name: "isp", value: `${data.isp}` }
      ]);
        
    }).catch(()=>{
      setDetails([
        { name: "ip address", value:"" },
        {name: "location",value: ""},
        { name: "timezone", value: "" },
        { name: "isp", value: "" }
      ])
      setNotConnected(true)
    })
  }
  useEffect(() => {
    getData()

  }, []);

  return (
    <>
      <header className="header">
        <h1 className="header__title">IP Address Tracker</h1>
        <Search callback={getData} />
        <Details info={details} />
      </header>
      <main className={notConnected ? "main disconnected": "main"}>
        {notConnected ? <ConnectionError/> : position && <Map position={position}/> }
      </main>
    </>
  );
}

export default App;

