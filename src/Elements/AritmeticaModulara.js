import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function AritmeticaModulara() {
  return (
    <div className="Card">
      <Title text="Aritmetica modulară"></Title>
      <Subtitle text="Adunarea și înmulțirea"></Subtitle>
      <Description
        text="(a + b) % N = (a % N + b % N) % N
(a * b) % N = ( (a % N) * (b % N) ) % N"
      ></Description>
      <Subtitle text="Scăderea"></Subtitle>
      <Description
        text="(a - b) % N = (a % N - b % N ) % N (nu este întotdeauna corectă, deoarece se poate ajunge la un rezultat negativ chiar dacă a > b)
-se rezolvă adunând un N la rezultat"
      ></Description>
    </div>
  );
}

export default AritmeticaModulara;
