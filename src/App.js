import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Tools from "./components/Tools";
import APIPage1 from "./components/Weather";
import Calculator from "./components/CurrencyConverter";


function App() {
  return (
    <div className="app">
  <Router>
    <Routes>
        <Route exact path="/" element={<APIPage1/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/tools" element={<Tools />} />
        <Route exact path="/api" element={<APIPage1 />} />
    </Routes>
  </Router>
</div>
  );
}
export default App;