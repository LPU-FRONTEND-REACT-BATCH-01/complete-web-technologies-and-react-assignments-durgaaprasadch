import React from 'react'

const Food = () => {

    const food1 = "Mango"
    const food2 = "Orange"
    const food3 = "Banana"

  return (
    <div>
       <p><b>Food Items:</b></p>
       <ul>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>{food3.toUpperCase()}</li>
        <li>{food3}</li> 
       </ul>
    </div>
  )
}

export default Food