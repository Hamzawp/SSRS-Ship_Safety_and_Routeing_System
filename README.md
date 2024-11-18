# SSRS

<br/>

<p align="center">
  <img src="./client/assets/images/logo.png" width="20%" />
</p>

<p align="center">
  SSRS - Ship Safety and Routeing System
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
- [Demonstration & Features](#demonstration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Authors](#authors)

## About The Project

Development of a versatile algorithm for optimal ship routing in the Indian Ocean, optimizing for fuel consumption, voyage time, safety, and other parameters, using real-time weather data and ship characteristics, with potential to expand optimization features

- Optimizing a ship's route and speed can reduce CO2 emissions by up to 48–60% and can save billions of dollars.
- Our algorithm utilizes the CMEMS(ocean dataset) and INCOIS(Indian ocean data) ocean dataset for getting precise marine information and ocean conditions along with the accurate International Ports data after consulting with experienced marine officers.
- The application allows ship captains to adjust routes based on cost or fuel optimization for a customized path. 
- Our solution's algorithm self-improves using past ship incidents, becoming smarter in suggesting the most efficient routes.

**Features**

- Creating a custom algorithm considering a combination of nsga2, pso, dijkstra and cost matrix

- Offers a desktop app via ElectronJS with both online and offline route-finding, and a website with online capabilities.

- SOS feature in the application for a ship in isolation or danger (oil spills,crash etc).

- Nearby port visiblity & route re-configuration  for emergency stop, refueling at bunkering station.

- Provides radar visibility and communication, even via radio during internet outages, for urgent ship needs and supply requests.


## Architecture

![image](https://github.com/user-attachments/assets/b7caa1d6-b23b-4eda-86f1-a2fb28a6ec75)

## Demonstration

https://www.youtube.com/watch?v=hkY5oynES-s

<br />

### Technologies Used

- Frontend
  - React Native
  - CSS
- Backend
  - Flask
  - Firebase
  - LLaMA 3.2
  - Computer Vision

<br />

## Contributing

**Local Setup || Project Structure**

NOTE: Individual instructions can be found in respective directories.

- The project contains 4 broad directories.

```
*
├───client
└───server
```

- `client`: The frontend for the application.
- `server`: The backend for the application.

<br />

**Client**

For local setup of frontend:

- `cd client`
- `npm i`
- `npx expo start`

Structure

```
client
├───app
├───assets
├───components
└───configs
```

Individual Component & Pages Structure

```
component
└───component.jsx
```

```
app
├───(tabs)
├───└───tab.jsx
├───index.jsx
├───productdetail.jsx
└───_layout.jsx
```

<br />

**Server**

For local setup of backend:

- `cd server`
- `venv/Scripts/activate`
- `python app.py`

```
server
├───harmful-ingriedents
├───app.py
├───finetune.py
└───requirements.txt
```

<br />

## Authors

- Om Shete
- Hamza Sayyed
- Mohib Abbas Sayed
- Parth Puranik
