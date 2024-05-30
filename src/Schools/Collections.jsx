import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Dashboard/Dashboard.css";
import SidebarDashboard from "../Dashboard/SidebarDashboard";
import Navbar from "../Dashboard/Navbar";

const Collections = () => {
  const [sidebar, setSidebar] = useState(false);
  const [collections, setCollections] = useState([]);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    // Fetch all school details
    axios
      .get(`http://localhost:3030/schoolsDetails`)
      .then((response) => {
        const schools = response.data;
        // Extract all collections from the schools data
        const allCollections = schools.reduce((acc, school) => {
          return acc.concat(school.collections || []);
        }, []);
        setCollections(allCollections);
      })
      .catch((error) => {
        console.error("There was an error fetching the collections!", error);
      });
  }, []);

  const handleStatusChange = (collectionNumber, newStatus) => {
    const updatedCollections = collections.map((collection) => {
      if (collection.collection_number === collectionNumber) {
        return { ...collection, status: newStatus };
      }
      return collection;
    });

    setCollections(updatedCollections);

    // Find the school and update the server with the new collections array
    const collectionToUpdate = collections.find(
      (c) => c.collection_number === collectionNumber
    );
    if (collectionToUpdate) {
      axios.get(`http://localhost:3030/schoolsDetails`).then((response) => {
        const schools = response.data;
        const school = schools.find((s) =>
          s.collections.some((c) => c.collection_number === collectionNumber)
        );
        if (school) {
          const updatedSchoolCollections = school.collections.map((c) =>
            c.collection_number === collectionNumber
              ? { ...c, status: newStatus }
              : c
          );
          axios
            .patch(`http://localhost:3030/schoolsDetails/${school.id}`, {
              collections: updatedSchoolCollections,
            })
            .then((res) => console.log("Collection status updated"))
            .catch((err) => console.error(err));
        }
      });
    }
  };

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
            <h3>All Collections</h3>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Invoice Number</th>
                      <th>Collection Number</th>
                      <th>Date of Collection</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collections.map((collection) => (
                      <tr key={collection.collection_number}>
                        <td>{collection.invoice_number}</td>
                        <td>{collection.collection_number}</td>
                        <td>{collection.date_of_collection}</td>
                        <td>{collection.status}</td>
                        <td>${collection.amount.toFixed(2)}</td>
                        <td>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() =>
                              handleStatusChange(
                                collection.collection_number,
                                "Valid"
                              )
                            }
                          >
                            Mark as Valid
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              handleStatusChange(
                                collection.collection_number,
                                "Bounced"
                              )
                            }
                          >
                            Mark as Bounced
                          </button>
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

export default Collections;
