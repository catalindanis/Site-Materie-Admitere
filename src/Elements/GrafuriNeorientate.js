import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function GrafuriNeorientate() {
  return (
    <div className="Card">
      <Title text="Grafuri neorientate"></Title>
      <Subtitle text="Terminologie"></Subtitle>
      <Description
        text="-o pereche ordonată de mulțimi G = (X, U) unde X este o mulțime finită și nevidă de elemente numite vârfuri sau noduri, iar U este o mulțime de perechi neordonate de elemente distincte din X care se numesc muchii
-la grafurile neorientate, muchiile nu au direcție, adică muchia (a, b) = (b, a)
-două vârfuri sunt vecine dacă au o muchie care le leagă
-două vârfuri între care există muchie se numesc adiacente
-două muchii sunt incidente dacă au o extremitate comună; un vârf este incident cu o muchie dacă vârful este extremitate a acelei muchii"></Description>
      <Subtitle text="Gradul unui vârf"></Subtitle>
      <Description
        text="-reprezintă numărul de muchii incidente cu un vârf (sau numărul de varfuri adiacente cu vârful)
-un vârf cu gradul 0 se numește vârf izolat
-un vârf cu gradu 1 se numește nod terminal
-gradul maxim al unui vârf este n-1, unde n este numărul de vârfuri
-suma gradelor tuturor vârfurilor unui graf este egal cu 2*m, unde m este numărul de muchii ale grafului"
      ></Description>
      <Subtitle text="Graful parțial"></Subtitle>
      <Description
        text="-din graful inițial se elimină eventual unele muchii (chiar și toate)
-un graf cu m muchii admite 2^m grafuri parțiale (suma combinărilor)"
      ></Description>
      <Subtitle text="Subgraf"></Subtitle>
      <Description
        text="-din graful inițial se elimină eventual unele vârfuri (maxim n-1, deoarece nu există graf cu 0 vârfuri)
-un graf cu n vârfuri admite 2^n - 1 (-1 nu e la putere) (suma combinărilor, din care se scade 1 care înseamnă acea modalitate în care s-ar elimina toate nodurile)"
      ></Description>
      <Subtitle text="Graful complementar"></Subtitle>
      <Description
        text="-graful în care există doar muchiile care nu erau în graful inițial
-un graf admite un unic graf complementar"
      ></Description>
      <Subtitle text="Graful nul"></Subtitle>
      <Description text="-graful în care toate vârfurile au gradul nul (nu există muchii)"></Description>
      <Subtitle text="Graful complet"></Subtitle>
      <Description
        text="-graful în care fiecare vârf este incident cu toate celelalte vârfuri (există muchie între oricare două vârfuri)
        -un graf neorientat complet are n*(n-1) / 2 muchii (1 + 2 + 3 + … + n-1) (combinări de n luate câte 2)
        -de aici rezultă că există 2^(n*(n-1) / 2) grafuri neorientate distincte cu n vârfuri (suma combinărilor)"
      ></Description>
      <Subtitle text="Graful regulat"></Subtitle>
      <Description text="-toate vârfurile au același grad"></Description>
      <Subtitle text="Graful bipartit"></Subtitle>
      <Description
        text="-trebuie să se poată împărți mulțimea vârfurilor în 2 submulțimi disjuncte (disjunct = care nu au elemente comune) care să conțină toate vârfurile și în care muchiile să fie doar între vârfuri cu o extremitate într-o mulțime și cu cealaltă extremitate în cealaltă mulțime
-graful bipartit complet este un graf bipartit în care orice vârf din prima submulțime este adiacent cu orice vârf din a doua submulțime"
      ></Description>
      <Subtitle text="Lanț"></Subtitle>
      <Description
        text="-se numește lanț o succesiune de vârfuri cu proprietatea că oricare doua vârfuri consecutive sunt adiacente
-lungimea unui lanț este numărul de muchii din care este alcătuit
-lanțul elementar este un lanț în care nu se repetă vârfuri
-lanțul simplu este un lanț în care nu se repetă muchii
-lanțul compus este un lanț în care se repetă muchii"
      ></Description>
      <Subtitle text="Ciclu"></Subtitle>
      <Description
        text="-se numește ciclu un lanț simplu în care primul și ultimul vârf coincid
-lungimea unui ciclu este numărul de muchii din care este alcătuit
-ciclul elementar este un ciclu în care nu se repetă vârfuri, înafară de primul și ultimul"
      ></Description>
      <Subtitle text="Graful conex"></Subtitle>
      <Description
        text="-un graf se numește conex dacă între oricare două vârfuri ale grafului există cel puțin un lanț care le leagă
-componenta conexă reprezintă un subgraf conex și maximal cu această proprietate"
      ></Description>
      <Subtitle text="Graful hamiltonian"></Subtitle>
      <Description
        text="-un graf se numește hamiltonian dacă conține un ciclu hamiltonian
-ciclul hamiltonian este un ciclu elementar care trece prin toate vârfurile grafului
-un graf neorientat în care gradul fiecărui vârf este mai mare sau egal cu jumătate din numărul de vârfuri este hamiltonian
-un graf complet cu n > 2 conține (n-1)! / 2 cicluri hamiltoniene"
      ></Description>
      <Subtitle text="Graful eulerian"></Subtitle>
      <Description
        text="-un graf se numește eulerian dacă este conex și conține un ciclu eulerian
-ciclul eulerian este un ciclu care trece prin toate muchiile grafului
-un graf neorientat conex în care gradul fiecărui vârf este par este graf eulerian"
      ></Description>
      <Subtitle text="Metode de reprezentare"></Subtitle>
      <Description
        text="Matricea de adiacență
-o matrice în care a[i][j] = 1 <=> există muchie între vârfurile i și j
-elementele din matricea de adiacență vor fi simetrice față de diagonala principală
-gradul unui vârf este suma elementelor de pe linia sau coloana corespunzătoare vârfului
-elementele de pe diagonala principală sunt 0
Lista de muchii
-stochează efectiv muchiile unui graf
-poate fi un tablou unidimensional cu elemente de tip struct { int i, j; }
-poate fi două tablouri unidimensionale cu elemente de tip int

"
      ></Description>
    </div>
  );
}

export default GrafuriNeorientate;
