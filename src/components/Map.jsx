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
    <div className="leaflet-container">
      <div className="map" id="map">
        <MapContainer
          center={position}
          touchZoom="center"
          zoom={6}
          scrollWheelZoom={true}
          zoomControl={false}        
        >
          <TileLayer
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
