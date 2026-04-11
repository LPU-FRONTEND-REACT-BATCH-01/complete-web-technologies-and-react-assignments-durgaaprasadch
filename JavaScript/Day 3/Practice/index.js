

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

// filter ()
// array.filter((item) => condition)

let nums = [1, 2, 3, 4, 5];

let result = nums.filter(n => n > 2);

console.log(result); // [3, 4, 5]



// -------------------------------------------------------

/*

Spread vs Rest Operators (...)

 Same symbol ...
Different meaning based on where/how you use it

 Spread Operator (EXPANDS )

 Used to expand/unpack values

 Array Example
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]

 It spreads elements out

 Object Example
let user = { name: "Durga", age: 21 };

let newUser = { ...user, city: "Delhi" };

console.log(newUser);

 Copies + adds new data

Copy Array (important)
let copy = [...arr1];

Prevents modifying original array


-----------------------------------------------------------------------------------------------
Rest Operator (COLLECTS )

 Used to gather multiple values into one

Function Example
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

All arguments → collected into nums array

Destructuring Example
let [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(rest); // [3, 4, 5]

 Remaining values go into rest
------------------------
Key Difference
-----------------------
Operator

Spread	Expand	[...arr]
Rest	Collect	(...args)

-----------------------------
Easy Memory Trick

Spread → “open”
Rest → “pack”
-------------------------------------------------------------------------------
*/

// -----------------------------------------------

// Synchronous vs Asynchronous 


