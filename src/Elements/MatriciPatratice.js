import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/matrici/diag principala.jpg";
import img2 from "../Resources/Images/matrici/diag_secundara.jpg";
import img3 from "../Resources/Images/matrici/zone.jpg"
import img4 from "../Resources/Images/matrici/zona1.jpg"
import img5 from "../Resources/Images/matrici/zona2.jpg"
import img6 from "../Resources/Images/matrici/zona3.jpg"
import img7 from "../Resources/Images/matrici/zona4.jpg"

function MatriciPatratice() {
  return (
    <div className="Card">
      <Title text="Matrici pătratice"></Title>
      <Description
        text="-coloana mediană reprezintă coloana care împarte matricea vertical în 2 matrici de lungimi egale
-coloana mediană este chiar o coloană a matricei dacă matricea are număr impar de coloane (dacă matricea are număr par de coloane, atunci coloana mediană există, dar este doar imaginară)
-simetria față de coloana mediană => a[i][j] = a[i][n-j+1]
-linia mediană reprezintă linia care împarte matricea orizontal în 2 matrici de lungimi egale
-linia mediană este chiar o linie a matricei dacă matricea are număr impar de linii (dacă matricea are număr par de linii, atunci linia mediană există, dar este doar imaginară)
-simetria față de linia mediană => a[i][j] = a[n-i+1][j]
-dacă avem INDEXARE DE LA 0 => tot ce are +1 se transformă în -1"
      ></Description>
      <Subtitle text="Diagonala principală"></Subtitle>
      <Description
        text="-elementele situate pe diagonala principală => i = j
-elementele situate deasupra diagonalei principale => i < j
-elementele situate sub diagonala principala => i > j
-simetria față de diag principală : a[i][j] = a[j][i] (pătrățelele roșii)
-distanța de la un element a[i][j] al matricei până la diagonala principală este egală cu abs(i - j)"
      ></Description>
      <img src={img1} className="mb-2" id="image50"></img>
      <Subtitle text="Diagonala secundară"></Subtitle>
      <Description
        text="-elementele situate pe diagonala secundară => i + j = n+1
-elementele situate deasupra diagonalei secundare => i + j < n+1
-elementele situate sub diagonala secundară => i + j > n+1        
-simetria față de diag secundară : a[i][j] = a[n-j+1][n-i+1] (pătrățelele roșii)
-dacă avem INDEXARE DE LA 0 => tot ce are +1 se transformă în -1
-distanța de la un element a[i][j] al matricei până la diagonala secundară este egală cu abs(n + 1 - (i + j))"
      ></Description>
      <img src={img2} className="mb-2" id="image50"></img>

      <Subtitle text="Zonele din matrice"></Subtitle>
      <Description
        text="-pentru fiecare zonă se folosesc formulele corespunzătoare în funcție de poziția față de celelalte 2 diagonale
-zona I (Nord) pătrățelele albastre
i < j && i+j < n+1
-zona II (Est) pătrățelele roșii
i < j && i+j > n+1
-zona III (Sud) pătrățelele portocalii
i > j && i+j > n+1
-zona IV (Vest) pătrățelele verzi
i > j && i+j < n+1
-dacă avem INDEXARE DE LA 0 => tot ce are +1 se transformă în -1"
      ></Description>
      <img src={img3} className="mb-2" id="image50"></img>
      <Subtitle text="Accesări directe pentru zonele din matrice"></Subtitle>
      <Description text="-zona 1"></Description>
      <img src={img4} className="mb-2" id="image75"></img>
      <Description text="-zona 2"></Description>
      <img src={img5} className="mb-2" id="image75"></img>
      <Description text="-zona 3"></Description>
      <img src={img6} className="mb-2" id="image75"></img>
      <Description text="-zona 4"></Description>
      <img src={img7} className="mb-2" id="image75"></img>
      <h6 className="mt-4">
        Unele secvențe de cod sunt preluate din cursul de admitere la UBB de pe Zecelaexamene.ro
      </h6>
    </div>
  );
}

export default MatriciPatratice;
