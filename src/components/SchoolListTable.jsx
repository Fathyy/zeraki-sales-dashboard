import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SchoolListTable = () => {
  const [schoolsData, setSchoolsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3030/schools")
      .then((res) => {
        setSchoolsData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleViewMore = (schoolId) => {
    navigate(`/school/${schoolId}`);
  };

  return (
    <div>
      <h5 className="mb-4">List of Schools</h5>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-responsive">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {schoolsData.map((school, index) => (
              <tr key={index}>
                <td>{school.name}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewMore(school.id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolListTable;
