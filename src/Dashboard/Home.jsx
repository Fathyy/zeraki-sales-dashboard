import React, { useState } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import SidebarDashboard from "./SidebarDashboard";
import { BsCollection } from "react-icons/bs";
import { SiGnuprivacyguard } from "react-icons/si";
import { CiMoneyBill } from "react-icons/ci";
import { GrDocumentPerformance } from "react-icons/gr";

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
                <div className="recent-sales box d-flex justify-content-between">
                    <BsCollection className="card-icon"/>
                  <p>54 Collections Made</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="recent-sales box d-flex justify-content-between">
                    <SiGnuprivacyguard className="card-icon"/>
                  <p>20 School Signups</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="recent-sales box d-flex justify-content-between">
                    <CiMoneyBill className="card-icon"/>
                  <p>30 Total Revenue Collected</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="recent-sales box d-flex justify-content-between">
                    <GrDocumentPerformance className="card-icon"/>
                  <p>10 Bounced cheques</p>
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
