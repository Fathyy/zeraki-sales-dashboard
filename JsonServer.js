// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const JsonServer = () => {
//     const [signupData, setSignupData] = useState([])

//     useEffect(() => {
//         axios.get('http://localhost:3030/signup')
//         .then(res => setSignupData(res.data))
//         .catch(err => console.log(err))
//     }, [])
//   return (
//     <div>{signupData.map((data, index) => {
//         return (
//             data.name
//         )
//     }}</div>
//   )
// }

// export default JsonServer