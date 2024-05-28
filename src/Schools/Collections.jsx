import React, { useState } from "react";
import '../Dashboard/Dashboard.css'
import SidebarDashboard from "../Dashboard/SidebarDashboard";
import Navbar from "../Dashboard/Navbar";


const Collections = () => {
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
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
