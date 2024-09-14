import React, { useState } from "react";
import "./Chat.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

const Chat = () => {
  const [geoData, setGeoData] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "Andik Firman",
      time: "12:54",
      text: "Hi @everyone Ada member baru lagii nii, namanya Ahsan Oiyaa, salam kenal Ahsan, aku Andik aku dari Ngawi hehe 😊",
      type: "left",
    },
    {
      sender: "You",
      time: "12:55",
      text: "Hi @everyone Salam kenal yaa, aku Ahsan pratama dari Solo 🇮🇩 btw ini group buat apaan yak?",
      type: "right",
    },
    {
      sender: "Rafiee Rohmat",
      time: "12:57",
      text: "Hi @ahsanpratamaa salam kenal juga, aku Rafie. Oiyaa, aku dari Ngawi hehe 😊",
      type: "left",
    },
    {
      sender: "You",
      time: "12:57",
      text: "Hi @ahsanpratamaa salam kenal juga, aku Rafie. Oiyaa, aku dari Ngawi hehe 😊",
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
              <h2>Port Blair Ship</h2>
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

export default Chat;
