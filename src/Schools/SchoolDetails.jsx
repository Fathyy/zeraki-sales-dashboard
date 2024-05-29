import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SchoolDetails = () => {
  const { schoolId } = useParams(); // Destructure schoolId directly
  const [school, setSchool] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3030/schoolsDetails")
      .then((res) => {
        const schoolDetails = res.data.find((school) => school.id === parseInt(schoolId));
        setSchool(schoolDetails);
      })
      .catch((err) => console.log(err));
  }, [schoolId]);

  if (!school) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">School Details</h1>
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
    </div>
  );
};

export default SchoolDetails;
