import React, { useEffect, useState } from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="d-flex justify-content-between">
      <div className="sidebar-button" onClick={toggleSidebar}>
        <i className="bx bx-menu"></i>
        <p className="dashboard">Dashboard</p>
        </div>
    </nav>
  );
};

export default Navbar;
