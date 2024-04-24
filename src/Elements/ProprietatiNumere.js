import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function ProprietatiNumere() {
  return (
    <div className="Card">
      <Title text="Proprietăți numere" />
      <Description text="-numărul de cifre este log10(n) + 1
-cifra de control este : 
0 dacă n = 0 			sau
9 dacă n = 9k, k întreg 	sau
n%9 în rest
-ogl(ogl(n)) nu e tot timpul n
ex : n = 1230, ogl = 321, ogl(ogl) = 123
-nr prim => 2 div (improprii) - 1 și el însuși
-nr impare => doar divizori impari
-un număr poate fi scris ca suma de alte nr in 2^(n-1) moduri, dacă nu se ține cont de repetări.
ex : n = 3 => 2^2 moduri : 1+1+1 = 1+2 = 2+1 = 3 (4 moduri)
-orice pătrat perfect poate fi scris ca sumă de numere impare consecutive pornind de la 1
ex 1; 1+3 = 4; 1+3+5 = 9; …
-un număr are numărul de divizori impari <=> este pătrat perfect (toți divizorii sunt în perechi de câte 2 : (d, n/d) mai puțin rădăcina pătrată care este singură)
-un număr care are 3 divizori este pătrat perfect de număr prim 
-un număr este pătrat perfect => la descompunerea în factori primi, toți exponenții o să fie pari
-orice număr poate fi descompus în produs de factori primi (pt fiecare număr descompunerea e unică)
-un număr poate fi scris ca sumă de puteri distincte ale lui k => numărul se scrie doar cu cifre de 0 și 1 în baza k
-orice număr poate fi scris ca sumă de puteri distincte ale lui 2 (din reprezentarea în baza 2 a numerelor)
-un număr în baza k se divide cu k-1 <=> suma cifrelor numărului este divizibilă cu k-1 (generalizarea divizibilității cu 9 din baza 10)
-un număr în baza k se divide cu k+1 <=> diferența dintre suma cifrelor de pe poziții pare și suma cifrelor de pe poziții impare este divizibilă cu k+1
-cmmdc(a, b) * cmmmc(a, b) = a*b
"></Description>
    </div>
  );
}

export default ProprietatiNumere;
