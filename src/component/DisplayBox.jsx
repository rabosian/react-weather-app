import React from "react";
import styles from "./DisplayBox.module.css";

const DisplayBox = ({ data }) => {
  return (
    <div className={styles.texts}>
      <h1>{data && data.name}</h1>
      <h2>{data && data.main.temp} °C</h2>
      <h4>MAX {data && data.main.temp_max}°C / MIN {data && data.main.temp_min}°C </h4>
      <h3>{data && data.weather[0].description}</h3>
    </div>
  );
};

export default DisplayBox;
