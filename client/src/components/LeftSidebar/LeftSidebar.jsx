import React, { useMemo, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import "./LeftSidebar.css";

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
  { label: "Japan", latitude: 34.18333333333333, longitude: 3133.1 },
];

const LeftSidebar = ({ setGeoData }) => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);

  const [selectedKeys, setSelectedKeys] = useState(new Set(["wind_speed"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleShowRoute = async () => {
    console.log("Source:", source);
    console.log("Destination:", destination);
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

  return (
    <div className="p-4">
      <h1 className="heading-filter">Ship Routing</h1>

      {/* <div className="logo">
        <img
          src="https://www.clker.com/cliparts/5/c/a/f/141490005811489798026274.spotify-logo-horizontal-white-rgb.png"
          alt=""
        />
      </div> */}

      <div className="w-full flex justify-center flex-col">
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
              <Button  className="capitalize filter-btn">
                {selectedValue}
              </Button>
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
