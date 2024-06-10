import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/random/1.png";
import img2 from "../Resources/Images/grile_interesante/random/09_29_28_Screenshot_2023-10-15_at_18.22.35.png";
import img3 from "../Resources/Images/grile_interesante/random/3.png";
import img4 from "../Resources/Images/grile_interesante/random/4.png";
import img5 from "../Resources/Images/grile_interesante/random/5.png";

function DiverseInteresanteRandom() {
  return (
    <div className="Card">
      <Title text="Grile interesante"></Title>
      <img src={img2} className="mb-2" id="image75"></img>
      <Description
        text="-mai sus este explicația la problema raza de pe pbinfo (#2611)
-același tip de rezolvare funcționează și la problema biliard (#2371)"
      ></Description>
      <img src={img1} className="mb-2" id="image75"></img>
      <Description text='-formula este: 2^n + n - 1 (nu știu explicația) (vezi "De Brujin")'></Description>
      <img src={img3} className="mb-2" id="image75"></img>
      <Description
        text="-se face o parcurgere pe toate elementele în care se vor compara elementele (1,2) ; (3,4) (adică elementele consecutive dar fără să se repete)
-la fiecare comparare, se știe că elementul mai mare nu poate fi minim deoarece este mai mare decât perechea lui astfel se adaugă la un șir de posibile maxime
-la fiecare comparare, se știe că elementul mai mic nu poate fi maxim deoarece este mai mic decât perechea lui astfel se adaugă la un șir de posibile minime
-după această parcurgere, vom avea un șir de posibile minime și unul de posibile maxime de 50 elemente fiecare
-de aici putem determina minimul, respectiv maximul din 49 de comparări pentru fiecare șir
-astfel vom avea 50 + 49 + 49 = 148 comparări
-formările acelea de șiruri nu au rost să fie repetate de mai multe ori, deoarece tot același număr de pași se va obține"
      ></Description>
      <img src={img4} className="mb-2" id="image75"></img>
      <Description
        text="-modul în care se ajunge la n atribuiri este printr-un for de la 1 la n
-când i = 1, se atribuie variabilei în care se reține suma elementelor direct variabila m[1][1]
-cand i = n, după ce se adaugă ultimul element se și împarte rezultatul la n"
      ></Description>
      <img src={img5} className="mb-2" id="image25"></img>
      <Description
        text="-acest algoritm calculează suma celor mai mici multipli comuni a câte două numere consecutive citite
-ceea ce este interesant este modul în care se calculează acest cmmmc pentru fiecare 2 numere
-explicație după meditație cu paul" //TODO completat aici
      ></Description>
      <Title text="Proprietăți interesante"></Title>
      <Description text="-b este multiplu de a <=> fibonacci(b) este multiplu de fibonacci(a) (fibo0 pe pbinfo)"></Description>
    </div>
  );
}

export default DiverseInteresanteRandom;
