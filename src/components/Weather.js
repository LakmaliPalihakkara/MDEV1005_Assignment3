import React, { useEffect, useState } from "react";
import WeatherPage from "./WeatherPage";
import Sidenav from "./Sidenav";

export default function Tools() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      // Fetch weather data according to current lat long positions
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=e1fc04a135bdc139bd090698a794593d`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="app">
      <Sidenav />
      {typeof data.main != "undefined" ? (
        // Pass fetched data to APIPage1
        <WeatherPage weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
