let user_Data = {
    id:1,
    name:'Durga',
    city:'Hyd'
}
user_Data.age = '12';

// Object.freeze(user_Data)  --> no add, no update, no delete
// Object.seal(user_Data)  --> can update, but cannot add/delete

console.log(user_Data)
console.log(user_Data.city)
console.log(user_Data.id)
console.log(user_Data.name)
console.log(user_Data.age)

let keys = Object.keys(user_Data)
console.log(keys)

let values = Object.values(user_Data)
console.log(values)

let pairs = Object.entries(user_Data)
console.log(pairs)