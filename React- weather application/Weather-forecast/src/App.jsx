// import "./App.scss";

import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { API_Key } from "./apiKey";
import { useEffect, useState } from "react";
import wind from "../src/assets/images/winds-weather-symbol.png";
import humidity from "../src/assets/images/humidity.png";

import Clouds from "../src/assets/images/Clouds.png";
import Rain from "../src/assets/images/Rain.png";
import Clear from "../src/assets/images/Clear.png";
import Sunny from "../src/assets/images/Sunny.png";
import Smoke from "../src/assets/images/Smoke.png";
import Mist from "../src/assets/images/Mist.png";
import Snow from "../src/assets/images/Snow.png";


function App() {
  let API_URL = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
  const API_Key = "1a63b1853e8b62b75875fab6505b31b5"; // it is userkey. when I create a account in openweather website then we get API-Key
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  const handleInput = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };
  const weatherImages = {
    Clouds,
    Rain,
    Clear,
    Mist,
    Sunny,
    Smoke,
    Snow,
  };
  // const myFun = async () => {
  //   const get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_Key}`);
  //   // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} make some changes like when we write varible in `` use $ symbol

  //   const jsonData = await get.json();

  //   console.log(jsonData);
  //   setData(jsonData);

  //   if (search === "") {
  //     alert("please enter city name");
  //   }
    
  // };
    const myFun = async () => {
      if (search === "") {
        alert("Please enter a city name");
        return;
      }

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_Key}`
        );
        const jsonData = await response.json();

        if (response.ok) {
          setData(jsonData);
          setError(null); // Clear any previous errors
        } else {
          setData(null); // Clear previous data
          setError(jsonData.message); // Set error message from API
        }
      } catch (err) {
        setError("An unexpected error occurred. Please try again.");
        setData(null);
      }
    };

  return (
    <div>
      <div className="weather">
        {/* <h1>Weather forecast</h1> */}
        <div className="search-section">
          <div className="search-box">
            <i className="bi bi-geo-alt-fill"></i>
            <input
              type="search"
              onChange={handleInput}
              placeholder="Enter your location"
            />
            <button id="search-icon" onClick={myFun}>
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        {error ? (
          <div className="error-message">
            <h2>{error}</h2>
          </div>
        ) :data && data.weather ? (
          <div className="data">
            <h2>{data.name}</h2>

            <img
              src={weatherImages[data.weather[0].main] || Default}
              alt={data.weather[0].main}
            />

            <h1>{Math.floor(data.main.temp - 273.15)} °C</h1>
            <h2>{data.weather[0].description}</h2>
            <div className="child-container">
              <div className="wind">
                <img src={wind} alt="" />
                <h2>
                  <span>{data.wind.speed} Km/h</span><br />
                  wind speed
                </h2>
              </div>
              <div className="humidity">
                <img src={humidity} alt="" />
                <h2>
                  <span>{data.main.humidity} %</span> <br />
                  Humidity
                </h2>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
