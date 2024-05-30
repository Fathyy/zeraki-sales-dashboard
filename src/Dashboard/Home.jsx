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
  const [totalSignups, setTotalSignups] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCollections = await axios.get("https://json-server-jq8z.onrender.com/schoolsDetails");
        const dataCollections = responseCollections.data;
        console.log("Data fetched:", dataCollections);
        
        // If data itself is the schoolsDetails array
        let total = 0;
        dataCollections.forEach(school => {
          total += school.collections.length;
        });
        setTotalCollections(total);

        const responseSignups = await axios.get("https://json-server-jq8z.onrender.com/signup");
        const dataSignups = responseSignups.data;

        // Calculate total signups
        if (dataSignups) {
          let total = 0;
          dataSignups.forEach(signup => {
            total += signup.Actual;
          });
          setTotalSignups(total);
        } else {
          console.error('signup not found in the response data');
        }

        // Calculate total revenue
        if (dataCollections) {
          let total = 0;
          dataCollections.forEach(school => {
            school.invoices.forEach(invoice => {
              total += invoice.paid_amount;
            });
          });
          setTotalRevenue(total);
        } else {
          console.error('schoolsDetails not found in the response data');
        }



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
                <div className="col-lg-3 col-md-6 mb-md-4 mb-4">
                  <div className="recent-sales box d-flex justify-content-between gap-3">
                    <BsCollection className="card-icon" />
                    <p className="card-text">{totalCollections} Collections Made</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-md-4 mb-4">
                  <div className="recent-sales box d-flex justify-content-between gap-3">
                    <SiGnuprivacyguard className="card-icon" />
                    <p className="card-text">{totalSignups} School Signups till date</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-md-4 mb-4">
                  <div className="recent-sales box d-flex justify-content-between gap-3">
                    <CiMoneyBill className="card-icon" />
                    <p className="card-text">{totalRevenue} Total Revenue Collected</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-md-4 mb-4">
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
              <div className="col-lg-6">
                <Piecharts />
              </div>
              <div className="col-lg-6">
                <BarCharts />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
