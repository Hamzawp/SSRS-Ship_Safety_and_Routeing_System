import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LiveMapSidebar/LeftSidebar";
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
                  src="https://kp-strapi-media-maritime-news-prod-main.s3.eu-west-1.amazonaws.com/DSG_5da3e3a44f.png"
                  alt=""
                />
              </div>

              <div className="featured-content">
                <span>
                  <b>General</b> 16 Sep, 15:09
                </span>
                <h1>
                  Bunker vessel and supplier banned for attempting to deceive
                  UAE Maritime Administration
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque non voluptatibus expedita et eos rem ullam ut quaerat
                  animi architecto beatae tenetur consequuntur tempora id hic
                  quam neque sed, libero consectetur, eum asperiores. Optio
                  deserunt eius, voluptates ratione dolores deleniti enim nulla
                  alias cupiditate eligendi. Dolorum veniam obcaecati nesciunt
                  corporis.
                </p>

                <div className="user-news">
                  <Avatar
                    className="w-6 h-6 text-tiny"
                    src="https://cdn-icons-png.flaticon.com/512/870/870107.png"
                  />
                  <span>abc</span>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Labore, mollitia. Adipisci totam omnis distinctio iure dolor,
                ad, nobis iusto rerum, ratione sint ex alias necessitatibus?
                Dolore assumenda obcaecati distinctio voluptatibus, eos esse
                unde commodi voluptatem fugit nemo exercitationem tempore ad
                expedita sapiente repudiandae modi voluptas beatae reprehenderit
                magni nisi numquam.
              </p>
            </div>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Labore, mollitia. Adipisci totam omnis distinctio iure dolor,
                ad, nobis iusto rerum, ratione sint ex alias necessitatibus?
                Dolore assumenda obcaecati distinctio voluptatibus, eos esse
                unde commodi voluptatem fugit nemo exercitationem tempore ad
                expedita sapiente repudiandae modi voluptas beatae reprehenderit
                magni nisi numquam.
              </p>
            </div>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Labore, mollitia. Adipisci totam omnis distinctio iure dolor,
                ad, nobis iusto rerum, ratione sint ex alias necessitatibus?
                Dolore assumenda obcaecati distinctio voluptatibus, eos esse
                unde commodi voluptatem fugit nemo exercitationem tempore ad
                expedita sapiente repudiandae modi voluptas beatae reprehenderit
                magni nisi numquam.
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
