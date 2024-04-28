import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function OperatiiPeBiti() {
  return (
    <div className="Card">
      <Title text="Operații pe biți"></Title>
      <Description
        text="-operatorii se vor aplica bit cu bit și se aplică doar pe datele de tip întreg
-dacă se aplică o operație între 2 valori care nu au același număr de cifre, defapt ele au același număr de cifre pentru că se poate cu completa cu 0 la început fără să fie afectat nimic (ex: 100 & 1 este defapt 100 & 001)"
      ></Description>
      <Subtitle text="Operatorul de negație “~”"></Subtitle>
      <Description
        text="-biții 0 devin 1, biții 1 devin 0 (complementaritate)
ex: ~133 == -134 (reprezentarea lui 133 este 0000000010000101; prin complementare se obține 1111111101111010; aceasta este reprezentarea în memorie a lui -134)
-de aici rezultă procedeul de stocare al valorilor negative: se obține reprezentarea în baza 2 a numărului, se face complementul lui și se mai adună un 1"
      ></Description>

      <Subtitle text="Operatorul de conjuncție “&”"></Subtitle>
      <Description
        text="-un fel de ȘI pe variabile (pentru a returna 1, trebuie ca ambii biți comparați să fie 1)
ex: 13 & 151 = 5 (reprezentarea lui 13 este 0000000000001101; reprezentarea lui 151 este 0000000010010111; se obține 0000000000000101, adică 5)"
      ></Description>

      <Subtitle text="Operatorul de disjuncție “|”"></Subtitle>
      <Description
        text="-un fel de SAU pe variabile (pentru a returna 1, cel puțin unul din biții comparați trebuie să fie 1)
ex: 13 | 151 = 159 (reprezentarea lui 13 este 0000000000001101; reprezentarea lui 151 este 0000000010010111; 0000000010011111, adică 159)"
      ></Description>

      <Subtitle text="Operatorul de disjuncție exclusivă “^”"></Subtitle>
      <Description
        text="-pentru a returna 1, exact 1 bit trebuie să fie 1
ex: 13 ^ 151 = 154 (reprezentarea lui 13 este 0000000000001101; reprezentarea lui 151 este 0000000010010111; 0000000010011010 adică 154)"
      ></Description>

      <Subtitle text="Operatorul de deplasare spre stânga – shift left “<<”"></Subtitle>
      <Description
        text="-deplasează spre stânga biții
-în acest mod, se poate obține 2^n prin operația 1 << n"
      ></Description>

      <Subtitle text="Operatorul de deplasare spre dreapta – shift right “>>”"></Subtitle>
      <Description
        text="-deplasează spre stânga biții
-în acest mod, se poate obține n / (2^k) prin operația n >> k"
      ></Description>

      <Title text="Aplicații ale operațiilor pe biți"></Title>
      <Subtitle text="Verificarea parității unui număr"></Subtitle>
      <Description
        text="-un număr par are ultimul bit egal cu 0 iar un număr impar are ultimul bit egal cu 1
-știind acest lucru, n & 1 va determina paritatea (0 dacă n e par, 1 dacă n e impar)"
      ></Description>

      <Subtitle text="Verificarea faptului că un număr este putere a lui 2"></Subtitle>
      <Description
        text="-un număr care este putere a lui 2 va avea în reprezentarea în baza 2 doar 0 și un 1 pe indexul, luat de la dreapta la stânga, corespunzător puterii lui 2 la care este ridicat (ex: 2^2 = 100)
-știind acest lucru, dacă avem un număr care este putere a lui 2, atunci n-1 va avea doar k de 1 consecutivi de la dreapta la stânga, unde k este puterea la care se ridică 2 pentru a obține numărul inițial (ex: 4 = 100 în baza 2, 100 - 1 = 11, calcule făcute în baza 2)
-de aici => n & (n-1) o să fie 0 <=> n este o putere a lui 2"
      ></Description>
      <h6 className="mt-4">
        Alte aplicații mai pot fi găsite pe Pbinfo.ro, dar sunt destul de
        complexe
      </h6>
    </div>
  );
}

export default OperatiiPeBiti;
