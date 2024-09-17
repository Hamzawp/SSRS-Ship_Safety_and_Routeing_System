import React, { useState } from "react";
// import "./Commands.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

const Commands = () => {
  const [geoData, setGeoData] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "Headquarters",
      time: "13:00",
      text: "Hello @everyone, the headquarters has requested an update on the ship's status. Please ensure all systems are running smoothly.",
      type: "left",
    },
    {
      sender: "You",
      time: "13:01",
      text: "Hi @Headquarters, all systems are functioning normally. The ship is currently docked at the harbor awaiting further instructions.",
      type: "right",
    },
    {
      sender: "Headquarters",
      time: "13:03",
      text: "Just a reminder, the next briefing from headquarters will be at 15:00. Make sure to review the latest mission updates before then.",
      type: "left",
    },
    {
      sender: "You",
      time: "13:05",
      text: "Got it @Headquarters. I’ll review the updates and be ready for the briefing.",
      type: "right",
    },
  ]);


  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([
        ...messages,
        { sender: "You", time: "13:01", text: message, type: "right" },
      ]);
      setMessage(""); // Clear the input after sending
    }
  };
  return (
    <div className="chat-page">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="leftSidebar-container">
        <LeftSidebar setGeoData={setGeoData} />
      </div>

      <div className="chat-main">
        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-img-header">
              <img
                src="https://cdn-icons-png.freepik.com/512/8742/8742495.png"
                alt=""
              />
            </div>

            <div className="chat-name-header">
              <h2>Headquater</h2>
            </div>
          </div>

          <div className="chat-body">
            <div className="message-container">
              <div className="message-timestamp">Today</div>

              {messages.map((msg, index) => (
                <div key={index} className={`message-content ${msg.type}`}>
                  {msg.type === "left" && (
                    <img
                      className="avatar"
                      src="https://cdn-icons-png.freepik.com/512/8742/8742495.png"
                      alt="Avatar"
                    />
                  )}
                  <div className={`message-bubble ${msg.type}`}>
                    <p>
                      <strong>{msg.sender}</strong>{" "}
                      <span className="time">{msg.time}</span>
                    </p>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="chat-input-container">
            <form onSubmit={handleSend} className="chat-form">
              <input
                type="text"
                className="chat-input"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="send-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commands;
