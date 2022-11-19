import { useState } from "react";
import Calendar from "react-calendar";
import "./Calender.css";
import Sidenav from "./Sidenav";

function Calender() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <Sidenav />
      <div className="overallContainer">
        <h1 className="text-center">React Calendar</h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className="text-center">
          <span className="bold">Selected Date:</span> {date.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default Calender;
