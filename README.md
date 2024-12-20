# SSRS - Ship Safety And Routeing System

<br/>

<p align="center">
  <img src="./client/public/logo.jpg" width="20%" />
</p>

<p align="center">
  Ship Routing Algorithm to Minimize Fuel consumption and CO2 emission
  <br />
  <br />
  <a href="#table-of-contents"><b>Explore the docs »</b></a>
  <br />
  <br />
  <a href="#architecture-and-design">Architecture</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#demonstration">Features</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#contributing">Local Setup</a>
  <br />
</p>

## Table Of Contents

- [About the Project](#about-the-project)
- [Architecture](#architecture)
- [Impacts and Benefits](#impacts-and-benefits)
- [Demonstration](#demonstration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Authors](#authors)

## About The Project

<details>
  <summary>Development of a versatile algorithm for optimal ship routing in the Indian Ocean, optimizing for fuel consumption, voyage time, safety, and other parameters, using real-time weather data and ship characteristics, with potential to expand optimization features</summary>
  <br/>
- Optimizing a ship's route and speed can reduce CO2 emissions by up to 48–60% and can save billions of dollars.<br/>
- Our algorithm utilizes the CMEMS(ocean dataset) for getting precise marine information and ocean conditions along with the accurate International Ports data after consulting with experienced marine officers.<br/>
- The application allows ship captains to adjust routes based on cost or fuel optimization for a customized path. <br/>
- Our solution's algorithm self-improves using past ship incidents, becoming smarter in suggesting the most efficient routes.
</details>
<br />

## Architecture

<img src="./client/public/architecture.jpg" width="100%" />
<br />

## Impacts and Benefits

<details>
  <summary>Potential Impact on the Stakeholders:</summary>
  
1. Shipping Companies: Significant cost savings through optimized fuel-efficient routes and real-time data to avoid delays, improving overall efficiency and safety.

2. Ship Crew: Immediate assistance can be received from nearby ships through a radar system, improving emergency safety.

3. Logistics Companies: Supply chain optimization with real-time updates, ensuring better reliability in delivery schedules and reducing disruptions.

4. Port Authorities: Improved traffic management by providing visibility of incoming ships and reducing port congestion through efficient scheduling.

5. Maritime Insurers: Enhanced risk assessment using real-time and historical data, reducing incidents with SOS features and live ship tracking.
</details>
<details>
<summary>Benefits of the Solution:</summary>
  
1. Environmental: The solution promotes lower carbon emissions by steering ships through more fuel-efficient routes and avoiding ecologically sensitive areas, contributing to sustainable maritime operations. 

2. Resource Management: Nearby port visibility allows efficient refueling and docking, minimizing unnecessary stops and optimizing operational time.

3. Safety and Risk Mitigation: Live SOS alerts and weather data enhance crew safety, helping ships avoid dangerous conditions and receive quick assistance.

4. Operational Efficiency: Real-time ocean data ensures optimal routing and minimizes delays, while customizable routes improve flexibility for different vessel types.
</details>

## Explaination

https://github.com/user-attachments/assets/9abfba73-2522-4a79-a0e7-a7546574e381

<br />

## Demonstration

<p>Live Map Page</p>

![image](https://github.com/user-attachments/assets/68c2f1ea-1302-449e-9940-20efa28aae95)

<br />

<p>Show Route Page</p>

![image](https://github.com/user-attachments/assets/e586ec8a-c2dc-4987-9c9a-b469da17e626)

<br />

<p>Maritime News Page</p>

![image](https://github.com/user-attachments/assets/313cd068-38ca-49b5-86ea-f063e90e7c09)

![image](https://github.com/user-attachments/assets/3b67dfeb-179f-496f-a874-c6b1723b0588)

<br />

<p>Ship Details Page</p>

![image](https://github.com/user-attachments/assets/5b9c959d-12f8-4bd6-aec8-0dedb1dae540)

<br />

<p>Past History Page</p>

![image](https://github.com/user-attachments/assets/5cb13583-f0c4-410f-8d44-ad92b9882ce6)

![image](https://github.com/user-attachments/assets/cffafda3-a3c2-447a-940f-a96cf9d0c7f9)

<br />

<p>Commands Page</p>

![image](https://github.com/user-attachments/assets/3d808f4b-66ad-4cda-8bb5-a2ddac113b19)

<br />

## Technologies Used

- Frontend
  - React 
  - CSS
- Backend
  - Flask
- Algorithm
  - Combination of dijkstra and cost matrix

<br />

## Contributing

**Local Setup || Project Structure**

NOTE: Individual instructions can be found in respective directories.

- The project contains 4 broad directories.

```
*
├───client
├───data
├───processing
└───server
```

- `client`: The frontend for the application.
- `data`: The dataset for the applications.
- `processing`: Processing on the dataset
- `server`: The backend for the application.

<br />

**Client**

For local setup of frontend:

- `cd client`
- `npm i`
- `npm run dev`

Structure

```
src
├───assets
├───components
├───Pages
├───App.jsx
└───main.jsx
```

Individual Component & Pages Structure

```
component
├───component.jsx
└───component.css
```

```
pages
├───page.jsx
└───page.css
```

<br />

**Download the data**

Copernicus Marine Service
- Physical dataset

    - [download](https://data.marine.copernicus.eu/product/GLOBAL_ANALYSISFORECAST_PHY_001_024/description)

- Waves dataset

    - [download](https://data.marine.copernicus.eu/product/GLOBAL_ANALYSISFORECAST_WAV_001_027/description)

```
data
├───GLOBAL_ANALYSISFORECAST_PHY_001_024/(Physical dataset files)
└───GLOBAL_ANALYSISFORECAST_WAV_001_027/(Waves dataset files)
```
For ex,
```
├───GLOBAL_ANALYSISFORECAST_PHY_001_024/
    ├───glo12_rg_1d-m_20230620-20230620_3D-uovo_hcst_R20230628.nc
    ├───glo12_rg_1d-m_20230621-20230621_3D-uovo_hcst_R20230705.nc
    ├───glo12_rg_1d-m_20230622-20230622_3D-uovo_hcst_R20230705.nc
└───GLOBAL_ANALYSISFORECAST_WAV_001_027/
    ├───mfwamglocep_2023062000_R20230621_12H.nc
    ├───mfwamglocep_2023062012_R20230621_12H.nc
    ├───mfwamglocep_2023062100_R20230622_12H.nc
```

<br />

**Server**

For local setup of backend:

- `cd server`
- `python app.py`

```
server
└───app.py
```

<br />

## Authors

- Hamza Sayyed
    - [LinkedIn](https://shorturl.at/hjAEI)
- Om Shete
    - [LinkedIn](https://www.linkedin.com/in/om-shete-25748522a/)
- Mohib Abbas Sayed
- Parth Puranik
- Vedant Borkar
- Nikshita Karkera

## License 📜

[GNU License](https://github.com/Hamzawp/SSRS-Ship_Safety_and_Routeing_System/blob/master/LICENSE.txt)
