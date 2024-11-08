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
