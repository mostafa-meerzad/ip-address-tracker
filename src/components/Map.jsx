import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import pointer from "../assets/icon-location.svg";

const customIcon = new Icon({
  iconUrl: pointer,
  iconSize: [33, 40]
});

function Map({position}) {
  return (
    // Add the key prop so the map component will be treated as a new component and render the new map when the user enters a new ip-address
    <div className="leaflet-container" key={position[0]+position[1]}>
      <div className="map" id="map">
        <MapContainer
          center={position}
          touchZoom="center"
          zoom={5}
          scrollWheelZoom={true}
          zoomControl={false}        
        >
          <TileLayer
          tileSize={512}
          zoomOffset={-1}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon} />
        </MapContainer>
      </div> 
    </div>
  );
}

export default Map;
