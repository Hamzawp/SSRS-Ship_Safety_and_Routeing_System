import React, { useState } from "react";
import "./History.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { Select, SelectItem } from "@nextui-org/react";
import prevRoute from "./prev.json";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";

const History = () => {
  const [geoData, setGeoData] = useState(null);
  return (
    <div className="history-page">
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="leftSidebar-container">
        <LeftSidebar setGeoData={setGeoData} />
      </div>

      <div style={{ marginLeft: "20vw", paddingTop: "6em" }}>
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Sept 1 2024"
            className="accordian-item"
          >
            <div className="cards-container">
              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Fuel Saved</h3>
                </div>

                <div className="card-content">
                  <h1>102 lt</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Time Saved</h3>
                </div>

                <div className="card-content">
                  <h1>26 hr</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4388/4388257.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Distance Saved</h3>
                </div>

                <div className="card-content">
                  <h1>50 km</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>-0.1%</span>
                  <p>last 7 days</p>
                </div>
              </div>
            </div>

            <div className="prev-map-container">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={4}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                  attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />

                <GeoJSON data={prevRoute} />
              </MapContainer>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Sept 2 2024"
            className="accordian-item"
          >
            <div className="cards-container">
              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Fuel Saved</h3>
                </div>

                <div className="card-content">
                  <h1>102 lt</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Time Saved</h3>
                </div>

                <div className="card-content">
                  <h1>26 hr</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4388/4388257.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Distance Saved</h3>
                </div>

                <div className="card-content">
                  <h1>50 km</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327424.png"
                    alt=""
                  />
                  <span>-0.1%</span>
                  <p>last 7 days</p>
                </div>
              </div>
            </div>

            <div className="prev-map-container">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={4}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                  attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />

                <GeoJSON data={prevRoute} />
              </MapContainer>
            </div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Sept 3 2024"
            className="accordian-item"
          >
            <div className="cards-container">
              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Fuel Saved</h3>
                </div>

                <div className="card-content">
                  <h1>102 lt</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Time Saved</h3>
                </div>

                <div className="card-content">
                  <h1>26 hr</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4388/4388257.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Distance Saved</h3>
                </div>

                <div className="card-content">
                  <h1>50 km</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327424.png"
                    alt=""
                  />
                  <span>-0.1%</span>
                  <p>last 7 days</p>
                </div>
              </div>
            </div>

            <div className="prev-map-container">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={4}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                  attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />

                <GeoJSON data={prevRoute} />
              </MapContainer>
            </div>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="Sept 4 2024"
            className="accordian-item"
          >
            <div className="cards-container">
              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Fuel Saved</h3>
                </div>

                <div className="card-content">
                  <h1>102 lt</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Time Saved</h3>
                </div>

                <div className="card-content">
                  <h1>26 hr</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4388/4388257.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Distance Saved</h3>
                </div>

                <div className="card-content">
                  <h1>50 km</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327424.png"
                    alt=""
                  />
                  <span>-0.1%</span>
                  <p>last 7 days</p>
                </div>
              </div>
            </div>

            <div className="prev-map-container">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={4}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                  attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />

                <GeoJSON data={prevRoute} />
              </MapContainer>
            </div>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            title="Sept 5 2024"
            className="accordian-item"
          >
            <div className="cards-container">
              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Fuel Saved</h3>
                </div>

                <div className="card-content">
                  <h1>102 lt</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Time Saved</h3>
                </div>

                <div className="card-content">
                  <h1>26 hr</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4388/4388257.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Distance Saved</h3>
                </div>

                <div className="card-content">
                  <h1>50 km</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327424.png"
                    alt=""
                  />
                  <span>-0.1%</span>
                  <p>last 7 days</p>
                </div>
              </div>
            </div>

            <div className="prev-map-container">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={4}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                  attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />

                <GeoJSON data={prevRoute} />
              </MapContainer>
            </div>
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion 6"
            title="Sept 6 2024"
            className="accordian-item"
          >
            <div className="cards-container">
              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Fuel Saved</h3>
                </div>

                <div className="card-content">
                  <h1>102 lt</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Time Saved</h3>
                </div>

                <div className="card-content">
                  <h1>26 hr</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4388/4388257.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Distance Saved</h3>
                </div>

                <div className="card-content">
                  <h1>50 km</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327424.png"
                    alt=""
                  />
                  <span>-0.1%</span>
                  <p>last 7 days</p>
                </div>
              </div>
            </div>

            <div className="prev-map-container">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={4}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                  attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />

                <GeoJSON data={prevRoute} />
              </MapContainer>
            </div>
          </AccordionItem>
          <AccordionItem
            key="7"
            aria-label="Accordion 7"
            title="Sept 7 2024"
            className="accordian-item"
          >
            <div className="cards-container">
              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Fuel Saved</h3>
                </div>

                <div className="card-content">
                  <h1>102 lt</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Time Saved</h3>
                </div>

                <div className="card-content">
                  <h1>26 hr</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4388/4388257.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Distance Saved</h3>
                </div>

                <div className="card-content">
                  <h1>50 km</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327424.png"
                    alt=""
                  />
                  <span>-0.1%</span>
                  <p>last 7 days</p>
                </div>
              </div>
            </div>

            <div className="prev-map-container">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={4}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                  attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />

                <GeoJSON data={prevRoute} />
              </MapContainer>
            </div>
          </AccordionItem>
          <AccordionItem
            key="8"
            aria-label="Accordion 8"
            title="Sept 8 2024"
            className="accordian-item"
          >
            <div className="cards-container">
              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Fuel Saved</h3>
                </div>

                <div className="card-content">
                  <h1>102 lt</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Time Saved</h3>
                </div>

                <div className="card-content">
                  <h1>26 hr</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4388/4388257.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Distance Saved</h3>
                </div>

                <div className="card-content">
                  <h1>50 km</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327424.png"
                    alt=""
                  />
                  <span>-0.1%</span>
                  <p>last 7 days</p>
                </div>
              </div>
            </div>

            <div className="prev-map-container">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={4}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                  attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />

                <GeoJSON data={prevRoute} />
              </MapContainer>
            </div>
          </AccordionItem>
          <AccordionItem
            key="9"
            aria-label="Accordion 9"
            title="Sept 9 2024"
            className="accordian-item"
          >
            <div className="cards-container">
              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Fuel Saved</h3>
                </div>

                <div className="card-content">
                  <h1>102 lt</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Time Saved</h3>
                </div>

                <div className="card-content">
                  <h1>26 hr</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4388/4388257.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Distance Saved</h3>
                </div>

                <div className="card-content">
                  <h1>50 km</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327424.png"
                    alt=""
                  />
                  <span>-0.1%</span>
                  <p>last 7 days</p>
                </div>
              </div>
            </div>

            <div className="prev-map-container">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={4}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                  attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />

                <GeoJSON data={prevRoute} />
              </MapContainer>
            </div>
          </AccordionItem>
          <AccordionItem
            key="10"
            aria-label="Accordion 10"
            title="Sept 10 2024"
            className="accordian-item"
          >
            <div className="cards-container">
              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Fuel Saved</h3>
                </div>

                <div className="card-content">
                  <h1>102 lt</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Time Saved</h3>
                </div>

                <div className="card-content">
                  <h1>26 hr</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4388/4388257.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327422.png"
                    alt=""
                  />
                  <span>+2.6%</span>
                  <p>last 7 days</p>
                </div>
              </div>

              <div className="cards-bx">
                <div className="card-heading">
                  <h3>Total Distance Saved</h3>
                </div>

                <div className="card-content">
                  <h1>50 km</h1>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/oil-gas-caramel-vol-2/512/SAVE_OIL-512.png"
                    alt=""
                  />
                </div>

                <div className="card-footer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7327/7327424.png"
                    alt=""
                  />
                  <span>-0.1%</span>
                  <p>last 7 days</p>
                </div>
              </div>
            </div>

            <div className="prev-map-container">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={4}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="http://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                  attribution='Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />

                <GeoJSON data={prevRoute} />
              </MapContainer>
            </div>
          </AccordionItem>
        </Accordion>

        <div className="pagination-container">
          <Pagination isCompact showControls total={10} initialPage={1} color="warning" />
        </div>
      </div>
    </div>
  );
};

export default History;
