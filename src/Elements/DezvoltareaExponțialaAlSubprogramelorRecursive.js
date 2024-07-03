import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/dezvoltarea_exponentiala/1.png";

function DezvoltareaExponentialaAlSubprogramelorRecursive() {
  return (
    <div className="Card">
      <Title text="Dezvoltarea exponențială a subprogramelor recursive"></Title>
      <Description
        text="-se referă la numărul de pași pe care îl face o funcție recursivă
-o să luăm ca exemplu funcția fibonacci"
      ></Description>
      <img src={img1} className="mb-2" id="image75"></img>
      <Description
        text="-în imaginea dea mai sus se pot vedea numărul de apeluri necesari pentru a calcula al 5-lea element din șirul lui fibonacci (indexare de la 0)
-se observă clar că aceiași pași (ex f(2)) sunt calculați de mai multe ori
-defapt, la funcțiile de genul acesta, valoarea propriu-zisă este reprezentată doar de frunze; practic, fiecare frunză reprezintă o valoare de 1, iar suma tuturor frunzelor este valoarea pe care o căutăm
-astfel, complexitatea la care ajunge un algoritm de genul cu 2 apeluri recursive în interiorul funcției este O(rezultat) (în cazul de față O(fib(5))
-arborele apelurilor este un arbore binar strict (fiecare nod are 2 fii, sau 0)
-astfel, dacă notăm numărul de frunze cu k, în total vor fi 2*k-1 noduri (aceasta este defapt complexitatea exactă, dar 2 și -1 sunt constante)
-aceleași lucruri se pot aplica la orice funcție care are 2 apeluri recursive înăuntrul ei, cum ar fi de exemplu combinările calculate recursiv cu triunghiul lui Pascal"
      ></Description>
    </div>
  );
}

export default DezvoltareaExponentialaAlSubprogramelorRecursive;
