import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function ProgramareDinamica() {
  return (
    <div className="Card">
      <Title text="Programare dinamică"></Title>
      <Description
        text="-este o metodă de rezolvare a unor probleme de informatică ce presupune calcularea rezultatului pe baza rezultatelor anterioare (în general, se folosește recursivitate sau tablouri pentru a rezolva problema)
-există 2 moduri de a rezolva problemele cu programare dinamică: bottom-up și top-down
-bottom-up presupune construirea unui tablou de rezultate de jos în sus, de la niște valori pe care le știm deja
-top-down folosește recursivitatea și presupune aflarea valorii de sus în jos
-pentru a optimiza complexitatea timp când rezolvăm cu metoda top-down se poate folosi memoizarea, reținând fiecare rezultat odată ce l-am obținut, pentru a-l folosi la obținerea altor rezultate dacă e nevoie
-nu există o regulă, fiecare problemă rezolvându-se într-un alt mod"
      ></Description>
      <Subtitle text="Probleme diverse"></Subtitle>
    </div>
  );
}

export default ProgramareDinamica;
