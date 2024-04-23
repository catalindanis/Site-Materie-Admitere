import React from "react";
import Card from "./Card";
import { render } from "react-dom";
import OperatoriSiExpresii from "../Elements/OperatoriSiExpresii";
import TipuriDeDate from "../Elements/TipuriDeDate";
import ProprietatiNumere from "../Elements/ProprietatiNumere";
import Divizibilitate from "../Elements/Divizibilitate";

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
                render(<TipuriDeDate></TipuriDeDate>, document.getElementById("card"));
              }}
            >
              Tipuri de date
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(<OperatoriSiExpresii></OperatoriSiExpresii>, document.getElementById("card"));
              }}
            >
              Operatori si expresii
            </a>
          </p>
          
          <p>
            <a
              onClick={() => {
                closeSidebar();
                render(<Divizibilitate></Divizibilitate>, document.getElementById("card"));
              }}
            >
              Divizibilitate
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
                render(<ProprietatiNumere></ProprietatiNumere>, document.getElementById("card"));
              }}
            >
              Proprietati numere
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
