import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/baze_de_numeratie/nr_baza_2.jpg"
import img2 from "../Resources/Images/baze_de_numeratie/nr_baza_10.jpg"

function TipuriDeDate() {
  return (
    <div className="Card">
      <Title text="Baze de numerație" />
      <Description text="-un număr poate fi scris ca sumă de puteri distincte ale lui k => numărul se scrie doar cu cifre de 0 și 1 în baza k
-un număr în baza k se divide cu k-1 <=> suma cifrelor numărului este divizibilă cu k-1 (generalizarea divizibilității cu 9 din baza 10)
-un număr în baza k se divide cu k+1 <=> diferența dintre suma cifrelor de pe poziții pare și suma cifrelor de pe poziții impare este divizibilă cu k+1"/>
    <Subtitle text="Transformare din baza b in baza 10 :"></Subtitle>
    <img src={img1} className = "mb-2" id="image50"></img>
    <Subtitle text="Transformare din baza 10 in baza 2 :"></Subtitle>
    <img src={img2} className = "mb-2" id="image25"></img>
    </div>
  );
}

export default TipuriDeDate;
