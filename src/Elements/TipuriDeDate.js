import React from "react";
import Title from "../Components/Title";
import Description from "../Components/Description";
import Subtitle from "../Components/Subtitle";

function TipuriDeDate() {
  return (
    <div className="Card">
      <Title text="Tipuri de date" />
      <Description text="CHAR - se scrie pe 8 biți (1 byte) și ia valori în teorie de la [-2^7, 2^7-1] dar defapt caracterele au codul ASCII pozitiv, adică [0,2^7-1]   
SHORT - se scrie pe 16 biți (2 bytes) (din cei 16, unul este folosit pentru semn) și ia valori de la [-2^15, 2^15-1]
UNSIGNED SHORT  - se scrie pe 16 biți (2 bytes) (doar că se folosesc toți cei 16) și ia valori în intervalul [0, 2^16-1]
INT - se scrie pe 32 de biți (4 bytes) (din cei 32, unul este folosit pentru semn) și ia valori în intervalul [-2^31, 2^31 - 1] 
UNSIGNED INT - se scrie pe 32 de biți (4 bytes) (doar că se folosesc toți cei 32) și ia valori în intervalul [0, 2^32-1]
LONG LONG - se scrie pe 64 biți (8 bytes) (din cei 64, unul este folosit pentru semn) și ia valori în intervalul [-2^63, 2^63-1]
UNSIGNED LONG LONG - se scrie pe 64 biți (8 bytes) (doar că se folosesc toți cei 64) și ia valori în intervalul [0, 2^64-1]
DOUBLE - se scrie pe 64 biți (8 bytes)
FLOAT - se scrie pe 32 biți (4 bytes)
-8 biți = 1 byte (octet)
-tipul de date pe care se efectuează operațiile este dat de tipurile variabilelor
-5 / 2 = 2 (int / int = int)
-5 / 2.0 = 2.5 (int / double = double)
-5 / 2.0 + 5 / 2 = 2.5 + 2 = 4.5 (int / double + int / int = double)
-5 * 1LL = 5 (int * long long = long long)
      "/>
    </div>
  );
}

export default TipuriDeDate;
