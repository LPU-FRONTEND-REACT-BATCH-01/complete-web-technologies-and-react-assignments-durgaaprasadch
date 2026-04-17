import React from "react"

const Users = (props) => {
  const users = [
    { id: 1,
      name: "Durga", 
      age: 21, 
      city: "Hyd" 
    },
    { id: 2, 
      name: "Rahul", 
      age: 23, 
      city: "Delhi" 
    },
    { id: 3, 
      name: "Ankit", 
      age: 22, 
      city: "Mumbai"
     }
  ]

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>
        
          
        </div>
      ))}
    </div>
  )
}

export default Users