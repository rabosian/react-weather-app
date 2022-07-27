import React from "react";
import { Button, Box } from "@mui/material";

const DisplayButton = ({ cities, currentCity, handleCityChange }) => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        {/* #21b6ae #405453 */}
        <Button
          style={{ 
            backgroundColor: currentCity == null ? '#405453' : '#21b6ae', 
            fontFamily: "Finlandica" }}
          variant="contained"
          size="small"
          onClick={() => {
            handleCityChange()
          }}
        >
          Current
        </Button>
        {cities.map((item) => (
          <Button
            key={item}
            style={{ 
              backgroundColor: currentCity == item ? '#405453' : '#21b6ae', 
              fontFamily: "Finlandica" }}
            variant="contained"
            size="small"
            onClick={() => handleCityChange(item)}
          >
            {item}
          </Button>
        ))}
      </Box>
    </div>
  );
};

export default DisplayButton;
