
// rcc -- > Class Based component

// racfe  -- Function Based Component

import React from 'react'

let a = 10
let b =20
const Card = (props) => {
  return (
    <div>
      <h1>{a+b}</h1>
         <h1>{props.variable}</h1>
    </div>
  )
}

export default Card

