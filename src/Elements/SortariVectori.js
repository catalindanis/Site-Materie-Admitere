import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/vectori/bubble_sort_lung.jpg";
import img2 from "../Resources/Images/vectori/bubble_sort_scurt.jpg";
import img3 from "../Resources/Images/vectori/bubble_sort_rec.jpg";
import img4 from "../Resources/Images/vectori/selection_sort_lung.jpg";
import img5 from "../Resources/Images/vectori/selection_sort_scurt.jpg";
import img6 from "../Resources/Images/vectori/selection_sort_rec.jpg";
import img7 from "../Resources/Images/vectori/insertion_sort_lung.jpg";
import img8 from "../Resources/Images/vectori/insertion_sort_scurt.jpg";
import img9 from "../Resources/Images/vectori/insertion_sort_rec.jpg";
import img10 from "../Resources/Images/vectori/counting_sort_1.jpg";
import img11 from "../Resources/Images/vectori/counting_sort_2.jpg";

function SortariVectori() {
  return (
    <div className="Card">
      <Title text="Vectori - sortări" />
      <Subtitle text="Bubble sort (metoda bulelor)"></Subtitle>
      <Description
        text="-acest algoritm compară la fiecare pas elementul curent cu unul din vecinii săi și le interschimbă dacă este cazul
-la fiecare iterație completă a vectorului, o să se pună pe poziția finală maximul (sau minimul dacă se sortează descrescător) care încă nu se află pe poziția lui finală
-se poate merge și cu primul for până la n-1 deoarece dacă am dus n-1 elemente la poziția lor finală atunci și cel de-al n-lea element se va afla tot la poziția lui finală
-complexitatea este O(n^2)
"
      ></Description>
      <img src={img1} className="mb-2" id="image75"></img>
      <img src={img2} className="mb-2" id="image75"></img>
      <img src={img3} className="mb-2" id="image75"></img>

      <Subtitle text="Selection sort (metoda prin selecție)"></Subtitle>
      <Description
        text="-acest algoritm compară la fiecare pas elementul curent cu toate elementele din dreapta lui
-la fiecare iterație completă a vectorului, o să se pună pe poziția din care s-a pornit sortarea minimul (sau maximul dacă se sortează descrescător) curent
-se poate merge și cu primul for până la n-1 deoarece dacă am dus n-1 elemente la poziția lor finală atunci și cel de-al n-lea element se va afla tot la poziția lui finală
-complexitatea este O(n^2)
"
      ></Description>
      <img src={img4} className="mb-2" id="image75"></img>
      <img src={img5} className="mb-2" id="image75"></img>
      <img src={img6} className="mb-2" id="image75"></img>

      <Subtitle text="Insertion sort (metoda prin inserție)"></Subtitle>
      <Description
        text="-acest algoritm pornește de la al doilea element și pentru fiecare element caută în stânga lui poziția unde trebuie să fie inserat pentru ca șirul să rămână crescător (sau descrescător după caz)
-tot timpul în stânga elementului curent va fi un șir ordonat crescător (sau descrescător după caz)
-acest algoritm trebuie să meargă până la n deoarece pentru fiecare element trebuie găsită poziția unde trebuie inserat
-complexitatea este O(n^2)
"
      ></Description>
      <img src={img7} className="mb-2" id="image75"></img>
      <img src={img8} className="mb-2" id="image75"></img>
      <img src={img9} className="mb-2" id="image75"></img>

      <Subtitle text="Counting sort (metoda prin numărare)"></Subtitle>
      <Description
        text="-această metodă folosește un vector de frecvență în care va stoca numărul de apariții pentru fiecare valoare din vector
-prima variantă va face un fel de vector de sume parțiale în care se vor stoca pentru fiecare element câte elemente mai mici sau egale cu el există; astfel, când adăugăm în vectorul rezultat elementele, vom avea direct poziția pe care trebuie pus fiecare element, iar dupa ce îl punem trebuie să actualizăm acest vector de index, deoarece dacă mai dăm de același element mai târziu, trebuie să îl punem pe poziția cu -1 mai puțin decât unde l-am pus prima dată"
      ></Description>
      <img src={img10} className="mb-2" id="image75"></img>
      <Description text="-a doua variantă este puțin mai simplu de înțeles deoarece va lua fiecare element care apare în șir cu ajutorul vectorului de frecvență și îl va pune în vectorul rezultat direct în ordine crescătoare"></Description>
      <img src={img11} className="mb-2" id="image75"></img>
      <Description text="-complexitatea este O(n + MAX) unde MAX este valoarea maximă din vector"></Description>
    </div>
  );
}

export default SortariVectori;
