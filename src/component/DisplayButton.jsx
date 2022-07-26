import React from "react";
import { Button, Box } from "@mui/material";

const DisplayButton = ({ cities, changeLocation }) => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        <Button
          style={{ backgroundColor: "#21b6ae", fontFamily: "Finlandica" }}
          variant="contained"
          size="small"
        >
          Current
        </Button>
        {cities.map((item) => (
          <Button
            style={{ backgroundColor: "#21b6ae", fontFamily: "Finlandica" }}
            variant="contained"
            size="small"
            onClick={}
          >
            {item}
          </Button>
        ))}
      </Box>
    </div>
  );
};

export default DisplayButton;
