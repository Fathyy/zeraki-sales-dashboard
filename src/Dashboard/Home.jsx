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
            <div className="row">
              <div className="col-md-3">
                <div className="recent-sales box">
                  <p>Collections</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="recent-sales box">
                  <p>Signups</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="recent-sales box">
                  <p>Total Revenue</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="recent-sales box">
                  <p>Bounced cheques</p>
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
