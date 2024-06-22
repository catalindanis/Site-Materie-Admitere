import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function SiruriDeCaractere() {
  return (
    <div className="Card">
      <Title text="Șiruri de caractere"></Title>
      <Description
        text="-un șir de caractere este indexat de la 0
-citirea unui cuvânt se face normal ca la orice variabila (cin>>s)
-citirea unui șir de caractere în care există spații (propoziție) se face cu 2 funcții speciale : cin.get(s, lung) sau cin.getline(s, lung) (unde s este șirul iar lung este lungimea maximă)
-diferența dintre cele 2 este când citim mai multe propoziții una după alta, deoarece cin.getline() elimină ultimul caracter (ENTER) și se poate citi direct următoarea propoziție, în timp ce cin.get() nu elimină acest caracter
-de aceea, dacă folosim cin.get() și imediat mai folosim odată cin.get() sau cin.getline(), după ce introducem primul set de date pentru primul apel al funcției o să observăm că pentru al doilea apel se va citi direct un șir vid care era defapt ENTER-ul rămas de la primul apel 
-pentru siguranță folosim doar cin.getline() !
-tot pentru siguranță, înainte să citim orice șir de caractere dăm un ci.get() gol deaorece nu va influența absolut deloc algoritmul, ba dimpotrivă, dacă e cazul chiar va ajuta"
      ></Description>
      <Subtitle text="Funcții predefinite pentru caractere"></Subtitle>
      <Description
        text="-isalnum(ch) - verifică dacă caracterul este alfanumeric (literă sau cifră)
-isalpha(ch) - verifică dacă un caracter este alfabetic (literă)
-islower(ch) - verifică dacă un caracter este literă mică
-isupper(ch) - verifică dacă un caracter este literă mare
-isdigit(ch) - verifică dacă un caracter este cifră
-tolower(ch) - returnează litera mare corespunzătoare
-toupper(ch) - returnează litera mică corespunzătoare"
      ></Description>
      <Subtitle text="Funcții predefinite pentru șiruri de caractere (cstring)"></Subtitle>
      <Description
        text="-strlen(s) - returnează lungimea șirului fără caracterul nul
-strcpy(dest, src) - copiază în dest tot conținutul din src (inclusiv caracterul nul) și returnează acest dest; dest != src
-strncpy(dest, src, count) - copiază în dest cel mult count caractere din src (dacă șirul din care copiezi are lungimea n, atunci daca ii dai la strncpy maxim n+1 caractere o sa copieze si caracterul nul, in rest doar o sa suprascrie caracterele); dest != src
-strcat(dest, src) - concatenează la dest tot conținutul din src (inclusiv caracterul nul); dest != src
-strchr(s, ch) - returnează NULL dacă caracterul ch nu apare în s, respectiv adresa primei apariții a lui ch în s dacă apare
-strstr(s1, s2) - returnează NULL dacă șirul s2 nu apare în șirul s1, respectiv adresa primei apariții a lui s2 în s1
-strcmp(s1, s2) - compară lexicografic cele 2 șiruri, dacă s1 este mai mic returnează o valoare negativă, dacă sunt egale returnează 0 iar daca s1 este mai mare returnează o valoare pozitivă
-strtok(s, sep) - extrage cuvintele din șirul s delimitate de unul din separatorii din sep; primul apel are ca parametri șirul din care se face extragerea și sirul separatorilor, iar de la al doilea apel primul parametru este NULL; șirul s este distrus după ce se aplică strtok "
      ></Description>
    </div>
  );
}

export default SiruriDeCaractere;
