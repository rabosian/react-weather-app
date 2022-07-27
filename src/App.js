import "./App.css";
import { useEffect, useState } from "react";
import { CircularProgress, Alert } from "@mui/material";
import DisplayBox from "./component/DisplayBox";
import DisplayButton from "./component/DisplayButton";

function App() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);
  const [currentCity, setCurrentCity] = useState("");
  const [error, setError] = useState("");

  const cities = ["Toronto", "vancouver", "seoul", "paris", "new york"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      getWeatherByCurrentLocation(latitude, longitude);
    });
  };

  const getWeatherByCityName = async () => {
    try {
      setError('')
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      setError('')
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true)
    if (!currentCity) {
      getCurrentLocation();
    } else {
      getWeatherByCityName();
    }
  }, [currentCity]);

  const handleCityChange = (selectedCity) => {
    if (!selectedCity) {
      setCurrentCity();
    } else {
      setCurrentCity(selectedCity);
    }
  };

  return (
    <div className="App">
      <div className="background">
        <div className="container">
          {error && <Alert severity="error">error</Alert>}
          {loading ? <CircularProgress /> : <DisplayBox data={weather} />}
          <DisplayButton
            cities={cities}
            currentCity={currentCity}
            handleCityChange={handleCityChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
