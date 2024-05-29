import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarDashboard from "../Dashboard/SidebarDashboard";
import Navbar from "../Dashboard/Navbar";
import CreateInvoiceModal from "../components/CreateInvoiceModal";
import EditInvoiceModal from "../components/EditInvoiceModal";
// import { MdModeEdit } from "react-icons/md";
// import { FaRegTrashAlt } from "react-icons/fa";

const SchoolDetails = () => {
  const { schoolId } = useParams();
  const [school, setSchool] = useState(null);
  const [error, setError] = useState(null);
  const [sidebar, setSidebar] = useState(false);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/schoolsDetails/${schoolId}`)
      .then((res) => {
        const schoolDetails = res.data;
        if (schoolDetails) {
          setSchool(schoolDetails);
          setInvoices(schoolDetails.invoices);
        } else {
          setError("School not found");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching school details");
      });
  }, [schoolId]);


  const handleSaveInvoice = (newInvoice) => {
    const updatedInvoices = [...invoices, newInvoice];
    setInvoices(updatedInvoices);
  };

  const handleUpdateInvoice = (updatedInvoice) => {
    const updatedInvoices = invoices.map((invoice) =>
      invoice.invoice_number === updatedInvoice.invoice_number ? updatedInvoice : invoice
    );
    setInvoices(updatedInvoices);
    axios
      .patch(`http://localhost:3030/schoolsDetails/${schoolId}`, {
        invoices: updatedInvoices,
      })
      .then((res) => console.log("Invoice updated"))
      .catch((err) => console.error(err));
  };

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

  const handleDeleteInvoice = (invoiceNumber) => {
    const updatedInvoices = invoices.filter(invoice => invoice.invoice_number !== invoiceNumber);
    setInvoices(updatedInvoices);
    axios
      .patch(`http://localhost:3030/schoolsDetails/${schoolId}`, {
        invoices: updatedInvoices,
      })
      .then((res) => console.log("Invoice deleted"))
      .catch((err) => console.error(err));
  };
  

  return (
    <div>
      <SidebarDashboard sidebar={sidebar} />
      <section className="home-section">
        <Navbar toggleSidebar={toggleSidebar} />
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
              <div className="d-flex justify-content-between mt-4">
                <h5>{school.name} Invoices</h5>
                <CreateInvoiceModal
                  schoolId={schoolId}
                  onSave={handleSaveInvoice}
                />
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
                  {invoices.map((invoice, index) => (
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
                        <EditInvoiceModal invoice={invoice} onSave={handleUpdateInvoice}/>
                        <button
                          className="btn btn-danger ml-2"
                          onClick={() => handleDeleteInvoice(invoice.invoice_number)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
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

export default SchoolDetails;
