import React, { Component } from "react";
import "./Tools.css";
import ResultComponent from "./ResultComponent";
import KeyPadComponent from "./KeyPadComponent";
import Sidenav from "./Sidenav";

class Tools extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.clear();
    } else {
      //Set pressed button value
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  //Get result
  calculate = () => {
    try {
      this.setState({
        // Eslint disable next line
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  //Clear all entered numbers
  reset = () => {
    this.setState({
      result: "",
    });
  };

  //Clear numbers one by one
  clear = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div className="app">
        <Sidenav />
        <div className="container-cal">
          <div className="tools-body">
            <h1 id="title">Calculator</h1>
            <div className="calculator">
              {/* Get ResultComponent */}
              <ResultComponent result={this.state.result} />

              {/* Get KeyPadComponent */}
              <KeyPadComponent onClick={this.onClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tools;
