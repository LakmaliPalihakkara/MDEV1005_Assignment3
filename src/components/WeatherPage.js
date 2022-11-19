import React from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";
import "./WeatherPage.css";
import image from "../images/all-weather.jpeg";
import Sidenav from "./Sidenav";

const CardExampleCard = ({ weatherData }) => (
  <div className="body">
    <div className="header">
      <h2 class="tools-topic">Current Weather Report</h2>
      <h6 class="weather-source">Source: OpenWeather</h6>

      <Card id="card" class="col d-flex justify-content-center">
        <div class="container">
          <div>
            {/* Get the city name */}
            <h3 id="name" className="weather-data">{weatherData.name}</h3>

            {/* Get the current date */}
            <h5 className="weather-data">{moment().format("LL")}</h5>

            {/* Get the current day */}
            <h5 className="weather-data">{moment().format("dddd")}</h5>

            <hr class="line"></hr>

            {/* Get the current tempreture */}
            <h1 className="weather-data">{weatherData.main.temp} &deg;C</h1>

            <hr class="line"></hr>

            {/* Get the current humidity */}
            <h6 className="weather-data">
              Humidity:{weatherData.main.humidity} C
            </h6>

            {/* Get the current weather status */}
            <h6 className="weather-data">
              Weather Status: {weatherData.weather[0].main}
            </h6>
          </div>

          <img src={image} class="img" alt="weather image" />
        </div>
      </Card>
    </div>
  </div>
);

export default CardExampleCard;
