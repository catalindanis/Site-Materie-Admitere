import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function SortariVectori() {
  return (
    <div className="Card">
      <Title text="Vectori - sortări" />
      <img src={img1} className = "mb-2" id="image100"></img>
      <img src={img2} className = "mb-2" id="image100"></img>
    </div>
  );
}

export default SortariVectori;
