import "./App.css";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import DisplayBox from "./component/DisplayBox";
import DisplayButton from "./component/DisplayButton";

// 1. as soon as app starts, displaying the weather of current location
// 2. data includes location(city) name, weather, status
// 3. control panel contains 5 cities (current location, seoul, vancouver, paris, new york)
// 4. every fetching process includes loading spinner

function App() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true)
  const cities = ['Toronto', 'seoul','vancouver','paris','new york']
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCityName = async (cityname) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    setLoading(true)
    getCurrentLocation();
    setLoading(false)
  }, []);

  return (
    <div className="App">
      <div className="background">
        <div className="container">
          {loading ? <CircularProgress /> : <DisplayBox data={weather} />}
          <DisplayButton cities={cities} getCurrentLocation={getCurrentLocation} getWeatherByCityName={getWeatherByCityName} />
        </div>
      </div>
    </div>
  );
}

export default App;
