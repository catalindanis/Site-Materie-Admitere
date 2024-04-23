import React, { useState } from 'react';
import "./App.css";
import "./Style/Title.css"
import "./Style/Sidebar.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="App">
      <header>
        <div className="Title">
          <h1>Site Materie Admitere UBB</h1>
        </div>
      </header>
      <body>

      <div className="toggle-btn" onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="sidebar" id="sidebar">

            <button type="button" class="btn-close" data-bs-theme="white" aria-label="Close"></button>

                <h3>Clasa a IX-a</h3>
                <ul>
                  <li>test</li>
                </ul>
                <h3>Clasa a X-a</h3>
                <ul>
                  <li>test</li>
                </ul>
                <h3>Clasa a XI-a</h3>
                <ul>
                  <li>test</li>
                </ul>
                <h3>Diverse</h3>
                <ul>
                  <li>test</li>
                </ul>
            </div>
      </body>
    </div>
  );
}

const toggleSidebar = () => {
  document.getElementById("sidebar").style.transform = "translate(0px)"
}

export default App;
