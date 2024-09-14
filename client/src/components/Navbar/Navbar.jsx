import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import SOSModal from "../SOSModal/SOSModal";

const windDirections = [
  "North",
  "North-East",
  "East",
  "South-East",
  "South",
  "South-West",
  "West",
  "North-West",
];

const Navbar = () => {
  const [windDirection, setWindDirection] = useState("");
  return (
    <>
      <div className="navbar">
        <div className="nav-items-container">
          <div className="bars">
            <FaBars />
          </div>
        </div>

        <div className="nav-items-container">
          <div style={{ zIndex: "99999999999999999999999999999999999999" }}>
            <SOSModal />
          </div>
        </div>

        {/* <div className="nav-items-container">
          <div className="dropdown-container-nav">
            <select
              className="w-full"
              value={windDirection}
              onChange={(e) => setWindDirection(e.target.value)}
            >
              <option value="">Select Wind Direction</option>
              {windDirections.map((direction) => (
                <option key={direction} value={direction}>
                  {direction}
                </option>
              ))}
            </select>
          </div>

          <div className="dropdown-container-nav">
            <select
              className="w-full"
              onChange={(e) => setOceanCurrent(e.target.value)}
            >
              <option value="">Select Ocean Current</option>
              <option value="northEquatorial">North Equatorial Current</option>
              <option value="gulfStream">Gulf Stream</option>
              <option value="kuroshio">Kuroshio Current</option>
              <option value="antarcticCircumpolar">
                Antarctic Circumpolar Current
              </option>
              <option value="california">California Current</option>
            </select>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
