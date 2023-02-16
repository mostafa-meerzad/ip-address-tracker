import React from "react";
import Details from "./components/Details";
import Search from "./components/Search";
import Map from "./components/Map";
import "./styles.css"
// process.REACT_APP_IPFY_KEY;
// const API_KEY = process.REACT_APP_IPFY_KEY

function getData(url) {
  return fetch(url).then(res=>res.json()).then(data=>console.log(data))
}
const url = "https://geo.ipify.org/api/v2/country,city,vpn?apiKey="
function App() {
  const position = [ 43.31181, 5.37391];

  const ipDetails = [
    { name: "ip address", value: "154.57.201.144"},
    {
      name: "location",
      value:"FR Provence-Alpes-Côte d'Azur"
    },
    { name: "timezone", value:"+01:00" },
    { name: "isp", value: "Trans World Associates (Pvt) Ltd" }
  ];
  const logger = (arg) => {
    console.log(arg);
  };
  return (
    <>
      <header className="header">
        <h1 className="header__title">IP Address Tracker</h1>
        <Search callback={logger} />
        <Details info={ipDetails} />
      </header>
      <main className="main">
        <Map position={position} />
      </main>
    </>
  );
}

// function getData (){
//   const {data} = useQuery(["apiData"], () => {
//     return fetch("https://geo.ipify.org/api/v2/country,city,vpn?apiKey=")
//   })
// }
export default App;
