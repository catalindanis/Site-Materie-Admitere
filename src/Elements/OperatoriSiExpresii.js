import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function OperatoriSiExpresii() {
  return (
    <div className="Card">
      <Title text="Operatori și expresii" />
      <Subtitle text="Operatori aritmetici : +, -, *, /, %"></Subtitle>
      <Description text="-dacă operanzii sunt de tip întreg atunci se va realiza împărțirea întreagă (DIV)
-dacă operanzii sunt de tip real atunci se va realiza împărțirea zecimală (“/”)
-operatorul % se aplică doar dacă ambii operanzi sunt întregi
-dacă cel puțin un operand al împărțirii întregi sau al operației modulo este negativ, rezultatul operației depinde de versiunea compilatorului C++ folosit
"></Description>
<Subtitle text="Operatori relaționali : <, >, <=, >=, ==, !="></Subtitle>
<Subtitle text="Operatori logici : !, ||, &&"></Subtitle>
<Subtitle text="Alte tipuri de operatori : +=, -=, *=, /=, %=, ++, --, ? "></Subtitle>
<Subtitle text="Prioritatea operatorilor :"></Subtitle>
<Description text="()
++, -- (preincrementare ++x)
++, -- (postincrementare x++)
!
*, /, %
+, -
<, >, <=, >=
==, !=
&&
||
+=, -=, *=, %=
"></Description>
    </div>
  );
}

export default OperatoriSiExpresii;
