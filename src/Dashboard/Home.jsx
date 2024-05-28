import React, { useState } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import SidebarDashboard from "./SidebarDashboard";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      {/* Sidebar Dashboard */}
      <SidebarDashboard sidebar={sidebar} />
      <section className="home-section">
        {/* Dashboard Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Body content */}
        <div className="home-content">
          <div className="sales-boxes responsive">
            <div className="recent-sales box">
              <div className="container mt-3">
                <div className="row">
                  <div
                    id="export-csv"
                    className="col-md-8 d-flex justify-content-between"
                  >
                    <div id="export-csv" className="col-md-3">
                    
                    </div>
                    <div id="export-csv" className="col-md-3">
                      
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
