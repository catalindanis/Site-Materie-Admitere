import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function ArboriCuRadacina() {
  return (
    <div className="Card">
      <Title text="Arbori cu rădăcină"></Title>
      <Subtitle text="Terminologie"></Subtitle>
      <Description
        text="-un arbore este un graf conex și aciclic
-rădăcina este un vârf special; putem spune că agățăm arborele în rădăcină, iar restul nodurilor cad
-un arbore cu n vârfuri are n-1 muchii
-arborele este maximal și minimal cu această proprietate, adică dacă s-ar adăuga sau s-ar scoate o muchie fie ar apărea un ciclu, fie nu ar mai fi conex
-între oricare două vârfuri ale unui arbore există un lanț elementar unic
-ascendenții unui vârf sunt vârfurile de deasupra acestuia (dacă reprezentăm prin desen) și care fac parte din lanțul de la rădăcină la vârf
-ascendent direct înseamnă ascendent care este adiacent cu vârful (tată)
-rădăcina nu are niciun fel de ascendent
-descendenții unui vârf sunt vârfurile de sub acesta (dacă reprezentăm prin desen)
-descendent direct înseamnă descendent care este adiacent cu vârful (copil)
-un vârf fără descendenți se numește frunză
-două vârfuri care au același tată se numesc frați
-lungimea unui lanț de la rădăcina arborelui la un vârf x reprezintă nivelul sau adâncimea vârfului
-lungimea maximală a unui lanț de la rădăcina arborelui la un vârf x reprezintă înălțimea arborelui
-un subarbore este format dintr-un vârf și toți descendenții acestuia
-nodul intern reprezintă un nod care nu este frunză (are cel puțin un descendent direct)"
      ></Description>
      <Subtitle text="Vectorul de tați"></Subtitle>
      <Description
        text="-pentru fiecare nod se reține ascendentul lui direct (tatăl)
-există o singură valoare 0, corespunzătoare rădăcinii
-frunzele corespund valorilor care nu apar în vectorul de tați"
      ></Description>
    </div>
  );
}

export default ArboriCuRadacina;
