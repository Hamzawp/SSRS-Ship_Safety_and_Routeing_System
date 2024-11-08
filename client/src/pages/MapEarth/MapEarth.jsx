import React, { useState } from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Navbar from "../../components/Navbar/Navbar";

const MapEarth = () => {
  const [geoData, setGeoData] = useState(null);
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="leftSidebar-container">
        <LeftSidebar setGeoData={setGeoData} />
      </div>
      <div style={{ marginLeft: "20vw", paddingTop: "4em" }}>
        <iframe
          src="https://earth.nullschool.net/#current/wind/surface/level/orthographic=-278.28,15.47,1379"
          width="95%"
          height={650}
        />
      </div>
    </>
  );
};

export default MapEarth;
