let users = {
    id:1,
    username:"Nick",
    userLocation:{
        city:"Jalandhar",
        state:"Punjab"
    },
    phone:"74185274182",
    skills:{
        frontend:["react","HTML","CSS"],
        backend:["Java","Spring Boot"]
    }

}
let { id, username,phone,userLocation: { city, state },
skills: {
    frontend: [f1, f2, f3],
    backend: [b1, b2]}
} = users;


// let { skills } = users;
// let { frontend, backend } = skills;

// let [s1, s2, s3] = frontend;

// console.log(s1)

console.log(id, username, city, state, f1);
