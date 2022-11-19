import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Tools from "./components/Tools";
import WeatherPage from "./components/Weather";
import CurrencyConverter from "./components/CurrencyConverter";

import CurrencyConv from "./components/CurrencyConverter";
import Sidenav from "./components/Sidenav";
import { onAuthStateChanged } from "firebase/auth";
import * as firebaseConfig from "./firebase";
import * as React from "react";
import { useState, useEffect } from "react";
import Calender from "./components/Calender";
import Recipies from "./components/Recipies";
import { Sevices } from "./components/Sevices";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const auth = firebaseConfig.auth;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUserSignedIn(true);
    } else {
      setIsUserSignedIn(false);
    }
  });

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/tools" element={<Tools />} />
        <Route exact path="/weather" element={<WeatherPage />} />
        <Route
          exact
          path="/currency_converter"
          element={<CurrencyConverter />}
        />
        <Route exact path="/calender" element={<Calender />} />
        <Route exact path="/recipies" element={<Recipies />} />
        <Route exact path="/currencyconv" element={<CurrencyConv />} />
        <Route exact path="/sevices" element={<Sevices />} />
      </Routes>
    </div>
  );
}
export default App;
