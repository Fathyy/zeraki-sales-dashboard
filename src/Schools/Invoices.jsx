import React, { useEffect, useState } from "react";
import "../Dashboard/Dashboard.css";
import SidebarDashboard from "../Dashboard/SidebarDashboard";
import Navbar from "../Dashboard/Navbar";
import axios from "axios";

const Invoices = () => {
  const [sidebar, setSidebar] = useState(false);
  const [invoices, setInvoices] = useState([]);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    axios.get("http://localhost:3030/schoolsDetails")
      .then((response) => {
        const schools = response.data;
        const allInvoices = schools.flatMap((school) =>
          school.invoices.map((invoice) => ({
            ...invoice,
            school_name: school.name,
          }))
        );
        setInvoices(allInvoices);
      })
      .catch((error) => {
        console.error("There was an error fetching the invoices!", error);
      });
  }, []);

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
              <h3>Invoices</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Invoice Number</th>
                    <th>Invoice Item</th>
                    <th>School Name</th>
                    <th>Amount</th>
                    <th>Balance</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.invoice_number}>
                      <td>{invoice.invoice_number}</td>
                      <td>{invoice.item}</td>
                      <td>{invoice.school_name}</td>
                      <td>${invoice.amount.toFixed(2)}</td>
                      <td>${invoice.balance.toFixed(2)}</td>
                      <td>{invoice.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invoices;
