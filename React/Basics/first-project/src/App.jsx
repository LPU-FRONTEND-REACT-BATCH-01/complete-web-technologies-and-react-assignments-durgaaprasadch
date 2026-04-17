
import Users from "./Day 1/Practice/Users"


import Practice from "./Day 1/Off-Class/Practice"
import Header from "./Day 1/Off-Class/Header"
import Food from "./Day 1/Off-Class/Food"
import Footer from "./Day 1/Off-Class/Footer"
import User from "./Day 1/Assignment/User"
import Card from "./Day 1/Off-Class/Card"
import Button from "./Day 1/Off-Class/Button"
import Student from "./Day 1/Off-Class/Student"

import bulb_on from "./assets/bulb_on.png"
import bulb_off from "./assets/bulb_off.png"


// const App = () => {

//   return (
//     <>
//       {/* <Users />
//       <Card/> 
//       <Practice/> */}
      
//       {/* <Header/>
//       <Food/>
//       <Footer/> */}
//       {/* <User/> */}
// {/* 
//       <Card/>
//       <Card/> */}

//       {/* <Button/> */}

//       <Student name="Hey" age={21} isStudent={true}  />
//       <Student name="Durga" age={55} isStudent={false}  />
//       <Student name="Hi" age={1} isStudent={false}  />
//       <Student />

//     </>
//   )
// }


// import React, { useState } from 'react'

// const App = () => {

//   let [state,setState] = useState(0)

//   const [count,setCount] = useState(0)

//   let normal = 0

//   let handleNormal = () =>{
//     normal+=1
//   }
//   let handleState = () =>{
//     setState(state++)
//   }

//   let handleCount = () =>{
//     setCount(prev=>prev+1)
//   }

//   const [inputType, setInputType] = useState("password")

//   const handleShow = () => {
//     setInputType("text")
//   }

//   const handleHide = () => {
//     setInputType("password")
//   }

//   const handleShowHide = () =>{
    
//       if(inputType === "text"){
//         setInputType("password")
//   }   else {
//         setInputType("text")
//     }
//   }

//   const handleToggle = () => {
//    setInputType(prev => prev === "password" ? "text" : "password")
//   }

// // }
// const App = () => {

//   const [input, setInput] = useState("off")

//   const handleOnOff = () => {
//     setInput(prev => prev === "off" ? "on" : "off")
//   }





//   return (
//     <div>

//       {/* <h1>This is Normal Variable{normal}</h1>
//       <h1>This is State Variable{state}</h1> */}
//       {/* <h1>This is State Count{count}</h1> */}

//       {/* <button onClick={handleNormal}>Normal</button>
//       <button onClick={handleState}>State</button>
//       <button onClick={handleCount}>Count</button> */}
// {/* 
//       <input type={inputType} />
//       <button onClick={handleShow}>Show</button>
//       <button onClick={handleHide}>Hide</button>


//       <button onClick={handleShowHide}>Hide/Show</button>



//       <button onClick={handleToggle}>
//       {inputType === "password" ? "Show" : "Hide"}
//       </button>


//       <i onClick={handleToggle}>
//       {inputType === "password" ? 
//        (<i className="fa-sharp fa-solid fa-eye"></i>) 
//       : (<i className="fa-solid fa-eye-slash"></i>)}
//       </i>
//  */}


   
// {/*     
//       <button onClick={handleOnOff}>
//         {input === "on" ? (
//           <img src={bulb_on} alt="Bulb On" />
//         ) : (
//           <img src={bulb_off} alt="Bulb Off" />
//         )}
//       </button> */}  
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'

const App = () => {
  useEffect(() => {
  console.log("Component mounted")
}, [])

 const [count1,setCount1] = useState(0)
const [count2,setCount2] =useState(0)

 let handleCount1 = () =>{
   setCount1(prev=>prev+1)
 }

 let handleCount2 = () =>{
  setCount2(prev=>prev+1)
 }


  return (
    <div>

      <h1>this is button 1 {count1}</h1>
      <h1>this is button 2 {count2}</h1>

      <button onClick={handleCount1}>Button 1</button>
      <button onClick={handleCount2}>Button 2</button>


    </div>
  )
}















export default App

