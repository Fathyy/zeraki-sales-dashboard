import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PieAnalytics from '../Dashboard/Piecharts/PieAnalytics'
import PieFinance from '../Dashboard/Piecharts/PieFinance'
import PieTimetable from '../Dashboard/Piecharts/PieTimetable'

const Piecharts = () => {
    const [signupData, setSignupData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3030/signup')
        .then(res => setSignupData(res.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <PieAnalytics data={signupData}/>
        <PieFinance data={signupData}/>
        <PieTimetable data={signupData}/>
    </div>
  )
}

export default Piecharts