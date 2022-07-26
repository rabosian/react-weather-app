import React from "react";
import { Button, Box } from "@mui/material";

const DisplayButton = () => {
  return (
    <div style={{width: '100%'}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 2          
        }}
      >
        <Button variant="contained" size="small">
          Current
        </Button>
        <Button variant="contained" size="small">
          Seoul
        </Button>
        <Button variant="contained" size="small">
          Vancouver
        </Button>
        <Button variant="contained" size="small">
          Paris
        </Button>
        <Button variant="contained" size="small">
          New York
        </Button>
      </Box>
    </div>
  );
};

export default DisplayButton;
