import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SchoolListTable = () => {
  const [schoolsData, setSchoolsData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3030/schools')
    .then(res => {
      setSchoolsData(res.data); 
    })
    .catch(err => console.log(err))
  })
  return (
    <div>
      <h1>List of Schools</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {schoolsData.map((school, index) => (
              <tr key={index}>
                <td>{school.name}</td>
                <td><button className="btn btn-primary">View More</button></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default SchoolListTable