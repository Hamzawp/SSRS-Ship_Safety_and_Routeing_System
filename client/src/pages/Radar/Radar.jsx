import React, { useState } from "react";
import "./Radar.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { FaWindowClose } from "react-icons/fa";

const Radar = () => {
  const [geoData, setGeoData] = useState(null);
  const [selectedShip, setSelectedShip] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { sender: "receiver", message: "Hello there!" },
    { sender: "sender", message: "Hi! How can I assist you?" },
  ]);
  const ships = [
    { id: 1, x: 100, y: 150 },
    { id: 2, x: 200, y: 250 },
    { id: 3, x: 300, y: 100 },
  ];

  const handleShipClick = (ship) => {
    setSelectedShip(ship);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const messageInput = e.target.elements.message.value;
    setChatMessages([
      ...chatMessages,
      { sender: "sender", message: messageInput },
    ]);
    e.target.reset();
  };

  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="leftSidebar-container">
        <LeftSidebar setGeoData={setGeoData} />
      </div>

      <div className="radar-container">
        <svg width="800" height="400">
          <circle
            cx="200"
            cy="200"
            r="50"
            stroke="green"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            stroke="green"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="200"
            cy="200"
            r="150"
            stroke="green"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="200"
            cy="200"
            r="200"
            stroke="green"
            strokeWidth="2"
            fill="none"
          />

          {/* Radar Lines */}
          <line
            x1="200"
            y1="0"
            x2="200"
            y2="400"
            stroke="green"
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="200"
            x2="400"
            y2="200"
            stroke="green"
            strokeWidth="2"
          />

          {/* Ship positions */}
          {ships.map((ship) => (
            <circle
              key={ship.id}
              cx={ship.x}
              cy={ship.y}
              r="5"
              fill="red"
              onClick={() => handleShipClick(ship)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </svg>

        {selectedShip && (
          <div
            className="chat-popup"
            style={{
              top: selectedShip.y,
              left: selectedShip.x,
            }}
          >
            <h3>Chat with Ship {selectedShip.id}</h3>

            <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    msg.sender === "sender" ? "right" : "left"
                  }`}
                >
                  {msg.message}
                </div>
              ))}
            </div>

            <form className="chat-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                name="message"
                placeholder="Enter your message"
                required
              />
              <button type="submit">Send</button>
            </form>

            <button
              className="close-chat-btn"
              onClick={() => setSelectedShip(null)}
            >
              <FaWindowClose />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Radar;
