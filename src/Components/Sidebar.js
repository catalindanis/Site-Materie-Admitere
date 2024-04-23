import React from "react";

function Sidebar() {
    return (
        <div class="container m-0 p-0">
            <div className="toggle-btn" onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="sidebar" id="sidebar">
                <div className="row">
                    
                </div>
            </div>
        </div>
    );
  }

  const toggleSidebar = () => {
    document.getElementById("sidebar").style.transform = "translate(0px)"
  }
  
  export default Sidebar;