import React from "react";
import Card from "./Card";
import { render } from "react-dom";
import OperatoriSiExpresii from "../Elements/OperatoriSiExpresii";
import TipuriDeDate from "../Elements/TipuriDeDate";
import ProprietatiNumere from "../Elements/ProprietatiNumere";
import Divizibilitate from "../Elements/Divizibilitate";
import BazeDeNumeratie from "../Elements/BazeDeNumeratie";
import StergeriSiInserari from "../Elements/StergeriInserariVectori";
import SortariVectori from "../Elements/SortariVectori";
import CautareBinara from "../Elements/CautareBinara"
import Interclasari from "../Elements/Interclasari"
import Secvente from "../Elements/Secvente";
import MatriciSumePartiale from "../Elements/MatriciSumePartiale";

function Sidebar() {
  return (
    <div className="container m-0 p-0">
      <div className="toggle-btn" id="toggle-btn" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="sidebar" id="sidebar">
        <div data-bs-theme="dark">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={closeSidebar}
          ></button>
        </div>
        <div className="row fw-medium">
          <h4 className="fw-light">Clasa a IX-a</h4>
          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(
                  <TipuriDeDate></TipuriDeDate>,
                  document.getElementById("card")
                );
              }}
            >
              Tipuri de date
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(
                  <OperatoriSiExpresii></OperatoriSiExpresii>,
                  document.getElementById("card")
                );
              }}
            >
              Operatori si expresii
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(
                  <Divizibilitate></Divizibilitate>,
                  document.getElementById("card")
                );
              }}
            >
              Divizibilitate
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(
                  <BazeDeNumeratie></BazeDeNumeratie>,
                  document.getElementById("card")
                );
              }}
            >
              Baze de numerație
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(
                  <StergeriSiInserari></StergeriSiInserari>,
                  document.getElementById("card")
                );
              }}
            >
              Vectori - ștergeri și inserări
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(
                  <SortariVectori></SortariVectori>,
                  document.getElementById("card")
                );
              }}
            >
              Vectori - sortări
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(
                  <CautareBinara></CautareBinara>,
                  document.getElementById("card")
                );
              }}
            >
              Vectori - căutare binară
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(
                  <Interclasari></Interclasari>,
                  document.getElementById("card")
                );
              }}
            >
              Vectori - interclasări
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(
                  <Secvente></Secvente>,
                  document.getElementById("card")
                );
              }}
            >
              Vectori - secvențe
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(
                  <MatriciSumePartiale></MatriciSumePartiale>,
                  document.getElementById("card")
                );
              }}
            >
              Matrici - sume parțiale
            </a>
          </p>

        </div>
        <div className="row fw-medium">
          <h4 className="fw-light">Clasa a X-a</h4>
          <p>
            <a>test</a>
          </p>
        </div>
        <div className="row fw-medium">
          <h4 className="fw-light">Clasa a XI-a</h4>
          <p>
            <a>test</a>
          </p>
        </div>
        <div className="row fw-medium">
          <h4 className="fw-light">Diverse</h4>
          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(
                  <ProprietatiNumere></ProprietatiNumere>,
                  document.getElementById("card")
                );
              }}
            >
              Proprietăți numere
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

const toggleSidebar = () => {
  document.getElementById("sidebar").style.transform = "translate(0px)";
  document.getElementById("suggestionMessage").style.visibility = "hidden";
};

const closeSidebar = () => {
  document.getElementById("sidebar").style.transform = "translate(-250px)";
};
export default Sidebar;
