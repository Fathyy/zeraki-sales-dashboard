import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import SidebarDashboard from "../Dashboard/SidebarDashboard";
import Navbar from "../Dashboard/Navbar";
import SchoolListTable from "../components/SchoolListTable";
import { Outlet } from "react-router-dom";

const Schools = () => {
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
            <div className="container mt-5">
              <div className="row">
                <SchoolListTable />
                <Outlet/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schools;
