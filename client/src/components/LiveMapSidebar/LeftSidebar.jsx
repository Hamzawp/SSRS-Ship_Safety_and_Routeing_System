import React, { useMemo, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import "./LeftSidebar.css";
import {
  FaCompressAlt,
  FaGlobe,
  FaHistory,
  FaMailBulk,
  FaShip,
} from "react-icons/fa";

const ports = [
  { label: "Mumbai", latitude: 18.9402, longitude: 72.8352 },
  { label: "Chennai", latitude: 13.0827, longitude: 80.2707 },
  { label: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
  { label: "Visakhapatnam", latitude: 17.6868, longitude: 83.2185 },
  { label: "Cochin", latitude: 9.9312, longitude: 76.2673 },
  { label: "Paradip", latitude: 20.3168, longitude: 86.6101 },
  { label: "Mangalore", latitude: 12.9141, longitude: 74.856 },
  { label: "Kandla", latitude: 23.0333, longitude: 70.2167 },
  { label: "Tuticorin", latitude: 8.7642, longitude: 78.1348 },
  { label: "Haldia", latitude: 22.0667, longitude: 88.069 },
  { label: "Ennore", latitude: 13.2416, longitude: 80.3203 },
  { label: "Port Blair", latitude: 11.6234, longitude: 92.7265 },
  {
    label: "Egypt",
    latitude: -32.0563,
    longitude: 115.7455,
  },
];

const LeftSidebar = ({ setGeoData }) => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [selectedKeys, setSelectedKeys] = useState(new Set(["wind_speed"]));
  const [isOpen, setIsOpen] = useState(true);

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleShowRoute = async () => {
    if (source && destination) {
      const requestBody = {
        startLat: source.latitude,
        startLon: source.longitude,
        endLat: destination.latitude,
        endLon: destination.longitude,
      };

      const response = await fetch("http://127.0.0.1:5000/get_route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const routeData = await response.json();
      console.log(routeData);
      setGeoData(routeData);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h1 className="heading-filter">Ship Routing</h1>

        <img
          className="right-arrow-sidebar"
          src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-grise.png"
          alt=""
          onClick={toggleSidebar}
        />
      </div>

      <div className="w-full flex justify-center flex-col mb-5">
        <h2 className="heading-menus">OVERVIEW</h2>

        <div className="sidebar-menu-items-container">
          <div className="sidebar-menu-item">
            <i>
              {" "}
              <FaGlobe />
            </i>
            <span>
              <Link to="/">Live Map</Link>
            </span>
          </div>
          <div className="sidebar-menu-item">
            <i>
              {" "}
              <FaGlobe />
            </i>
            <span>
              <Link to="/curr-map">Current Map</Link>
            </span>
          </div>
          <div className="sidebar-menu-item">
            <i>
              {" "}
              <FaGlobe />
            </i>
            <span>
              <Link to="/maritime-news">Maritime News</Link>
            </span>
          </div>
          <div className="sidebar-menu-item">
            <i>
              {" "}
              <FaShip />
            </i>
            <span>
              <Link to="/ship">Ship</Link>
            </span>
          </div>
          <div className="sidebar-menu-item">
            <i>
              {" "}
              <FaHistory />
            </i>
            <span>
              {" "}
              <Link to="/history">History</Link>
            </span>
          </div>
          <div className="sidebar-menu-item">
            <i>
              {" "}
              <FaCompressAlt />
            </i>
            <span>
              <Link to="/radar">Chat</Link>
            </span>
          </div>
          <div className="sidebar-menu-item">
            <i>
              {" "}
              <FaMailBulk />
            </i>
            <span>
              <Link to="/commands">Commands</Link>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center flex-col mb-5">
        <h2 className="heading-menus">FILTERS</h2>
        <div className="dropdown-container">
          <h3 className="sub-heading">Enter the source</h3>
          <select
            className="w-full"
            onChange={(e) =>
              setSource(ports.find((port) => port.label === e.target.value))
            }
          >
            <option value="">Select Source</option>
            {ports.map((port) => (
              <option key={port.label} value={port.label}>
                {port.label}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown-container">
          <h3 className="sub-heading">Enter the destination</h3>
          <select
            className="w-full"
            onChange={(e) =>
              setDestination(
                ports.find((port) => port.label === e.target.value)
              )
            }
          >
            <option value="">Select Destination</option>
            {ports.map((port) => (
              <option key={port.label} value={port.label}>
                {port.label}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown-container">
          <h3 className="sub-heading">Select the filters</h3>
          <Dropdown>
            <DropdownTrigger>
              <Button className="capitalize filter-btn">{selectedValue}</Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Multiple selection example"
              variant="flat"
              closeOnSelect={false}
              disallowEmptySelection
              selectionMode="multiple"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="wind_speed">Wind Speed</DropdownItem>
              <DropdownItem key="ocean_current">Ocean Current</DropdownItem>
              <DropdownItem key="date">Date</DropdownItem>
              <DropdownItem key="single_date">Single Date</DropdownItem>
              <DropdownItem key="iteration">Iteration</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Button className="route-btn" onClick={handleShowRoute}>
          Show Route
        </Button>
      </div>
    </div>
  );
};

export default LeftSidebar;
