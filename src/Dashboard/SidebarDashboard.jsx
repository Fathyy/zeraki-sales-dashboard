import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

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
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo_name fw-bold">GreenLead</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/esg">
            <i className="bx bxs-briefcase-alt-2"></i>
            <span className="links_name">ESG Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/carbon-projects">
            <i className="bx bxs-edit-alt"></i>
            <span className="links_name">Carbon Projects</span>
          </Link>
        </li>
            <li>
              <Link to="/settings">
                <i className="bx bxs-pie-chart-alt-2"></i>
                <span className="links_name">Settings</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="bx bx-log-out fw-bold fs-3"></i>
                <span className="links_name fw-bold">
                  Logout
                </span>
              </Link>
            </li>
      </ul>
    </div>
  );
};

export default SidebarDashboard;
