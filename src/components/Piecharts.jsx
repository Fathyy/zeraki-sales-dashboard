import axios from "axios";
import React, { useEffect, useState } from "react";
import PieAnalytics from "../Dashboard/Piecharts/PieAnalytics";
import PieFinance from "../Dashboard/Piecharts/PieFinance";
import PieTimetable from "../Dashboard/Piecharts/PieTimetable";

const Piecharts = () => {
  const [signupData, setSignupData] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-server-jq8z.onrender.com/signup")
      .then((res) => setSignupData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <PieAnalytics data={signupData} />
        </div>
        <div className="col-md-6">
          <PieFinance data={signupData} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <PieTimetable data={signupData} />
        </div>
      </div>

    </>
  );
};

export default Piecharts;
