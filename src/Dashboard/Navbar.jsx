import { FaBars } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="d-flex justify-content-between">
      <div className="sidebar-button" onClick={toggleSidebar}>
        <i className="bx bx-menu"></i>
        <FaBars className="bar-icon"/>
        <p className="dashboard">Welcome</p>
        </div>
    </nav>
  );
};

export default Navbar;
