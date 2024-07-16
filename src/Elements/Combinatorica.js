import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/combinatorica/permutari_clasic.jpg";
import img2 from "../Resources/Images/combinatorica/permutari_repetitie.jpg";
import img3 from "../Resources/Images/combinatorica/permutari_fara_puncte_fixe.jpg";
import img4 from "../Resources/Images/combinatorica/aranjamente.jpg";
import img5 from "../Resources/Images/combinatorica/combinari.jpg";
import img6 from "../Resources/Images/combinatorica/triunghiul_lui_pascal.jpg";
import img7 from "../Resources/Images/combinatorica/alte_formule_combinari.jpg";
import img8 from "../Resources/Images/combinatorica/stirling_bell.jpg";
import img9 from "../Resources/Images/combinatorica/1.jpg";
import img10 from "../Resources/Images/combinatorica/2.jpg";

function Combinatorica() {
  return (
    <div className="Card">
      <Title text="Combinatorică"></Title>
      <Description
        text="-o mulțime are doar elemente distincte
-produsul cartezian reprezintă perechile ordonate din 2 mulțimi (adică fiecare din prima cu fiecare din a doua, ținând cont și de ordine) 
-numărul de elemente al produsului cartezian este cardA * cardB (regula produsului)"
      ></Description>
      <Subtitle text="Permutări"></Subtitle>
      <Description text="-aranjarea tuturor elementelor unei mulțimi finite într-o anumită ordine (contează ordinea)"></Description>
      <img src={img1} className="mb-2" id="image75"></img>
      <Subtitle text="Permutări cu repetiție"></Subtitle>
      <Description text="-tot ca permutările dar printre elementele din care se formează permutarea există repetiții"></Description>
      <img src={img2} className="mb-2" id="image75"></img>
      <Subtitle text="Permutări fără puncte fixe (deranjamente)"></Subtitle>
      <Description
        text="-permutări în care P(i) != i oricare ar fi i, unde P(i) este valoarea permutării în i
-practic, niciunul din elementele din mulțimea inițială nu trebuie să rămână pe aceeași poziție
-semnul de după n! este dat de paritatea numitorului"
      ></Description>
      <img src={img3} className="mb-2" id="image75"></img>
      <Subtitle text="Aranjamente"></Subtitle>
      <Description text="-submulțimile ordonate cu k elemente ale unei mulțimi finite (contează ordinea)"></Description>
      <img src={img4} className="mb-2" id="image75"></img>
      <Subtitle text="Combinări"></Subtitle>
      <Description text="-submulțimile neordonate cu k elemente ale unei mulțimi finite (nu contează ordinea)"></Description>
      <img src={img5} className="mb-2" id="image75"></img>
      <Description
        text="-triunghiul lui Pascal este un triunghi în care elementele de pe laturi au valoarea 1 iar restul elementelor sunt egale cu suma celor două elemente vecine de pe linia de deasupra
-valorile reprezintă defapt valorile combinărilor folosind formula recurentă"
      ></Description>
      <img src={img6} className="mb-2" id="image75"></img>
      <Subtitle text="Alte formule cu combinări"></Subtitle>
      <img src={img7} className="mb-2" id="image75"></img>
      <Subtitle text="Stirling Bell"></Subtitle>
      <Description text="-numărul de partiții ale unei mulțimi cu n elemente în k submulțimi"></Description>
      <img src={img8} className="mb-2" id="image75"></img>
      <Subtitle text="Superpermutări"></Subtitle>
      <Description
        text="-o superpermutare este un șir care conține toate permutările mulțimii 1, 2, …, n (ex pentru n = 3: 123121321 )
-lungimea minimă a unei superpermutări este 1! + 2! + … + n! (dacă 1 <= n <= 5)
-pentru n > 5 nu exista o regula"
      ></Description>
      <Subtitle text="Ciclu de Brujin"></Subtitle>
      <Description text="-dacă avem o mulțime de k elemente iar din această mulțime formăm toate șirurile de lungime n cu elemente doar din mulțime, putem să formăm un șir ciclic care va conține fiecare șir de lungime n exact o dată
-acest șir se numește ciclu de Brujin și are lungimea egală cu k ^ n
-mai jos avem un exemplu pentru k = {0, 1} și n = 2
-prima data avem șirul, după care reprezentarea acestuia pe un cerc, pentru a se vedea mai bine că este ciclic și că luând fiecare 2 elemente consecutive vom obține defapt toate șirurile de lungime 2"></Description>
      <img src={img9} className="mb-2" id="image25"></img>
      <Subtitle text="Șir de Brujin aciclic"></Subtitle>
      <Description text="-funcționează pe același principiu ca și un ciclu de Brujin, doar că aici șirul nu o să mai fie ciclic
-de asta, lungimea minimă a unui șir de acest tip, care practic conține toate șirurile de lungime n ale unei mulțimi de k elemente va fi k ^ n + n - 1
-dacă ne uităm la un ciclu de Brujin, vom observa că momentul când se va folosi proprietatea de ciclu este doar atunci când căutăm ultimele n-1 șiruri
-deoarece nu mai avem aceea proprietate de ciclu, vom adăuga acele n-1 elemente la finalul șirului și astfel nu vom mai avea nevoie ca șirul să fie ciclic, dar tot va conține fiecare șir de n elemente a mulțimii o singură dată (foarte important să nu se repete)
-pentru o clarificare, exemplul de mai jos este tot pentru k = {0, 1} și n = 2 la fel ca la ciclul de Brujin
-am făcut aceeași reprezentare și pe cerc, pentru a observa că doar ultimele n-1 (în cazul nostru doar ultima) șiruri nu vor putea fi obținute, iar pentru acestea vom adăuga la finalul șirului elementele"></Description>
      <img src={img10} className="mb-2" id="image25"></img>
    </div>
  );
}

export default Combinatorica;
