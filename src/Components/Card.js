import React from "react";
import "../Style/Card.css";
import Title from "../Components/Title";
import Description from "../Components/Description";
import MiniTitle from "./Subtitle";
import imagineTest from "../Resources/Images/Color-yellow.jpg";

function Card() {
  return (
    <div className="Card">
      <Title text="Acesta este un titlu" margin="100px"/>
      <MiniTitle text="Acesta este un subtitlu"></MiniTitle>
      <Description text="Aceasta este o descriere" />
      <img src={imagineTest}></img>
    </div>
  );
}

export default Card;
