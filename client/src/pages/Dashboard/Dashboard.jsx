import React, { useState } from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import "./Dashboard.css";
import LeafletMap from "../../components/LeafletMap/LeafletMap";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  const [geoData, setGeoData] = useState(null);

  return (
    <div className="dashboard-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="leftSidebar-container">
        <LeftSidebar setGeoData={setGeoData} />
      </div>

      {/* <div className="rightSidebar-container">
        <RightSidebar />
      </div> */}

      <div style={{ marginLeft: "20vw", paddingTop: '4em' }}>
        <LeafletMap geoData={geoData} />
      </div>
    </div>
  );
};

export default Dashboard;
