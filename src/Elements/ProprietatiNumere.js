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
-un număr poate fi scris ca suma de alte nr in 2^(n-1) moduri, dacă se ține cont de ordinea elementelor.
ex : n = 3 => 2^2 moduri : 1+1+1 = 1+2 = 2+1 = 3 (4 moduri) (grila cu proprietatea este pusă la chestii interesante -> random)
-orice pătrat perfect poate fi scris ca sumă de numere impare consecutive pornind de la 1 (ne putem gândi la o matrice pătratică de 1, după la cea de 2, și tot asa... referință din rezolvare concurs ubb 2024 youtube)
ex 1; 1+3 = 4; 1+3+5 = 9; …
-un număr are numărul de divizori impari <=> este pătrat perfect (toți divizorii sunt în perechi de câte 2 : (d, n/d) mai puțin rădăcina pătrată care este singură)
-un număr care are 3 divizori este pătrat perfect de număr prim (număr de forma p^2, p fiind prim)
-un număr de forma p^3 (p fiind prim) are 4 divizori: 1, p, p^2, p^3
-un număr de forma p*q (p și q prime) are 4 divizori: 1, p, q, p*q
-un număr este pătrat perfect => la descompunerea în factori primi, toți exponenții o să fie pari
-un număr este perfect dacă este egal cu suma divizorilor săi mai puțin el însuși (ex: 6 = 1 + 2 + 3)
-orice număr poate fi descompus în produs de factori primi (pt fiecare număr descompunerea e unică)
-un număr poate fi scris ca sumă de puteri distincte ale lui k => numărul se scrie doar cu cifre de 0 și 1 în baza k
-orice număr poate fi scris ca sumă de puteri distincte ale lui 2 (din reprezentarea în baza 2 a numerelor)
-un număr în baza k se divide cu k-1 <=> suma cifrelor numărului este divizibilă cu k-1 (generalizarea divizibilității cu 9 din baza 10)
-un număr în baza k se divide cu k+1 <=> diferența dintre suma cifrelor de pe poziții pare și suma cifrelor de pe poziții impare este divizibilă cu k+1
-cmmdc(a, b) * cmmmc(a, b) = a*b
-algoritmii de cmmdc și de cmmmc pot fi generalizați pentru oricâte numere
(de ex pentru a, b, c => cmmdc(a, cmmdc(b, c)) )
-b este multiplu de a <=> fibonacci(b) este multiplu de fibonacci(a) (fibo0 pe pbinfo)
-numărul de termeni dintr-o progresie aritmetică de rație r, cu capetele st și dr este nr_term = (dr - st) / r + 1
-de asemenea, putem da fact comun rația, și atunci o să avem (1+2+3+...+n) * r
"></Description>
    </div>
  );
}

export default ProprietatiNumere;
