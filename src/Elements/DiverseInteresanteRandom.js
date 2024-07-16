import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/grile_interesante/random/1.png";
import img2 from "../Resources/Images/grile_interesante/random/09_29_28_Screenshot_2023-10-15_at_18.22.35.png";
import img3 from "../Resources/Images/grile_interesante/random/3.png";
import img4 from "../Resources/Images/grile_interesante/random/4.png";
import img5 from "../Resources/Images/grile_interesante/random/5.png";
import img6 from "../Resources/Images/grile_interesante/random/6.png";
import img7 from "../Resources/Images/grile_interesante/random/7.png";
import img8 from "../Resources/Images/grile_interesante/random/8.png";
import img9 from "../Resources/Images/grile_interesante/random/9.png";
import img10 from "../Resources/Images/grile_interesante/random/10.png";
import img11 from "../Resources/Images/grile_interesante/random/11.png";
import img12 from "../Resources/Images/grile_interesante/random/12.png";
import img13 from "../Resources/Images/grile_interesante/random/14.png";

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
      <Description text='-formula este: 2^n + n - 1 (secventa de Brujin aciclic) (vezi "de Brujin" la combinatorica)'></Description>
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
-nu am o explicație exactă, dar ideea e că atunci când pentru cmmdc prin euclid cu scăderi repetate facem o scădere, în paralel facem și o sumă și în final, media celor 2 termeni va fi cmmmc
-pe exemplul ăsta, efectiv dacă x > y pentru cmmdc se face x -= y iar pentru cmmmc se face u += v (x și u sunt inițial egale)"
      ></Description>
      <img src={img6} className="mb-2" id="image75"></img>
      <Description
        text="-se dă factor comun, și se observă că răsp e n
-a nu se uita de coeficienți, care și ei vor adăuga înmulțiri"
      ></Description>
      <img src={img7} className="mb-2" id="image75"></img>
      <Description
        text="-se folosește matematică
-un număr n are o astfel de pereche de 3 elemente doar dacă n % 6 == 0
-elementele vor fi n / 6, n / 3, n / 2 (exită o singură pereche pentru orice n divizibil cu 6)
-vezi problema #2372 pbinfo"
      ></Description>
      <img src={img8} className="mb-2" id="image50"></img>
      <Description text="-chiar dacă această grilă pare aparent să aibă toate răspunsurile corecte, '\' este împărțirea reală, adică o sa dea cu virgulă la B"></Description>
      <img src={img10} className="mb-2" id="image75"></img>
      <Description
        text="-aceasta nu este chiar o grilă, dar e un enunț interesant
-este ușor de dedus că la toate numerele va conta doar ultima cifră, după care se ia fiecare cifra în parte și în funcție de perioada pentru ridicarea la putere la fiecare număr, se determină din nou o ultimă cifra pentru fiecare număr, și mai apoi, se face suma tuturor ultime cifre care dă 19, ultima cifră fiind 9"
      ></Description>
      <img src={img11} className="mb-2" id="image75"></img>
      <Description
        text="-algoritmul din grila de mai sus implementează afișarea tuturor submulțimilor formate din elementele unui vector prin intermediul reprezentării în baza 2 a tuturor numerelor de la 1 până la 2^n - 1 (-1 nu e la putere)
-sare peste mulțimea vidă deoarece nu are sens în genul acesta de problemă
-alăturat este un exemplu de cum arată reprezentarea în baza 2 a unor numere din intervalul [1, 2^n - 1] (-1 nu e la putere)
-se vor afișa doar elementele pentru care în baza 2 avem cifra 1 "
      ></Description>
      <img src={img12} className="mb-2" id="image75"></img>
      <Description
        text="-chiar dacă răspunsul B pare inițial corect, nu este complet deoarece nu precizează ca numerele să fie și distincte
-astfel, dacă luam exact cum scrie la B, s-ar putea pune de ex și 2 2, pentru că sunt numere naturale nenule ne-consecutive, dar totuși algoritmul nu o să pună numere egale unul după celălalt"
      ></Description>

      <img src={img13} className="mb-2" id="image75"></img>
      <Description
        text="-se folosește proprietatea nr_mod = 2 ^ (n-1)"
      ></Description>

      <Title text="Proprietăți interesante"></Title>
      <Description
        text="-b este multiplu de a <=> fibonacci(b) este multiplu de fibonacci(a) (fibo0 pe pbinfo)
-numărul de termeni dintr-o progresie aritmetică de rație r, cu capetele st și dr este nr_term = (dr - st) / r + 1
-de asemenea, putem da fact comun rația, și atunci o să avem (1+2+3+...+n) * r
-un număr natural nenul se numește norocos dacă n^2 se poate scrie ca sumă de n numere naturale nenule consecutive
-după demonstrația de mai jos, pentru a fi norocos, un număr trebuie să fie impar (orice număr impar e norocos)"
      ></Description>
      <img src={img9} className="mb-2" id="image75"></img>
      <h6 className="mt-4">
        Unele grile sunt preluate din simulări de pe zecelaexamene.ro
      </h6>
    </div>
  );
}

export default DiverseInteresanteRandom;
