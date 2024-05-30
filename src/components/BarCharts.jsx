import axios from "axios";
import React, { useEffect, useState } from "react";
import BarAnalytics from "../Dashboard/BarCharts/BarAnalytics";
import BarFinance from "../Dashboard/BarCharts/BarFinance";
import BarTimetable from "../Dashboard/BarCharts/BarTimetable";

const Piecharts = () => {
  const [signupData, setSignupData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/SignupBar")
      .then((res) => setSignupData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <BarAnalytics data={signupData} />
        </div>
        <div className="col-md-6">
          <BarFinance data={signupData} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <BarTimetable data={signupData} />
        </div>
      </div>
    </>
  );
};

export default Piecharts;
