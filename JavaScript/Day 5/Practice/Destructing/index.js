let arr = [21,3,55,5]

// let a = arr[0]

// console.log(a)


let  [a,b,c] = arr
console.log(a,b,c)


let users = {
    id:1,
    username:"Nick",
    userLocation:{
        city:"Jalandhar",
        state:"Punjab"
    }
}
let {username,id,userLocation} =users

console.log(id,username,userLocation)