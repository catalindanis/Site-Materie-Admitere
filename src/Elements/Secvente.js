import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/vectori/sume_partiale_matrici.jpg";
import img2 from "../Resources/Images/vectori/kadane_maxima.jpg";
import img3 from "../Resources/Images/vectori/kadane_minima.jpg";

function Secvente() {
  return (
    <div className="Card">
      <Title text="Secvențe"></Title>
      <Description
        text="-secvențele reprezintă o succesiune de elemente consecutive din șir
-într-un șir de n elemente, avem un total de n*(n-1) / 2 secvențe (n secvențe de lungime 1, n-1 secvențe de lungime 2, n-2 secvențe de lungime 3 … )"
      ></Description>
      <Subtitle text="Sume parțiale în vectori"></Subtitle>
      <Description
        text="-pentru un vector v, se construiește un vector suplimentar s în care 
s[i] = s[i-1] + v[i]
-practic, s[i] o să rețină suma tuturor elementelor din vectorul v până la poziția i inclusiv elementul de pe poziția i, și astfel putem să accesăm într-o complexitate O(1) orice sumă a unei secvențe din vector
- suma elementelor din secvența [st, dr] va fi egală cu : 
suma = s[dr] - s[st-1]"
      ></Description>
      <Subtitle text="Secvența de sumă maximă (sau minimă) (Algoritmul lui Kadane)"></Subtitle>
      <Description
        text="-acest algoritm găsește în complexitate liniară O(n) secvența de sumă maximă dintr-un șir în care elementele sunt întregi (dacă ar fi doar elemente naturale, atunci secvența de sumă maximă ar fi clar întregul șir)
-fiecare element este adăugat la o sumă curentă, și la fiecare pas se verifică dacă suma curentă nu este cumva maximă; dacă la un moment dat, suma curentă ajunge negativă, atunci se resetează suma la 0, deoarece dacă am lăsa suma negativă am porni cu un așa-zis handicap.
-când vine vorba de găsirea secvenței cu sumă minimă, algoritmul este asemănător, singurele lucruri care se schimbă este că la fiecare pas vom căuta suma minimă, iar suma curentă se resetează dacă ajunge pozitivă"
      ></Description>
      <img src={img2} className="mb-2" id="image100"></img>
      <img src={img3} className="mb-2" id="image100"></img>
    </div>
  );
}

export default Secvente;
