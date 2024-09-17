import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Select from "react-select"; // Import react-select
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
  FaNewspaper,
  FaRoute,
  FaShip,
} from "react-icons/fa";
import portsData from "./ports.json";
// import { Select, SelectItem } from "@nextui-org/react";

const LeftSidebar = ({ setGeoData }) => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [ports, setPorts] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(
    new Set(["wind_direction_and_height"])
  );
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { value: "wind_direction_and_height", label: "Wind Direction and Height" },
    { value: "ocean_current", label: "Ocean Current" },
    { value: "vessel_build", label: "Vessel Build" },
    { value: "wave_height", label: "Wave Height" },
    { value: "weather_forecast", label: "Weather Forecast" },
    { value: "fuel_efficiency", label: "Fuel Efficiency" },
    {
      value: "wave_period_At_spectral_peak",
      label: "Wave Period at Spectral Peak",
    },
    { value: "stokes_drift", label: "Stokes Drift" },
    { value: "max_min_crest_pea_height", label: "Max/Min Crest Peak Height" },
    { value: "swell_Wave_data", label: "Swell Wave Data" },
    { value: "peak_period", label: "Peak Period" },
    { value: "mean_wave_direction", label: "Mean Wave Direction" },
    { value: "accidents_And_crashes", label: "Accidents and Crashes" },
  ];

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  useEffect(() => {
    const transformedPorts = portsData.features.map((feature) => ({
      label: feature.properties.Name,
      latitude: feature.geometry.coordinates[1],
      longitude: feature.geometry.coordinates[0],
    }));
    setPorts(transformedPorts);
  }, []);

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
          <Select
            options={ports}
            onChange={(selectedOption) => setSource(selectedOption)}
            isSearchable
            placeholder="Select Source"
          />
        </div>

        <div className="dropdown-container">
          <h3 className="sub-heading">Enter the destination</h3>
          <Select
            options={ports}
            onChange={(selectedOption) => setDestination(selectedOption)}
            isSearchable
            placeholder="Select Destination"
          />
        </div>

        <div className="dropdown-container">
          <h3 className="sub-heading">Select the filters</h3>
          <Select
            isMulti
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            closeMenuOnSelect={false}
            placeholder="Select Filters"
            className="multi-select-dropdown"
            classNamePrefix="select"
          />
        </div>
        <Button className="route-btn" onClick={handleShowRoute}>
          Show Route
        </Button>
      </div>
    </div>
  );
};

export default LeftSidebar;
