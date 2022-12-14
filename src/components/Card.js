import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Recipies.css";

const CardComponent = (props) => {
  return (
    <Card className="insideCardPadding">
      <b>{props.t}</b>
      <br />
      <b>Calories: </b>
      {props.cal}
      <br />
      <img src={props.img}></img>
    </Card>
  );
};

export default CardComponent;
