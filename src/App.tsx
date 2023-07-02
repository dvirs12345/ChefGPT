import React from "react";
import pic from "./pics/chef 1.png";
import "./App.css";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import NewRecepiePage from "./screens/NewRecepiePage";
import { createTheme } from "@mui/material/styles";
import Direction from "./Direction";

function App() {
  const theme = createTheme({
    direction: "rtl",
  });
  return (
    <div className="App">
      <Direction></Direction>
    </div>
  );
}

export default App;
