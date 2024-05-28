import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BarAnalytics from '../Dashboard/BarCharts/BarAnalytics'
import BarFinance from '../Dashboard/BarCharts/BarFinance'
import BarTimetable from '../Dashboard/BarCharts/BarTimetable'

const Piecharts = () => {
    const [signupData, setSignupData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3030/SignupBar')
        .then(res => setSignupData(res.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <BarAnalytics data={signupData}/>
        <BarFinance data={signupData}/>
        <BarTimetable data={signupData}/>
    </div>
  )
}

export default Piecharts