import React, { useState } from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import "./Dashboard.css";
import LeafletMap from "../../components/LeafletMap/LeafletMap";

const Dashboard = () => {
  const [geoData, setGeoData] = useState(null);

  return (
    <div className="dashboard-container">
      <div className="leftSidebar-container">
        <LeftSidebar setGeoData={setGeoData} />
      </div>

      <div className="rightSidebar-container">
        <RightSidebar />
      </div>

      <div style={{ marginLeft: "15.5em" }}>
        <LeafletMap geoData={geoData} />
      </div>
    </div>
  );
};

export default Dashboard;
