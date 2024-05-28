import React from "react";
import "./Dashboard.css";
import logo from "../assets/z-logo.jpg";
import { Link } from "react-router-dom";

const SidebarDashboard = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <div className="logo-details" id="greenwatch-logo">
        <img src={logo} alt="logo" className="bi me-2" width="45" height="45" />
        <a href="/" style={{ textDecoration: "none" }}>
          <span className="logo_name fw-bold">Zeraki</span>
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <i className="bx bxs-briefcase-alt-2"></i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/school">
            <i className="bx bxs-briefcase-alt-2"></i>
            <span className="links_name">Schools</span>
          </Link>
        </li>
        <li>
          <Link to="/invoices">
            <i className="bx bxs-briefcase-alt-2"></i>
            <span className="links_name">Invoices</span>
          </Link>
        </li>
        <li>
          <Link to="/collections">
            <i className="bx bxs-briefcase-alt-2"></i>
            <span className="links_name">Collections</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarDashboard;
