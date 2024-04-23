import React, { useState } from 'react';
import "./App.css";
import "./Style/Title.css"
import "./Style/Sidebar.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Components/Sidebar';

function App() {

  return (
    <div className="App text-bg-light">
      <header>
        <div className="Title">
          <p class="fw-semibold fs-1">Materie admitere UBB</p>
        </div>
      </header>
      <body className="text-bg-light">

      <Sidebar></Sidebar>

      {/* <div className="toggle-btn" onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="sidebar" id="sidebar">

            <div data-bs-theme="dark"> 
                <button type="button" class="btn-close" aria-label="Close">
            </button></div>
            

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
            </div> */}
      </body>
    </div>
  );
}



export default App;
