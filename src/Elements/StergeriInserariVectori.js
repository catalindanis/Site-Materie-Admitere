import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/vectori/inserare.jpg"
import img2 from "../Resources/Images/vectori/stergere.jpg"

function StergeriSiInserari() {
  return (
    <div className="Card">
      <Title text="Vectori - ștergeri și inserări" />
      <img src={img1} className = "mb-2" id="image75"></img>
      <img src={img2} className = "mb-2" id="image75"></img>
    </div>
  );
}

export default StergeriSiInserari;
