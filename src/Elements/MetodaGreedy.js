import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function MetodaGreedy() {
  return (
    <div className="Card">
      <Title text="Metoda greedy"></Title>
      <Description
        text="-este o metodă de programare care nu are un tipar propriu-zis
-nu tot timpul duce la un rezultat corect
-la fiecare pas se face alegerea cea mai favorabilă la momentul actual, indiferent dacă la următorii pași ar fi fost mai bună altă alegere"
      ></Description>
      <Subtitle text="Probleme diverse"></Subtitle>
    </div>
  );
}

export default MetodaGreedy;
