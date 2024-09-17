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
  FaGitAlt,
  FaGlobe,
  FaHistory,
  FaMailBulk,
  FaNewspaper,
  FaRoute,
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
  const [isOpen, setIsOpen] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState(new Set(["wind_speed"]));

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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const userChats = [
    {
      name: "Andik Firman",
      avatar: "https://cdn-icons-png.freepik.com/512/8742/8742495.png",
    },
    {
      name: "Rafiee Rohmat",
      avatar: "https://cdn-icons-png.freepik.com/512/8742/8742495.png",
    },
    {
      name: "Botak Bersinar",
      avatar: "https://cdn-icons-png.freepik.com/512/8742/8742495.png",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
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
              <FaRoute />
            </i>
            <span>
              <Link to="/curr-map">Show Route</Link>
            </span>
          </div>
          <div className="sidebar-menu-item">
            <i>
              {" "}
              <FaNewspaper />
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
              <FaGitAlt />
            </i>
            <span>
              {" "}
              <Link to="/commands">Commands</Link>
            </span>
          </div>
          

          {/* <div className="sidebar-menu-item" onClick={handleToggleDropdown}>
            <div className="chat-drop-down">
              <i>
                <FaCompressAlt />
              </i>
              <span>Chat</span>
            </div>

            <img
              src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-grise.png"
              alt=""
            />
          </div>

          <div className={`chat-dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
            {userChats.map((user, index) => (
              <div key={index} className="chat-user-item">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="chat-avatar"
                />
                <span>
                  <Link to="/chat">{user.name}</Link>
                </span>
              </div>
            ))}
          </div>

          <div className="sidebar-menu-item">
            <div className="chat-drop-down">
              <i>
                <FaMailBulk />
              </i>
              <span>
                <Link to="/commands">Commands</Link>
              </span>
            </div>

            <img
              src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-grise.png"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
