import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function GrafuriOrientate() {
  return (
    <div className="Card">
      <Title text="Grafuri orientate"></Title>
      <Subtitle text="Terminologie"></Subtitle>
      <Description
        text="-o pereche ordonată de mulțimi G = (X, U) unde X este o mulțime finită și nevidă de elemente numite vârfuri sau noduri, iar U este o mulțime de perechi ordonate de elemente distincte din X care se numesc arce
-la grafurile orientate, muchiile au direcție, adică muchia (a, b) != (b, a)
-două vârfuri între care există muchie se numesc adiacente (nu contează direcția arcului)
-două muchii sunt incidente dacă au o extremitate comună; un vârf este incident cu o muchie dacă vârful este extremitate a acelei muchii (nu contează direcția arcului în niciunul din cazuri)
-se mai numește și digraf (graf cu 2 direcții la muchii)
-numărul de grafuri orientate distincte cu n vârfuri este 2 ^ ( n*(n-1) ) sau 4 ^ ( n * (n-1) / 2 ) (practic pentru fiecare muchie, avem 4 cazuri: nu există, iese din nod, intră în nod sau și iese și intră)"
      ></Description>
      <Subtitle text="Gradul unui vârf"></Subtitle>
      <Description
        text="-gradul exterior al unui nod reprezintă câte muchii au ca extremitate inițială pe acest nod (câte muchii ies din el)
-gradul interior al unui nod reprezintă câte muchii au ca extremitate finală pe acest nod (câte muchii intră în el)
-suma gradelor interioare a tuturor nodurilor și suma gradelor exterioare a tuturor nodurilor sunt egale între ele, și vor fi egale și cu numărul de muchii
-un nod este izolat dacă are ambele grade egale cu 0"
      ></Description>

      <Subtitle text="Graful parțial"></Subtitle>
      <Description
        text="-din graful inițial se elimină eventual unele arce (chiar și toate)
-numărul de grafuri parțiale este 2^m unde m este numărul de muchii ale grafului (suma combinărilor)"
      ></Description>

      <Subtitle text="Subgraf"></Subtitle>
      <Description
        text="-din graful inițial se elimină eventual unele vârfuri (maxim n-1, deoarece nu există graf cu 0 vârfuri)
-numărul de subgrafuri este 2^n - 1  (-1 nu e la putere) (suma combinărilor, din care se scade 1 care înseamnă acea modalitate în care s-ar elimina toate nodurile)"
      ></Description>

      <Subtitle text="Graful complet"></Subtitle>
      <Description
        text="-graful orientat în care oricare 2 noduri sunt adiacente se numește graf complet (fiind vorba de adiacență în graful orientat, nu contează direcția arcului, existând 3 posibilități)
-există 3^(n*(n-1)/2) grafuri orientate complete cu n noduri"
      ></Description>

      <Subtitle text="Graful turneu"></Subtitle>
      <Description
        text="-graful orientat în care între oricare 2 noduri există un singur arc (fie (x,y), fie (y, x))
-orice graf turneu este complet
-există 2^(n*(n-1)/2) grafuri orientate turneu cu n noduri"
      ></Description>

      <Subtitle text="Drum"></Subtitle>
      <Description
        text="-se numește drum o succesiune de noduri cu proprietatea că între oricare două noduri consecutive există un arc care să păstreze ordinea (practic, este ca pe un drum, în care sensul de mers este dat de direcția arcelor, și niciodată nu se poate merge în direcția opusă arcului)
-lungimea unui drum este egal cu numărul de arce din care este format
-drumul elementar este un drum în care nu se repetă niciun nod
-drumul simplu este un drum în care nu se repetă arce
-drumul compus este un drum în care se repetă arce"
      ></Description>

      <Subtitle text="Circuit"></Subtitle>
      <Description
        text="-se numește circuit un drum simplu în care primul și ultimul nod coincid
-lungimea unui circuit este egală cu numărul de arce din care este alcătuit
-circuitul elementar este un circuit în care nu se repetă vârfuri, înafară de primul și ultimul"
      ></Description>

      <Subtitle text="Tare conexitate"></Subtitle>
      <Description
        text="-un graf se numește tare conex dacă între oricare două noduri distincte există cel puțin un drum
-componenta tare conexă reprezintă un subgraf tare conex și maximal cu această proprietate"
      ></Description>

      <Subtitle text="Graful hamiltonian"></Subtitle>
      <Description
        text="-un graf orientat se numește hamiltonian dacă conține un circuit hamiltonian
-circuitul hamiltonian este un circuit elementar care trece prin toate nodurile grafului"
      ></Description>

      <Subtitle text="Graful eulerian"></Subtitle>
      <Description
        text="-un graf orientat se numește eulerian dacă nu are noduri izolate (este conex, nu tare conex) și conține un circuit eulerian
-circuitul eulerian este un circuit care trece prin toate arcele grafului
-un graf orientat conex în care gradul exterior este egal cu gradul interior pentru fiecare vârf este graf eulerian"
      ></Description>

      <Subtitle text="Metode de reprezentare"></Subtitle>
      <Description
        text="Matricea de adiacență 
-o matrice în care a[i][j] = 1 <=> există arcul de la nodul i la j
-gradul exterior al unui nod este suma elementelor de pe linia corespunzătoare nodului
-gradul interior al unui nod este suma elementelor de pe coloana corespunzătoare nodului
-elementele de pe diagonala principală sunt 0
Lista de arce
-stochează efectiv arcele unui graf
-poate fi un tablou unidimensional cu elemente de tip struct { int i, j; }
"
      ></Description>

      <Subtitle text=""></Subtitle>
      <Description text=""></Description>
    </div>
  );
}

export default GrafuriOrientate;
