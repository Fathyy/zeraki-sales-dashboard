import React from "react";
import "./Dashboard.css";

const SidebarDashboard = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <div className="logo-details" id="greenwatch-logo">
        <img
          src=""
          alt=""
          className="bi me-2"
          width="45"
          height="45"
          role="img"
        />
        <a href="/" style={{ textDecoration: "none" }}>
          <span className="logo_name fw-bold">GreenLead</span>
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
