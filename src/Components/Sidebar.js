import React from "react";

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
                    <button type="button" className="btn-close" aria-label="Close" onClick={closeSidebar}></button>
                </div>
                <div className="row">
                    
                </div>
            </div>
        </div>
    );
  }

  const toggleSidebar = () => {
    document.getElementById("sidebar").style.transform = "translate(0px)"
  }

  const closeSidebar = () => {
    document.getElementById("sidebar").style.transform = "translate(-250px)"
  }
  export default Sidebar;