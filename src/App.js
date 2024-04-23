import React, { useState } from 'react';
import "./App.css";
import "./Style/Title.css"
import "./Style/Sidebar.css"

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <header>
        <div className="Title">
          <h1>Site Materie Admitere UBB</h1>
        </div>
      </header>
      <body>
            <div className="sidebar">
              <h2>Meniu</h2>
                <ul>
                  <li>Clasa a IX-a</li>
                  <li>Clasa a X-a</li>
                  <li>Clasa a XI-a</li>
                </ul>
            </div>
      </body>
    </div>
  );
}

export default App;
