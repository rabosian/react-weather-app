import React from "react";
import styles from "./Display.module.css";
import DisplayButton from "./DisplayButton";
// data.name = 'North York;
// data.main.temp = 23.42
// data.main.temp_max = 23.42
// data.main.temp_min = 23.42
// data.weather.description

const DisplayBox = ({ data }) => {
  return (
    <div className={styles.texts}>
      <h2>{data && data.name}</h2>
      <h2>{data && data.main.temp} °C</h2>
      <h4>MAX {data && data.main.temp_max}°C / MIN: {data && data.main.temp_min}°C </h4>
      <h3>{data && data.weather[0].description}</h3>
    </div>
  );
};

export default DisplayBox;
