import "./App.css";
import { useEffect, useState } from "react";
import DisplayBox from "./component/DisplayBox";

// 1. as soon as app starts, displaying the weather of current location
// 2. data includes location(city) name, weather, status
// 3. control panel contains 5 cities (current location, seoul, vancouver, paris, newyork)
// 4. every fetching process includes loading spinner

function App() {
  const [weather, setWeather] = useState()

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setWeather(data)
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="App">
      <div className="background">
        <DisplayBox />
      </div>
    </div>
  );
}

export default App;
