import React from "react";
import "./Services.css";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Sidenav from "./Sidenav";

function onClickButton(event) {
  event.preventDefault();
}

export const Sevices = () => {
  return (
    <div className="app">
      <Sidenav />
      <div className="servicesContainer">
        <h1>Weather</h1>
        Please click below button to know the weather
        <br />
        <Button onClick={onClickButton} type="submit">
          <NavLink activeClassName="menu_active" to="/weather">
            Weather
          </NavLink>
        </Button>
        <br />
        <br />
        <h1>Currency Converter</h1>
        Please click below button for currency converter <br />
        <Button onClick={onClickButton} type="submit">
          <NavLink activeClassName="menu_active" to="/currencyconv">
            Currency Converter
          </NavLink>
        </Button>
        <br />
        <br />
        <h1>Recipies</h1>
        Please click below button to browse recipies <br />
        <Button onClick={onClickButton} type="submit">
          <NavLink activeClassName="menu_active" to="/recipies">
            Recipies
          </NavLink>
        </Button>
      </div>
    </div>
  );
};
