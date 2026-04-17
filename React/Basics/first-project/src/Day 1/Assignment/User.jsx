import React from 'react'

const User = () => {

  const users = [
    { 
      id: 1, 
      name: "Durga", 
      age: 21, 
      city: { door: 1, colony: "FD" }
    },
    { 
      id: 2, 
      name: "Rahul", 
      age: 23, 
      city: { door: 1, colony: "FD" }
    },
    { 
      id: 3, 
      name: "Ankit", 
      age: 22, 
      city: { door: 1, colony: "FD" }
    }
  ]

  const u1 = users[0]
  const u2 = users[1]
  const u3 = users[2]

  return (
    <>
      <div>
        <h1>{u1.name}</h1>
        <h2>{u1.age}</h2>
        <h3>{u1.city.colony}</h3>
        <h3>{u1.city.door}</h3>
      </div>

      <div>
        <h1>{u2.name}</h1>
        <h2>{u2.age}</h2>
        <h3>{u2.city.colony}</h3>
        <h3>{u2.city.door}</h3>
      </div>

      <div>
        <h1>{u3.name}</h1>
        <h2>{u3.age}</h2>
        <h3>{u3.city.colony}</h3>
        <h3>{u3.city.door}</h3>
      </div>
    </>
  )
}

export default User