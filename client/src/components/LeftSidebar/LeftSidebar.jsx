// import React, { useState } from "react";
// import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";

// // Coordinates of ports
// const ports = [
//   { label: "Mumbai", latitude: 18.9402, longitude: 72.8352 },
//   { label: "Chennai", latitude: 13.0827, longitude: 80.2707 },
//   { label: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
//   { label: "Visakhapatnam", latitude: 17.6868, longitude: 83.2185 },
//   { label: "Cochin", latitude: 9.9312, longitude: 76.2673 },
//   { label: "Paradip", latitude: 20.3168, longitude: 86.6101 },
//   { label: "Mangalore", latitude: 12.9141, longitude: 74.856 },
//   { label: "Kandla", latitude: 23.0333, longitude: 70.2167 },
//   { label: "Tuticorin", latitude: 8.7642, longitude: 78.1348 },
//   { label: "Haldia", latitude: 22.0667, longitude: 88.069 },
//   { label: "Ennore", latitude: 13.2416, longitude: 80.3203 },
//   { label: "Port Blair", latitude: 11.6234, longitude: 92.7265 },
// ];

// const LeftSidebar = ({ setGeoData }) => {
//   const [source, setSource] = useState(null);
//   const [destination, setDestination] = useState(null);

//   const handleShowRoute = async () => {
//     console.log(0);
//     console.log("Source:", source);
//     console.log("Destination:", destination);
//     if (source && destination) {
//       const requestBody = {
//         startLat: source.latitude,
//         startLon: source.longitude,
//         endLat: destination.latitude,
//         endLon: destination.longitude,
//       };

//       console.log(1);

//       const response = await fetch("http://127.0.0.1:5000/get_route", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestBody),
//       });

//       const routeData = await response.json();
//       console.log(routeData);
//       setGeoData(routeData);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl text-white">Select</h1>

//       <div
//         className="w-full flex justify-center flex-col gap-4"
//         style={{ marginTop: "2em" }}
//       >
//         <div>
//           <h3 className="text-white text-small pb-2">Enter the source</h3>
//           <Autocomplete
//             className="max-w-xs"
//             onChange={(value) => {
//               console.log("Source selected:", value);
//               setSource(ports.find((port) => port.label === value));
//             }}
//           >
//             {ports.map((port) => (
//               <AutocompleteItem key={port.label} value={port.label}>
//                 {port.label}
//               </AutocompleteItem>
//             ))}
//           </Autocomplete>
//         </div>

//         <div>
//           <h3 className="text-white text-small pb-2">Enter the destination</h3>
//           <Autocomplete
//             className="max-w-xs"
//             onChange={(value) => {
//               console.log("Destination selected:", value);
//               setDestination(ports.find((port) => port.label === value));
//             }}
//           >
//             {ports.map((port) => (
//               <AutocompleteItem key={port.label} value={port.label}>
//                 {port.label}
//               </AutocompleteItem>
//             ))}
//           </Autocomplete>
//         </div>

//         <Button color="primary" className="mt-2" onClick={handleShowRoute}>
//           Show Route
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default LeftSidebar;

import React, { useState } from "react";
import { Button } from "@nextui-org/react";

// Coordinates of ports
const ports = [
  { label: "Mumbai", latitude: 18.9402, longitude: 72.8352 },
  { label: "Chennai", latitude: 13.0827, longitude: 80.2707 },
  { label: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
  { label: "Visakhapatnam", latitude: 17.6868, longitude: 83.2185 },
  { label: "Cochin", latitude: 9.9312, longitude: 76.2673 },
  { label: "Paradip", latitude: 20.3168, longitude: 86.6101 },
  { label: "Mangalore", latitude: 12.9141, longitude: 74.856 },
  { label: "Kandla", latitude: 23.0333, longitude: 70.2167 },
  { label: "Tuticorin", latitude: 8.7642, longitude: 78.1348 },
  { label: "Haldia", latitude: 22.0667, longitude: 88.069 },
  { label: "Ennore", latitude: 13.2416, longitude: 80.3203 },
  { label: "Port Blair", latitude: 11.6234, longitude: 92.7265 },
  { label: "Japan", latitude: 34.18333333333333, longitude: 3133.1 },
];

const LeftSidebar = ({ setGeoData }) => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleShowRoute = async () => {
    console.log("Source:", source);
    console.log("Destination:", destination);
    if (source && destination) {
      const requestBody = {
        startLat: source.latitude,
        startLon: source.longitude,
        endLat: destination.latitude,
        endLon: destination.longitude,
      };

      const response = await fetch("http://127.0.0.1:5000/get_route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const routeData = await response.json();
      console.log(routeData);
      setGeoData(routeData);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl text-white">Select</h1>

      <div
        className="w-full flex justify-center flex-col gap-4"
        style={{ marginTop: "2em" }}
      >
        <div>
          <h3 className="text-white text-small pb-2">Enter the source</h3>
          <select
            className="w-full p-2 rounded-md"
            onChange={(e) =>
              setSource(ports.find((port) => port.label === e.target.value))
            }
          >
            <option value="">Select Source</option>
            {ports.map((port) => (
              <option key={port.label} value={port.label}>
                {port.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="text-white text-small pb-2">Enter the destination</h3>
          <select
            className="w-full p-2 rounded-md"
            onChange={(e) =>
              setDestination(
                ports.find((port) => port.label === e.target.value)
              )
            }
          >
            <option value="">Select Destination</option>
            {ports.map((port) => (
              <option key={port.label} value={port.label}>
                {port.label}
              </option>
            ))}
          </select>
        </div>

        <Button color="primary" className="mt-2" onClick={handleShowRoute}>
          Show Route
        </Button>
      </div>
    </div>
  );
};

export default LeftSidebar;
