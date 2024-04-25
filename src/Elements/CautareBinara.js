import React from "react";
import "../Style/Card.css";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";
import img1 from "../Resources/Images/vectori/cautare_binara_clasic.jpg";
import img2 from "../Resources/Images/vectori/cautare_binara_clasic_rec.jpg";
import img3 from "../Resources/Images/vectori/cautare_binara_clasic_pozitie.jpg";
import img4 from "../Resources/Images/vectori/cautare_binara_clasic_pozitie_rec.jpg";
import img5 from "../Resources/Images/vectori/cel_mai_mic_mai_mare_sau_egal.jpg";
import img6 from "../Resources/Images/vectori/cel_mai_mic_mai_mare_sau_egal_rec.jpg";
import img7 from "../Resources/Images/vectori/cel_mai_mare_mai_mic_sau_egal.jpg";
import img8 from "../Resources/Images/vectori/cel_mai_mare_mai_mic_sau_egal_rec.jpg";
import img9 from "../Resources/Images/vectori/prima_aparitie.jpg";
import img10 from "../Resources/Images/vectori/prima_aparitie_rec.jpg";
import img11 from "../Resources/Images/vectori/ultima_aparitie.jpg";
import img12 from "../Resources/Images/vectori/ultima_aparitie_rec.jpg";
import img13 from "../Resources/Images/vectori/numar_aparitii.jpg";
import img14 from "../Resources/Images/vectori/verificare_patrat_perfect.jpg";
import img15 from "../Resources/Images/vectori/determinare_radacina.jpg";
import img16 from "../Resources/Images/vectori/determinare_radacina_rec.jpg";
import img17 from "../Resources/Images/vectori/parte_intreaga_radical.jpg";

function CautareBinara() {
  return (
    <div className="Card">
      <Title text="Căutare binară" margin="100px" />
      <Description
        text="-algoritm care se poate aplica doar pe șirurile ordonate (crescător sau descrescător)
-complexitate logaritmică (O(log2n) deoarece la fiecare pas înjumătățește numărul de posibile soluții
"
      ></Description>
      <Subtitle text="Verificarea apariției unui element într-un șir ordonat"></Subtitle>
      <img src={img1} className="mb-2" id="image100"></img>
      <img src={img2} className="mb-2" id="image100"></img>

      <Subtitle text="Poziția unui element într-un șir ordonat"></Subtitle>
      <img src={img3} className="mb-2" id="image100"></img>
      <img src={img4} className="mb-2" id="image100"></img>

      <Subtitle text="Poziția celui mai mic element mai mare sau egal cu o valoare într-un șir ordonat"></Subtitle>
      <img src={img5} className="mb-2" id="image100"></img>
      <img src={img6} className="mb-2" id="image100"></img>

      <Subtitle text="Poziția celui mai mare element mai mic sau egal cu o valoare într-un șir ordonat"></Subtitle>
      <img src={img7} className="mb-2" id="image100"></img>
      <img src={img8} className="mb-2" id="image100"></img>

      <Subtitle text="Poziția primei apariții a unui element într-un șir ordonat"></Subtitle>
      <img src={img9} className="mb-2" id="image100"></img>
      <img src={img10} className="mb-2" id="image100"></img>

      <Subtitle text="Poziția ultimei apariții a unui element într-un șir ordonat"></Subtitle>
      <img src={img11} className="mb-2" id="image100"></img>
      <img src={img12} className="mb-2" id="image100"></img>

      <Subtitle text="Numărul de apariții ale unui element într-un șir ordonat"></Subtitle>
      <img src={img13} className="mb-2" id="image100"></img>

      <Subtitle text="Verificare dacă un număr este pătrat perfect cu ajutorul căutării binare"></Subtitle>
      <img src={img14} className="mb-2" id="image100"></img>

      <Subtitle text="Determinare rădăcină pătrată cu ajutorul căutării binare"></Subtitle>
      <img src={img15} className="mb-2" id="image100"></img>
      <img src={img16} className="mb-2" id="image100"></img>

      <Subtitle text="Determinarea părții întregi a rădăcinii pătrate cu ajutorul căutării binare"></Subtitle>
      <img src={img17} className="mb-2" id="image100"></img>
    </div>
  );
}

export default CautareBinara;
