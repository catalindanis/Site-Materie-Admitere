import React from "react";
import "../Style/Card.css";
import Title from "../Components/Title";
import Description from "../Components/Description";
import MiniTitle from "./Subtitle";

function Card() {
  return (
    <div className="Card">
      <Title text="Acesta este un titlu" margin="100px"/>
      <MiniTitle text="Acesta este un subtitlu"></MiniTitle>
      <Description text="Aceasta este o descriere" />
      
    </div>
  );
}

export default Card;
