import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/divizibilitate/afisare_div.jpg"
import img2 from "../Resources/Images/divizibilitate/afisare_div_rec.jpg"
import img3 from "../Resources/Images/divizibilitate/cmmdc_impartiri.jpg"
import img4 from "../Resources/Images/divizibilitate/cmmdc_impartiri_rec.jpg"
import img5 from "../Resources/Images/divizibilitate/cmmdc_scaderi.jpg"
import img6 from "../Resources/Images/divizibilitate/cmmdc_scaderi_rec.jpg"
import img7 from "../Resources/Images/divizibilitate/cmmmc_clasic.jpg"
import img8 from "../Resources/Images/divizibilitate/cmmmc_formula.jpg"
import img9 from "../Resources/Images/divizibilitate/primalitate.jpg"
import img10 from "../Resources/Images/divizibilitate/factorizare.jpg"
import img11 from "../Resources/Images/divizibilitate/factorizare_rec.jpg"
import img12 from "../Resources/Images/divizibilitate/factorizare_rec_dubla.jpg"
import img13 from "../Resources/Images/divizibilitate/nr_div_factorizare.jpg"
import img14 from "../Resources/Images/divizibilitate/nr_div_impari_factorizare.jpg"
import img15 from "../Resources/Images/divizibilitate/nr_div_pari_factorizare.jpg"
import img16 from "../Resources/Images/divizibilitate/suma_div_factorizare.jpg"
import img17 from "../Resources/Images/divizibilitate/legendre_prim_explicatie.jpg"
import img18 from "../Resources/Images/divizibilitate/legendre.jpg"
import img19 from "../Resources/Images/divizibilitate/legendre_neprim_explicatie.jpg"
import img20 from "../Resources/Images/divizibilitate/legendre_neprim.jpg"
import img21 from "../Resources/Images/divizibilitate/eratostene.jpg"
import img22 from "../Resources/Images/divizibilitate/suma_div_factorizare_explicatie.jpg"

function TipuriDeDate() {
  return (
    <div className="Card">
      <Title text="Divizibilitate" />
      <Description text="-n pătrat perfect => există un număr x astfel încât x*x = n
-orice pătrat perfect poate fi scris ca sumă de numere impare consecutive pornind de la 1
ex 1; 1+3 = 4; 1+3+5 = 9; …
-nr prim => 2 div (improprii) - 1 și el însuși
-nr impare => doar divizori impari
-un număr are numărul de divizori impari <=> este pătrat perfect (toți divizorii sunt în perechi de câte 2 : (d, n/d) mai puțin rădăcina pătrată care este singură)
-un număr care are 3 divizori este pătrat perfect de număr prim 
-un număr este pătrat perfect => la descompunerea în factori primi, toți exponenții o să fie pari
-orice număr poate fi descompus în produs de factori primi (pt fiecare număr descompunerea e unică)
-un număr în baza k se divide cu k-1 <=> suma cifrelor numărului este divizibilă cu k-1 (generalizarea divizibilității cu 9 din baza 10)
-un număr în baza k se divide cu k+1 <=> diferența dintre suma cifrelor de pe poziții pare și suma cifrelor de pe poziții impare este divizibilă cu k+1
-cmmdc(a, b) * cmmmc(a, b) = a*b
      "/>
      <Subtitle text="Algoritmi implementati :"></Subtitle>
      <img src={img1} className="mb-2" id="image"></img>
      <img src={img2} className="mb-2" id="image"></img>
      <img src={img3} className="mb-2" id="image"></img>
      <img src={img4} className="mb-2" id="image"></img>
      <img src={img5} className="mb-2" id="image"></img>
      <img src={img6} className="mb-2" id="image"></img>
      <img src={img7} className="mb-2" id="image"></img>
      <img src={img8} className="mb-2" id="image"></img>
      <img src={img9} className="mb-2" id="image"></img>
      <img src={img10} className="mb-2" id="image"></img>
      <img src={img11} className="mb-2" id="image"></img>
      <img src={img12} className="mb-2" id="image"></img>
      <Description text="Numarul de divizori prin factorizare se calculeaza facand produsul tuturor exponentilor +1 din descompunerea in factori primi a numarului"></Description>
      <img src={img13} className="mb-2" id="image"></img>
      <Description text="Numarul de divizori impari prin factorizare se calculeaza asemanator, facand produsul tuturor exponentilor +1 din descompunerea in factori primi a numarului mai putin pentru exponentul lui 2"></Description>
      <img src={img14} className="mb-2" id="image"></img>
      <Description text="Numarul de divizori pari prin factorizare se calculeaza asemanator, facand produsul tuturor exponentilor +1 din descompunerea in factori primi a numarului mai putin pentru exponentul lui 2 unde nu mai adunam acel +1"></Description>
      <img src={img15} className="mb-2" id="image"></img>
      <img src={img22} className="mb-2" id="image"></img>
      <img src={img16} className="mb-2" id="image"></img>
      <img src={img17} className="mb-2" id="image"></img>
      <img src={img18} className="mb-2" id="image"></img>
      <img src={img19} className="mb-2" id="image"></img>
      <img src={img20} className="mb-2" id="image"></img>
      <img src={img21} className="mb-2" id="image"></img>
      <Description text="Ciurul lui Eratostene => vector cu ajutorul căruia știm numerele prime până la n (cu 1 sunt numerele neprime, iar cu 0 numerele prime)
Complexitate O(n*log(log(n)))"></Description>
    <h6 className="mt-4">Pozele cu explicatii au fost preluate de pe Pbinfo.ro</h6>
    </div>
  );
}

export default TipuriDeDate;
