import React, { useState } from "react";

const EditInvoiceModal = ({ invoice, onSave }) => {
  const [editedInvoice, setEditedInvoice] = useState({ ...invoice });
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInvoice({ ...editedInvoice, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedInvoice);
    closeModal();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        <i className="fa-solid fa-pen"></i>
      </button>

      {modalOpen && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Invoice</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Item</label>
                    <select
                      name="item"
                      value={editedInvoice.item}
                      onChange={handleChange}
                      className="form-control"
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
                      value={editedInvoice.creation_date}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Due Date</label>
                    <input
                      type="date"
                      name="due_date"
                      value={editedInvoice.due_date}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Amount</label>
                    <input
                      type="number"
                      name="amount"
                      value={editedInvoice.amount}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Paid Amount</label>
                    <input
                      type="number"
                      name="paid_amount"
                      value={editedInvoice.paid_amount}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Status</label>
                    <select
                      name="status"
                      value={editedInvoice.status}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
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

export default EditInvoiceModal;
