import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Tools from "./components/Tools";
import WeatherPage from "./components/Weather";
import CurrencyConverter from "./components/CurrencyConverter";


function App() {
  return (
    <div className="app">
  <Router>
    <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/tools" element={<Tools />} />
        <Route exact path="/weather" element={<WeatherPage />} />
        <Route exact path="/currency_converter" element={<CurrencyConverter />} />
    </Routes>
  </Router>
</div>
  );
}
export default App;