import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarDashboard from "../Dashboard/SidebarDashboard";
import Navbar from "../Dashboard/Navbar";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const SchoolDetails = () => {
  const { schoolId } = useParams();
  const [school, setSchool] = useState(null);
  const [error, setError] = useState(null);

  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3030/schoolsDetails")
      .then((res) => {
        const schoolDetails = res.data.find(
          (school) => school.id === parseInt(schoolId)
        );
        if (schoolDetails) {
          setSchool(schoolDetails);
        } else {
          setError("School not found");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching school details");
      });
  }, [schoolId]);

  if (error) {
    return (
      <div className="container mt-5">
        <h1 className="mb-4">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!school) {
    return (
      <div className="container mt-5">
        <h1 className="mb-4">Loading...</h1>
      </div>
    );
  }

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <SidebarDashboard sidebar={sidebar} />
      <section className="home-section">
        {/* Dashboard Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Body content */}
        <div className="home-content">
          <div className="sales-boxes responsive">
            <div className="container">
              <h5 className="mb-4">{school.name} Details</h5>
              <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Product</th>
                    <th>County</th>
                    <th>Registration Date</th>
                    <th>Contact Information</th>
                    <th>School Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{school.name}</td>
                    <td>{school.type}</td>
                    <td>{school.product}</td>
                    <td>{school.county}</td>
                    <td>{school.registration_date}</td>
                    <td>
                      Email: {school.contact_info.email}
                      <br />
                      Phone: {school.contact_info.phone}
                    </td>
                    <td>${school.school_balance.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>

              {/* Invoices for a particular school */}
              <div className="mt-5">
                <div className="d-flex justify-content-between">
                  <h5 className="mb-4">{school.name} Invoices</h5>
                  <button className="btn btn-primary btn-sm mb-3">
                    Create Invoice
                  </button>
                </div>
                <table className="table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>No</th>
                      <th>Item</th>
                      <th>Creation Date</th>
                      <th>Due Date</th>
                      <th>Amount</th>
                      <th>Paid Amount</th>
                      <th>Balance</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {school.invoices.map((invoice, index) => (
                      <tr key={index}>
                        <td>{invoice.invoice_number}</td>
                        <td>{invoice.item}</td>
                        <td>{invoice.creation_date}</td>
                        <td>{invoice.due_date}</td>
                        <td>${invoice.amount.toFixed(2)}</td>
                        <td>${invoice.paid_amount.toFixed(2)}</td>
                        <td>${invoice.balance.toFixed(2)}</td>
                        <td>{invoice.status}</td>
                        <td>
                            <FaRegTrashAlt/>
                            <CiEdit style={{marginLeft:'8px'}}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolDetails;
