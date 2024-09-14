import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = ({ geoData }) => {
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "95%",
        height: "100vh",
        marginTop: "2em",
      }}
    >
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
          attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />

        {geoData && <GeoJSON data={geoData} onEachFeature={onEachFeature} />}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
