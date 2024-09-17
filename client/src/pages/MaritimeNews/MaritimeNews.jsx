import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./MaritimeNews.css";
import { FaSearch, FaStar } from "react-icons/fa";
import { Avatar } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const MaritimeNews = () => {
  const [geoData, setGeoData] = useState(null);
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="leftSidebar-container">
        <LeftSidebar setGeoData={setGeoData} />
      </div>
      <div className="news-page">
        <div className="input-box">
          <i className="uil uil-search">
            {" "}
            <FaSearch />{" "}
          </i>
          <input type="text" placeholder="Search Maritime News Here..." />
          <button className="button">Search</button>
        </div>

        <div className="news-container">
          <div className="news-left-container">
            <h2>
              <FaStar /> Featured
            </h2>
            <hr />

            <div className="featued-card">
              <div className="featured-img">
                <img
                  src="https://kp-strapi-media-maritime-news-prod-main.s3.eu-west-1.amazonaws.com/NAVIGATOR_GLOBAL_and_GREEN_PIONEER_ce919d345a.png"
                  alt=""
                />
              </div>

              <div className="featured-content">
                <span>
                  <b>Renewables</b> 17 Sep, 12:16
                </span>
                <h1>
                  World’s First Two Ship-to-Ship Ammonia Transfers Conducted in
                  Australia
                </h1>
                <p>
                  NAVIGATOR GLOBAL and GREEN PIONEER vessels carried out
                  ship-to-ship ammonia transfer.Vessels GREEN PIONEER and
                  NAVIGATOR GLOBAL , image credit: GMCD The world’s first
                  ship-to-ship transfers of ammonia in a test setting were
                  carried out by a consortium led by the Global Centre...
                </p>

                <div className="user-news">
                  <Avatar
                    className="w-6 h-6 text-tiny"
                    src="https://cdn-icons-png.flaticon.com/512/870/870107.png"
                  />
                  <span>GREEN PIONEER</span>
                </div>
              </div>
            </div>
          </div>
          <div className="news-right-container">
            <h2>Latest News</h2>
            <hr />

            <div className="latest-update-card-container">
              <div className="latest-update-card">
                <div className="latest-card-content">
                  <span>
                    <b>Risk and Compliance</b> 17 Sep, 16:53
                  </span>
                  <h2>
                    Navigating the Complexities of Maritime Sanctions: An August
                    2024 Overview
                  </h2>
                  <p>
                    Overview In August 2024, OFAC sanctioned 10 new vessels and
                    4 shipping companies. This contributed to a year-over-year
                    increase of 136 vessels and...
                  </p>
                  <div className="user-news">
                    <Avatar
                      className="w-6 h-6 text-tiny"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzBroUG68pwKSICzTYNAhqGPTTQ0DGcFkW_w&s"
                    />
                    <span>MSC RIONA</span>
                  </div>
                </div>
                <div className="latest-card-img">
                  <img
                    src="https://kp-strapi-media-maritime-news-prod-main.s3.eu-west-1.amazonaws.com/Picture1_c487d817fc.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="latest-update-card">
                <div className="latest-card-content">
                  <span>
                    <b>Ship Building</b> 16 Sep, 12:11
                  </span>
                  <h2>Crane Accident at Yantian Port Causes Container Loss</h2>
                  <p>
                    Crane crashed with MSC RIONA. Containership MSC RIONA, image
                    credit: Screenshot X,@theseainarabic A marine incident
                    involving a ship-to-shore crane...
                  </p>
                  <div className="user-news">
                    <Avatar
                      className="w-6 h-6 text-tiny"
                      src="https://cdn-icons-png.flaticon.com/512/870/870056.png"
                    />
                    <span>CHIWAN</span>
                  </div>
                </div>
                <div className="latest-card-img">
                  <img
                    src="https://kp-strapi-media-maritime-news-prod-main.s3.eu-west-1.amazonaws.com/NANTES_KNUTSEN_34014a6fa6.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="latest-update-card">
                <div className="latest-card-content">
                  <span>
                    <b>Cruises</b> 13 Sep, 17:47
                  </span>
                  <h2>
                    Fincantieri Delivers Cruise Ship to Explora Journeys of MSC
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo illo provident quae debitis iure, cupiditate, recusandae
                    amet distinctio asperiores vero voluptas laborum molestiae
                    temporibus dolores dolor magnam harum! Nostrum, eius.
                  </p>
                  <div className="user-news">
                    <Avatar
                      className="w-6 h-6 text-tiny"
                      src="https://cdn-icons-png.flaticon.com/512/870/870107.png"
                    />
                    <span>abc</span>
                  </div>
                </div>
                <div className="latest-card-img">
                  <img
                    src="https://kp-strapi-media-maritime-news-prod-main.s3.eu-west-1.amazonaws.com/EXPLORA_II_2011f8268b.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="news-categories-container">
          <hr />
          <h2>Latest in categories</h2>

          <div className="news-categ-card-contianer">
            <div class="news-categ-card">
              <div class="news-categ-img">
                <img src="https://kp-strapi-media-maritime-news-prod-main.s3.eu-west-1.amazonaws.com/AF_PRIDE_09b1dae474.png" />
              </div>
              <span>13 Sep, 11:49</span>
              <h2>
                Fifteen Crewmembers Safely Rescued Following Fire Aboard
                Offshore Supply Vessel AM PRIDE
              </h2>
              <p>
                AF PRIDE crew rescued after onboard fire.Offshore supply vessel
                AM PRIDE, image credit: SAMSA The South African Maritime Safety
                Authority (SAMSA) reported the rescue of fifteen crewmembers
                after a fire broke out aboard the offshore supply vessel AM
                PRIDE and had to be..
              </p>
            </div>
            <div class="news-categ-card">
              <div class="news-categ-img">
                <img src="https://kp-strapi-media-maritime-news-prod-main.s3.eu-west-1.amazonaws.com/A_vessel_attack_in_Black_sea_fcf4fd9480.png" />
              </div>
              <span>13 Sep, 11:22</span>
              <h2>
                Russia Accused of Attack on Grain Vessel Passing Through the
                Black Sea
              </h2>
              <p>
                A vessel carrying grains attacked in Black Sea.A vessel attacked
                in Black Sea, image credit: Ukrainian Presidential Press Service
                The Ukraine President, Volodymyr Zelenskiy, accused Russia of
                attacking a grain vessel carrying wheat in the Black Sea on
                September 12. The...
              </p>
            </div>
            <div class="news-categ-card">
              <div class="news-categ-img">
                <img src="https://kp-strapi-media-maritime-news-prod-main.s3.eu-west-1.amazonaws.com/DSG_5da3e3a44f.png" />
              </div>
              <span>16 Sep, 15:09</span>
              <h2>
                Bunker vessel and supplier banned for attempting to deceive UAE
                Maritime Administration
              </h2>
              <p>
                Bunker supplier OceanEXL and the delivery vessel ban in
                UAE.Vessel DSG,image credit: Patrick Lawson On September 13, the
                UAE Maritime Administration banned the bunker supplier OCEANEXL
                FZC from bunker trading and supplying fuel to ships in the UAE.
                The ban was incurred due to...
              </p>
            </div>
          </div>
        </div>

        <div className="news-categories-container">
          <hr />
          <h2>More in news</h2>

          <div className="news-categ-card-contianer">
            <div className="latest-update-card-container">
              <div className="latest-update-card">
                <div className="latest-card-content">
                  <span>
                    <b>Ports</b> 16 Sep, 20.46
                  </span>
                  <h2>
                    Ribost Terminals to Build Two New Storage Units at the Port
                    of Long Beach
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo illo provident quae debitis iure, cupiditate, recusandae
                    amet distinctio asperiores vero voluptas laborum molestiae
                    temporibus dolores dolor magnam harum! Nostrum, eius.
                  </p>
                  <div className="user-news">
                    <Avatar
                      className="w-6 h-6 text-tiny"
                      src="https://cdn-icons-png.flaticon.com/512/870/870107.png"
                    />
                    <span>abc</span>
                  </div>
                </div>
                <div className="latest-card-img">
                  <img
                    src="https://kp-strapi-media-maritime-news-prod-main.s3.eu-west-1.amazonaws.com/Port_of_Long_Beach_f5844bc669.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="latest-update-card">
                <div className="latest-card-content">
                  <span>
                    <b>Ship Building</b> 16 Sep, 12:11
                  </span>
                  <h2>
                    Knutsen Group Takes Delivery of Advanced LNG Carrier from
                    Hyundai Samho
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo illo provident quae debitis iure, cupiditate, recusandae
                    amet distinctio asperiores vero voluptas laborum molestiae
                    temporibus dolores dolor magnam harum! Nostrum, eius.
                  </p>
                  <div className="user-news">
                    <Avatar
                      className="w-6 h-6 text-tiny"
                      src="https://cdn-icons-png.flaticon.com/512/870/870107.png"
                    />
                    <span>abc</span>
                  </div>
                </div>
                <div className="latest-card-img">
                  <img
                    src="https://kp-strapi-media-maritime-news-prod-main.s3.eu-west-1.amazonaws.com/NANTES_KNUTSEN_34014a6fa6.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="latest-update-card">
                <div className="latest-card-content">
                  <span>
                    <b>Cruises</b> 13 Sep, 17:47
                  </span>
                  <h2>
                    Fincantieri Delivers Cruise Ship to Explora Journeys of MSC
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quo illo provident quae debitis iure, cupiditate, recusandae
                    amet distinctio asperiores vero voluptas laborum molestiae
                    temporibus dolores dolor magnam harum! Nostrum, eius.
                  </p>
                  <div className="user-news">
                    <Avatar
                      className="w-6 h-6 text-tiny"
                      src="https://cdn-icons-png.flaticon.com/512/870/870107.png"
                    />
                    <span>abc</span>
                  </div>
                </div>
                <div className="latest-card-img">
                  <img
                    src="https://kp-strapi-media-maritime-news-prod-main.s3.eu-west-1.amazonaws.com/EXPLORA_II_2011f8268b.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaritimeNews;
