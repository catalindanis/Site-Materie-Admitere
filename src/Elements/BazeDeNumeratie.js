import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/baze_de_numeratie/nr_baza_2.jpg"
import img2 from "../Resources/Images/baze_de_numeratie/nr_baza_10.jpg"
import img3 from "../Resources/Images/baze_de_numeratie/nr_baza_3.jpg"
import img4 from "../Resources/Images/baze_de_numeratie/nr_baza_8.jpg"
import img5 from "../Resources/Images/baze_de_numeratie/adunare.jpg"
import img6 from "../Resources/Images/baze_de_numeratie/scadere.jpg"
import img7 from "../Resources/Images/baze_de_numeratie/inmultire.jpg"

function TipuriDeDate() {
  return (
    <div className="Card">
      <Title text="Baze de numerație" />
      <Description text="-un număr poate fi scris ca sumă de puteri distincte ale lui k => numărul se scrie doar cu cifre de 0 și 1 în baza k
-orice număr poate fi scris ca sumă de puteri distincte ale lui 2 (din reprezentarea în baza 2 a numerelor)
-un număr în baza k se divide cu k-1 <=> suma cifrelor numărului este divizibilă cu k-1 (generalizarea divizibilității cu 9 din baza 10)
-un număr în baza k se divide cu k+1 <=> diferența dintre suma cifrelor de pe poziții pare și suma cifrelor de pe poziții impare este divizibilă cu k+1 (generalizarea divizibilității cu 11 din baza 10)"/>
    <Subtitle text="Transformare din baza b in baza 10"></Subtitle>
    <Description text="-se indexează fiecare cifra a numărului în baza b de la dreapta spre stanga
-mai apoi, se face suma dintre fiecare cifră a numărului înmulțită cu baza la puterea indexului ei
-exemplul de mai jos, este o transformare din baza 2 în baza 10
"></Description>
    <img src={img1} className = "mb-2" id="image50"></img>
    <Subtitle text="Transformare din baza 10 in baza b"></Subtitle>
    <Description text="-se împarte în mod repetat numărul din baza 10 la baza b pana cand se obține câtul 0
-la fiecare pas se reține doar restul din împărțire
-rezultatul este numărul format din resturile în ordine inversă a obținerii
-exemplul de mai jos, este o transformare din baza 10 în baza 2
"></Description>
    <img src={img2} className = "mb-2" id="image50"></img>
    <Subtitle text="Conversii rapide"></Subtitle>
    <Description text="-aceste conversii se pot realiza doar între baze care sunt puteri una față de cealaltă (de exemplu baza 3 și baza 9 deoarece 9 = 3^2)
-dacă se transforma din baza mică în baza mare, se vor organiza cifrele numărului în grupulete de câte k cifre (unde k reprezinta puterea la care se ridică baza mica) și se vor transforma acele grupulețe din baza mică în baza 10 iar acelea vor fi cifrele numărului în baza mare
-mai jos este un exemplu de conversie rapidă din baza 3 în baza 9
"></Description>
  <img src={img3} className = "mb-2" id="image50"></img>
  <Description text="-dacă se transformă din baza mare în baza mică, o să se scrie fiecare cifra din număr exact cum s-ar scrie în baza mică, și daca este cazul se va completa cu zerouri pentru a se ajunge din nou la un număr de cifre egal cu k (unde k reprezintă puterea la care se ridică baza mică)
-mai jos este un exemplu de conversie rapidă din baza 8 în baza 2"></Description>
  <img src={img4} className = "mb-2" id="image50"></img>
    <Subtitle text="Adunarea"></Subtitle>
    <Description text="-se face după aceleaşi reguli ca în zecimal, cu observaţia că cifra cea mai mare dintr-o baza “b” va fi b-1 (adică 9 în zecimal, 7 în octal, 1 în binar şi F în hexazecimal); deci dacă prin adunarea a două cifre de rang “i” se va obţine un rezultat mai mare decât b-1, apare acel transport spre cifra de rang următor “i”+1, iar pe poziţia de rang “i” va rămâne restul împărţirii rezultatului adunării cifrelor de rang “i” la bază. Transportul spre cifra de rang “i”+1 va deveni o nouă unitate la suma cifrelor de rang “i”+1, adică se va mai aduna acel transport 1 (cifra de transport va fi mereu 1 deoarece din adunarea a 2 cifre se poate obține maxim suma 18)
"></Description>
    <img src={img5} className = "mb-2" id="image50"></img>
    <Subtitle text="Scăderea"></Subtitle>
    <Description text="-și pentru scădere sunt valabile regulile de la scăderea din zecimal şi anume: dacă nu se pot scădea două cifre de rang “i” (adică cifra descăzutului este mai mică decât a scăzătorului) se face “împrumut” o unitate din cifra de rang următor (“i”+1). În cazul în care cifra din cate se doreşte realizarea “împrumutului” este 0, se face “împrumutul” mai departe la cifra de rang următor
"></Description>
    <img src={img6} className = "mb-2" id="image50"></img>
    <Subtitle text="Înmulțirea"></Subtitle>
    <Description text="-înmulţirea a două numere scrise într-o bază de numeraţie b se efectuează asemănător înmulţirii în baza 10, dar se va ţine cont de tabla adunării şi înmulţirii în baza b.
"></Description>
    <img src={img7} className = "mb-2" id="image50"></img>
    <h6 className="mt-4">Pozele cu explicatii au fost preluate de pe diverse fișiere de pe Scribd.ro</h6>
    </div>
  );
}

export default TipuriDeDate;
