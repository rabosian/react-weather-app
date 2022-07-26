import React from "react";
import styles from "./Display.module.css";
import DisplayButton from "./DisplayButton";
// data.name = 'North York;
// data.main.temp = 23.42
// data.main.temp_max = 23.42
// data.main.temp_min = 23.42
// data.weather.description

const DisplayBox = ({ weatherData }) => {
  return (
    <div className={styles.container}>
      <div>Toronto</div>
      <h2>Temperature</h2>
      <h3>Cloudy</h3>
      <DisplayButton />
    </div>
  );
};

export default DisplayBox;
