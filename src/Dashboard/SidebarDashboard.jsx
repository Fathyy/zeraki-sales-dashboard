import React from "react";
import "./Dashboard.css";
import  logo from '../assets/z-logo.jpg'

const SidebarDashboard = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <div className="logo-details" id="greenwatch-logo">
        <img
          src={logo}
          alt="logo"
          className="bi me-2"
          width="45"
          height="45"
        />
        <a href="/" style={{ textDecoration: "none" }}>
          <span className="logo_name fw-bold">Zeraki</span>
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/esg">
            <i className="bx bxs-briefcase-alt-2"></i>
            <span className="links_name">ESG Reports</span>
          </a>
        </li>
        <li>
          <a href="/carbon-projects">
            <i className="bx bxs-edit-alt"></i>
            <span className="links_name">Carbon Projects</span>
          </a>
        </li>
            <li>
              <a href="/settings">
                <i className="bx bxs-pie-chart-alt-2"></i>
                <span className="links_name">Settings</span>
              </a>
            </li>
            <li>
              <a href="/#">
                <i className="bx bx-log-out fw-bold fs-3"></i>
                <span className="links_name fw-bold">
                  Logout
                </span>
              </a>
            </li>
      </ul>
    </div>
  );
};

export default SidebarDashboard;
