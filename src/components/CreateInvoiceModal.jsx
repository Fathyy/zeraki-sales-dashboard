import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Dashboard/Dashboard.css'
const CreateInvoiceModal = ({ schoolId, onSave }) => {
  const [invoice, setInvoice] = useState({
    item: "Analytics",
    creation_date: "",
    due_date: "",
    amount: "",
    paid_amount: "",
    status: "Pending",
    balance: 0,
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      balance: prevInvoice.amount - prevInvoice.paid_amount,
    }));
  }, [invoice.amount, invoice.paid_amount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "amount" || name === "paid_amount" ? parseFloat(value) : value;
    setInvoice({ ...invoice, [name]: parsedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate invoice number
    const invoiceNumber = `INV-${(Math.floor(Math.random() * 1000) + 1)
      .toString()
      .padStart(3, "0")}`; // Example: "INV-001"

    const newInvoice = {
      ...invoice,
      invoice_number: invoiceNumber,
      balance: invoice.amount - invoice.paid_amount,
    };
    axios
      .get(`https://json-server-jq8z.onrender.com/schoolsDetails/${schoolId}`)
      .then((res) => {
        const school = res.data;
        const updatedInvoices = [...school.invoices, newInvoice];

        axios
          .patch(`https://json-server-jq8z.onrender.com/schoolsDetails/${schoolId}`, {
            invoices: updatedInvoices,
          })
          .then((res) => {
            onSave(newInvoice);
            // Close modal
            document.getElementById("createInvoiceModal").style.display =
              "none";
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <button
        className="highlight-button mb-4 btn-sm"
        onClick={() => setShowModal(true)}
      >
        Create Invoice
      </button>
      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Create Invoice</h2>
                <button
                  type="button"
                  className="close"
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                  }}
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true" style={{ fontSize: "25px" }}>
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Item</label>
                    <select
                      name="item"
                      value={invoice.item}
                      onChange={handleChange}
                      required
                      class="form-select"
                    >
                      <option value="Analytics">Analytics</option>
                      <option value="Finance">Finance</option>
                      <option value="Timetable">Timetable</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label>Creation Date</label>
                    <input
                      type="date"
                      name="creation_date"
                      value={invoice.creation_date}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Due Date</label>
                    <input
                      type="date"
                      name="due_date"
                      value={invoice.due_date}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Amount</label>
                    <input
                      type="number"
                      name="amount"
                      value={invoice.amount}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Paid Amount</label>
                    <input
                      type="number"
                      name="paid_amount"
                      value={invoice.paid_amount}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Balance</label>
                    <input
                      type="number"
                      name="balance"
                      value={invoice.amount - invoice.paid_amount}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Status</label>
                    <select
                      name="status"
                      value={invoice.status}
                      onChange={handleChange}
                      class="form-select"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Create Invoice
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateInvoiceModal;
