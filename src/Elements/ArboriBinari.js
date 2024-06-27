import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/arbori binari/1.jpg";
import img2 from "../Resources/Images/arbori binari/2.png";
import img3 from "../Resources/Images/arbori binari/3.png";
import img4 from "../Resources/Images/arbori binari/4.png";

function ArboriBinari() {
  return (
    <div className="Card">
      <Title text="Arbori binari"></Title>
      <Description
        text="-se numește arbore binar un arbore cu rădăcină în care fiecare nod are cel mult doi descendenți direcți: descendentul stâng și descendentul drept
-dacă un nod are un singur descendent acesta va fi descendent stâng sau drept – acest lucru trebuie să fie precizat
-fiecare nivel i = 0, 1, 2, ... dintr-un arbore binar conține cel mult 2^i noduri
-un arbore binar de înălțime h conține cel mult 2^(h+1) - 1 noduri
-subarborii unui arbore binar vor fi la rândul lor arbori binari"
      ></Description>
      <Subtitle text="Arborele binar strict"></Subtitle>
      <Description text="-este un arbore binar în care fiecare nod cu excepția celor terminale are exact doi descendenți
-are un număr impar de noduri n = 2 * k - 1, unde k este nr de noduri terminale"></Description>
      <img src={img2} className="mb-2" id="image50"></img>
      <Subtitle text="Arborele binar plin"></Subtitle>
      <Description text="-este un arbore binar în care pe fiecare nivel există număr maxim de noduri
-are un număr impar de noduri n = 2 * k - 1, unde k este nr de noduri terminale"></Description>
      <img src={img3} className="mb-2" id="image50"></img>
      <Subtitle text="Arborele binar complet"></Subtitle>
      <Description
        text="-este un arbore binar în care pe fiecare nivel există număr maxim de noduri, eventual mai puțin pe ultimul nivel
-arborele binar plin este și arbore binar complet"
      ></Description>
      <img src={img4} className="mb-2" id="image50"></img>
      <Subtitle text="Parcurgerea arborilor binari"></Subtitle>
      <Description
        text="-parcurgerea în inordine - se parcurge mai întâi subarborele stâng, apoi rădăcina, apoi subarborele drept (4 7 2 1 5 3 6)
-parcurgerea în preordine - se parcurge mai întâi rădăcina, apoi subarborele stâng, apoi subarborele drept (1 2 4 7 3 5 6)
-parcurgerea în postordine - se parcurge mai întâi subarborele stâng, apoi subarborele drept, apoi rădăcina (7 4 2 5 6 3 1)"
      ></Description>
      <img src={img1} className="mb-2" id="image50"></img>
      <Description text=""></Description>
    </div>
  );
}

export default ArboriBinari;
