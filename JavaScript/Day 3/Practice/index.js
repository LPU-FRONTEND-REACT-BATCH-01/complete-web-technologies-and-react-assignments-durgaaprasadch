

// let array = [1,2,3,4]
// let result = array.reduce((prev,current)=>{
//     return prev+current
// })

// console.log(result)


//--------------------
//------------------------------------------

// let arr = [1,2,3,4]
// arr.map((value,index)=>{
//     console.log(value+index)
// })


// let cartData = [
//     {
//         id:1,
//         name:"Watch",
//         price:2999,
//         quantity:2
//     },
//     {
//         id:2,
//         name:"Shoes",
//         price:499,
//         quantity:2
//     },
//     {
//         id:3,
//         name:"Shirt",
//         price:799,
//         quantity:2
//     }
// ]

// let totalValue = cartData.reduce((initial_price,current_price)=>{
//     return initial_price+(current_price.price * current_price.quantity)
// },0)



// let totalValue = cartData.reduce(
//     (total, item) => total + item.price * item.quantity
//     ,0);

// console.log(totalValue)



// ------------------------------sorting

// Sorting

// let arr = [1,25,0.55,88,4,26]


// arr.sort((a,b)=>a-b)  // ascending 
// console.log(arr)


// arr.sort((a,b)=>b-a) // descending

// console.log(arr)


// String Sorting

// let arr = ["Apple","Zoo","Jack","king","Ball"]
// console.log(arr.sort())

// Based on ASCII values its sorting the 'k' having 107 so its last here 





// let arr1 = ["Apple","Zoo","Jack","king","Ball"]
// console.log(arr1.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())));
// Converts both strings to lowercase
// Then compares → case-insensitive sort




// let arr1 = ["Apple","Zoo","Jack","king","Ball"]
// console.log(arr.sort((a, b) => a.localeCompare(b)))
// Direct comparison using original strings
// Still considers case differences



// -------------------------------------------------------