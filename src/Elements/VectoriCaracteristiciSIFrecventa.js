import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/vectori/eratostene.jpg"

function VectoriCaracterisitiSiFrecventa() {
  return (
    <div className="Card">
      <Subtitle text="Vectori caracteristici"></Subtitle>
      <Description
        text="-sunt niște vectori care vor reține doar valorile 0 / 1 (FALSE / TRUE)
-marchează dacă o valoare respectă sau nu o condiție cerută în problemă (de ex dacă un număr apare sau nu în șir)"
      ></Description>
      <Subtitle text="Vectori de frecvență"></Subtitle>
      <Description
        text="-sunt niște vectori care vor reține valori pozitive
-marchează de câte ori o valoare respectă sau nu o condiție (de ex numărul de apariții ale unui element)"
      ></Description>
      <Subtitle text="Ciurul lui Eratostene"></Subtitle>
      <Description
        text="-vector cu ajutorul căruia putem afla rapid numerele prime până la n (cu 1 sunt marcate numerele neprime, iar cu 0 numerele prime)
-algoritmul constă în parcurgerea fiecărui element de la 2 (deoarece 1 și 0 le vom marca dinainte ca fiind neprime) până la radical din n, iar pentru fiecare element care este prim (are valoarea 0 în vectorul ciur) vom parcurge toți multiplii lui până la n și îi marcăm ca fiind neprimi deoarece sigur vor avea mai mult de 2 divizori
-se poate adaugă și o reținere a valorilor prime, într-un alt vector pentru o accesare mai rapidă, cum s-a făcut în algoritmul de mai jos
-Complexitate O( n*log( log(n) ) )"
      ></Description>
      <img src={img1} className="mb-2" id="image75"></img>
    </div>
  );
}

export default VectoriCaracterisitiSiFrecventa;

/*













*/
