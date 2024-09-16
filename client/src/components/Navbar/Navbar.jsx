import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
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
import { Badge, Avatar, Switch, Button } from "@nextui-org/react";
import { NotificationIcon } from "./NotificationIcon";

const Navbar = () => {
  const [windDirection, setWindDirection] = useState("");
  return (
    <>
      <div className="navbar">
        <div className="nav-items-container">
          {/* <div className="bars">
            <FaBars />
          </div> */}
        </div>

        <div className="nav-items-container">
          <div>
            <Badge content="9+" shape="circle" color="danger">
              <Button
                radius="full"
                isIconOnly
                aria-label="more than 99 notifications"
                variant="light"
              >
                <NotificationIcon size={24} className="fill-current" />
              </Button>
            </Badge>
          </div>
          <div>
            <SOSModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
