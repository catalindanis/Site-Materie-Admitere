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
import CautareBinara from "../Elements/CautareBinara";
import Interclasari from "../Elements/Interclasari";
import Secvente from "../Elements/Secvente";
import MatriciSumePartiale from "../Elements/MatriciSumePartiale";
import VectoriCaracterisitiSiFrecventa from "../Elements/VectoriCaracteristiciSIFrecventa";
import MatriciPatratice from "../Elements/MatriciPatratice";
import AritmeticaModulara from "../Elements/AritmeticaModulara";
import ExponentiereRapida from "../Elements/ExponentiereRapida";
import DivideEtImpera from "../Elements/DivideEtImpera";
import Combinatorica from "../Elements/Combinatorica";
import SiruriDeCaractere from "../Elements/SiruriDeCaractere";
import OperatiiPeBiti from "../Elements/OperatiiPeBiti";
import Backtracking from "../Elements/Backtracking";
import MetodaGreedy from "../Elements/MetodaGreedy";
import GrafuriNeorientate from "../Elements/GrafuriNeorientate";
import GrafuriOrientate from "../Elements/GrafuriOrientate";
import ArboriCuRadacina from "../Elements/ArboriCuRadacina";
import ProgramareDinamica from "../Elements/ProgramareDinamica";
import DezvoltareaExponțialaAlSubprogramelorRecursive from "../Elements/DezvoltareaExponțialaAlSubprogramelorRecursive"
import ComplexitateaAlgoritmilor from "../Elements/ComplexitateaAlgoritmilor"
import DiverseInteresanteGrafuri from "../Elements/DiverseInteresanteGrafuri"
import DiverseInteresanteMatrici from "../Elements/DiverseInteresanteMatrici"
import DiverseInteresanteRandom from "../Elements/DiverseInteresanteRandom"
import DiverseInteresanteGreedy from "../Elements/DiverseInteresanteGreedy"
import ArboriBinari from "../Elements/ArboriBinari"

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

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
                scrollToTop();
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
                scrollToTop();
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
                scrollToTop();
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
                scrollToTop();
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
                scrollToTop();
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
                scrollToTop();
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
                scrollToTop();
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
                scrollToTop();
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
                scrollToTop();
                closeSidebar();
                render(<Secvente></Secvente>, document.getElementById("card"));
              }}
            >
              Vectori - secvențe
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <VectoriCaracterisitiSiFrecventa></VectoriCaracterisitiSiFrecventa>,
                  document.getElementById("card")
                );
              }}
            >
              Vectori - caracteristici și de frecvență
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <MatriciPatratice></MatriciPatratice>,
                  document.getElementById("card")
                );
              }}
            >
              Matrici pătratice
            </a>
          </p>

          <p>
            <a
              onClick={() => {
                scrollToTop();
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
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <DivideEtImpera></DivideEtImpera>,
                  document.getElementById("card")
                );
              }}
            >
              Divide et impera - sortări rapide
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <SiruriDeCaractere></SiruriDeCaractere>,
                  document.getElementById("card")
                );
              }}
            >
              Șiruri de caractere
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <Combinatorica></Combinatorica>,
                  document.getElementById("card")
                );
              }}
            >
              Combinatorică
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <ExponentiereRapida></ExponentiereRapida>,
                  document.getElementById("card")
                );
              }}
            >
              Exponențiere rapidă
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <OperatiiPeBiti></OperatiiPeBiti>,
                  document.getElementById("card")
                );
              }}
            >
              Operații pe biți
            </a>
          </p>
        </div>
        <div className="row fw-medium">
          <h4 className="fw-light">Clasa a XI-a</h4>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <Backtracking></Backtracking>,
                  document.getElementById("card")
                );
              }}
            >
              Backtracking
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <MetodaGreedy></MetodaGreedy>,
                  document.getElementById("card")
                );
              }}
            >
              Metoda greedy
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <GrafuriNeorientate></GrafuriNeorientate>,
                  document.getElementById("card")
                );
              }}
            >
              Grafuri neorientate
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <GrafuriOrientate></GrafuriOrientate>,
                  document.getElementById("card")
                );
              }}
            >
              Grafuri orientate
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <ArboriCuRadacina></ArboriCuRadacina>,
                  document.getElementById("card")
                );
              }}
            >
              Arbori cu rădăcină
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <ArboriBinari></ArboriBinari>,
                  document.getElementById("card")
                );
              }}
            >
              Arbori binari
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <ProgramareDinamica></ProgramareDinamica>,
                  document.getElementById("card")
                );
              }}
            >
              Programare dinamică
            </a>
          </p>
        </div>
        <div className="row fw-medium">
          <h4 className="fw-light">Diverse</h4>
          <p>
            <a
              onClick={() => {
                scrollToTop();
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
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <ComplexitateaAlgoritmilor></ComplexitateaAlgoritmilor>,
                  document.getElementById("card")
                );
              }}
            >
              Complexitatea algoritmilor
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <AritmeticaModulara></AritmeticaModulara>,
                  document.getElementById("card")
                );
              }}
            >
              Aritmetică modulară
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                scrollToTop();
                closeSidebar();
                render(
                  <DezvoltareaExponțialaAlSubprogramelorRecursive></DezvoltareaExponțialaAlSubprogramelorRecursive>,
                  document.getElementById("card")
                );
              }}
            >
              Dezvoltarea exponțială al subprogramelor recursive
            </a>
          </p>
        </div>
        <div className="row fw-medium">
          <h4 className="fw-light">Chestii interesante</h4>
            <p>
              <a
                onClick={() => {
                  scrollToTop();
                  closeSidebar();
                  render(
                    <DiverseInteresanteGrafuri></DiverseInteresanteGrafuri>,
                    document.getElementById("card")
                  );
                }}
              >
                Grafuri
              </a>
            </p>
            <p>
              <a
                onClick={() => {
                  scrollToTop();
                  closeSidebar();
                  render(
                    <DiverseInteresanteMatrici></DiverseInteresanteMatrici>,
                    document.getElementById("card")
                  );
                }}
              >
                Matrici
              </a>
            </p>
            <p>
              <a
                onClick={() => {
                  scrollToTop();
                  closeSidebar();
                  render(
                    <DiverseInteresanteGreedy></DiverseInteresanteGreedy>,
                    document.getElementById("card")
                  );
                }}
              >
                Greedy
              </a>
            </p>
            
            <p>
              <a
                onClick={() => {
                  scrollToTop();
                  closeSidebar();
                  render(
                    <DiverseInteresanteRandom></DiverseInteresanteRandom>,
                    document.getElementById("card")
                  );
                }}
              >
                Random
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
