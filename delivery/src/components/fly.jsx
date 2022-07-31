import React, { useState } from "react";
import Axios from "axios";
  
const API_KEY = "<YOUR_API_KEY>";
  
const Fly = ({ setLat, setLon }) => {
  
  // Setting up the state variable to store user input
  const [city, setCity] = useState("Kolkata");
  
  // Function to call the API and set the
  // coordinates accordingly
  function getCoordinates() {
    Axios.get(
      `https://api.mapbox.com/geocoding/v5/
        mapbox.places/${city}.json?access_token=${API_KEY}`
    ).then((res) => {
  
      // Longitude
      setLon(res.data.features[0].geometry.coordinates[0]);
        
      // Latitude
      setLat(res.data.features[0].geometry.coordinates[1]);
    });
  }
  
  return (
    <div className="fly">
      <h2>Enter delivery address </h2>
      <div className="inp-box">
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button onClick={() => getCoordinates()}>Go</button>
      </div>
    </div>
  );
};
  
export default Fly;