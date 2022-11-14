import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import API_Page1 from "./components/Tools";


function App() {
  return (
    <div className="app">
  <Router>
    <Routes>
        <Route exact path="/" element={<API_Page1/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
</div>
  );
}
export default App;