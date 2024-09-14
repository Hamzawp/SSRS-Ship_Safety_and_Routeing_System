import React, { useState } from "react";
import "./Ship.css";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { MapContainer, TileLayer } from "react-leaflet";
import { Button } from "@nextui-org/react";

const Ship = () => {
  const [geoData, setGeoData] = useState(null);
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="leftSidebar-container">
        <LeftSidebar setGeoData={setGeoData} />
      </div>

      <div className="ship-container">
        <div className="left-ship-container">
          <div className="currVoyage-container">
            <h2 className="ship-heading">Current voyage</h2>
            <div className="map-container-voyage">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                {/* OpenStreetMap (Standard) */}
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
              </MapContainer>
            </div>
            <div className="arr-dep-container">
              <span>Departure from Mumbai</span>
              <span>Arrival at Cochin</span>
            </div>

            <div className="arr-dep-container">
              <div className="arr-dep-items1">
                <span>Actual time of departure:</span>
                <span>2024-09-03 01:51 (UTC+5)</span>
              </div>
              <div className="arr-dep-items2">
                <span>Actual time of departure:</span>
                <span>2024-09-03 01:51 (UTC+5)</span>
              </div>
            </div>

            <div className="arr-dep-container">
              <Button>Past Track</Button>
              <Button>Route forecast</Button>
            </div>
          </div>

          <div className="general-container">
            <h2 className="ship-heading"> Latest AIS information</h2>
            <hr />
            <div className="vessel-info-container ">
              <table className="vessel-info-table">
                <tbody>
                  <tr>
                    <td>Navigational status</td>
                    <td>Underway using Engine</td>
                  </tr>
                  <tr>
                    <td>Position received</td>
                    <td>5 mins ago</td>
                  </tr>
                  <tr>
                    <td>Vessel's local time</td>
                    <td>2024-09-14 17:11 (UTC+2)</td>
                  </tr>
                  <tr>
                    <td>Latitude/Longitude</td>
                    <td>
                      <span className="upgrade-text">Upgrade to unlock</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Speed</td>
                    <td>12.2 kn</td>
                  </tr>
                  <tr>
                    <td>Course</td>
                    <td>15°</td>
                  </tr>
                  <tr>
                    <td>True heading</td>
                    <td>6°</td>
                  </tr>
                  <tr>
                    <td>Rate of turn</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Draught</td>
                    <td>8.2 m</td>
                  </tr>
                  <tr>
                    <td>Reported destination</td>
                    <td>RU ULU</td>
                  </tr>
                  <tr>
                    <td>Matched destination</td>
                    <td>Ust-luga, Russia</td>
                  </tr>
                  <tr>
                    <td>Estimated time of arrival</td>
                    <td>2024-09-30 09:00 (UTC+3)</td>
                  </tr>
                  <tr>
                    <td>AIS source</td>
                    <td>Terrestrial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="right-ship-container">
          <div className="summary-container">
            <h2 className="ship-heading">Summary</h2>
            <hr />

            <div className="summary-content">
              <h3>
                <b>Where is the ship?</b>
              </h3>
              <p>
                Oil Products Tanker NAUTILUS is currently located in the East
                Mediterranean (reported 4 minutes ago)
              </p>
            </div>
            <div className="summary-content">
              <h3>
                <b>What kind of ship is this?</b>
              </h3>
              <p>
                NAUTILUS (IMO: 9434890) is a Oil Products Tanker and is sailing
                under the flag of Cook Is. Her length overall (LOA) is 243
                meters and her width is 42.03 meters.
              </p>
            </div>
          </div>

          <div className="general-container">
            <h2 className="ship-heading">General</h2>
            <hr />
            <div className="general-img">
              <img
                src="https://www.marinetraffic.com/getAssetDefaultPhoto/?photo_size=800&asset_id=280602&asset_type_id=0"
                alt=""
              />
            </div>
            <div className="vessel-info-container ">
              <table className="vessel-info-table">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>NAUTILUS</td>
                  </tr>
                  <tr>
                    <td>Flag</td>
                    <td style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                        alt="Cook Is flag"
                        className="flag"
                      />{" "}
                      Cook Is
                    </td>
                  </tr>
                  <tr>
                    <td>IMO</td>
                    <td>9434890</td>
                  </tr>
                  <tr>
                    <td>MMSI</td>
                    <td>518999147</td>
                  </tr>
                  <tr>
                    <td>Call Sign</td>
                    <td>E5U5128</td>
                  </tr>
                  <tr>
                    <td>AIS Transponder Class</td>
                    <td>Class A</td>
                  </tr>
                  <tr>
                    <td>General Vessel Type</td>
                    <td>Tanker</td>
                  </tr>
                  <tr>
                    <td>Detailed Vessel Type</td>
                    <td>Oil Products Tanker</td>
                  </tr>
                  <tr>
                    <td>Service Status</td>
                    <td>
                      <span className="upgrade-text">Upgrade to unlock</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Port of Registry</td>
                    <td>
                      <span className="upgrade-text">Upgrade to unlock</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Year Built</td>
                    <td>
                      <span className="upgrade-text">Upgrade to unlock</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ship;
