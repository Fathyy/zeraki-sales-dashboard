import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import SidebarDashboard from "./SidebarDashboard";
import { BsCollection } from "react-icons/bs";
import { SiGnuprivacyguard } from "react-icons/si";
import { CiMoneyBill } from "react-icons/ci";
import { GrDocumentPerformance } from "react-icons/gr";
import Piecharts from "../components/Piecharts";
import BarCharts from "../components/BarCharts";
import axios from "axios";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const [totalCollections, setTotalCollections] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3030/schoolsDetails");
        const data = response.data;
        
        // Calculate total collections
        const total = data.schoolsDetails.reduce(
          (total, school) => total + school.collections.length, 
          0
        );
        setTotalCollections(total);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="recent-sales box d-flex justify-content-between gap-3">
                    <BsCollection className="card-icon" />
                    <p className="card-text">{totalCollections} Collections Made</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="recent-sales box d-flex justify-content-between gap-3">
                    <SiGnuprivacyguard className="card-icon" />
                    <p className="card-text">20 School Signups till date</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="recent-sales box d-flex justify-content-between gap-3">
                    <CiMoneyBill className="card-icon" />
                    <p className="card-text">30 Total Revenue Collected</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="recent-sales box d-flex justify-content-between gap-3">
                    <GrDocumentPerformance className="card-icon" />
                    <p className="card-text">10 Bounced cheques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* piecharts */}
            <div className="row mt-5">
              <div className="col-md-6">
                <Piecharts />
              </div>
              <div className="col-md-6">
                <BarCharts />
              </div>
            </div>
          </div>

          {/* Invoices */}
          <div className="row"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
