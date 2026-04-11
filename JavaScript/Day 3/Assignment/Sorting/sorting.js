let cartData = [
    {
        id:1,
        name:"Watch",
        price:2999,
        quantity:2
    },
    {
        id:2,
        name:"Shoes",
        price:499,
        quantity:2
    },
    {
        id:3,
        name:"Shirt",
        price:799,
        quantity:2
    },
    {
        id:4,
        name:"Pant",
        price:899,
        quantity:3
    },
    {
        id:5,
        name:"Bag",
        price:199,
        quantity:1
    }
]
console.log("Sort By Price")


console.log(cartData.sort((a,b)=>a.price-b.price))

let cartData1 = [
    {
        id:1,
        name:"Watch",
        price:2999,
        quantity:2
    },
    {
        id:2,
        name:"Shoes",
        price:499,
        quantity:2
    },
    {
        id:3,
        name:"Shirt",
        price:799,
        quantity:2
    },
    {
        id:4,
        name:"Pant",
        price:899,
        quantity:3
    },
    {
        id:5,
        name:"Bag",
        price:199,
        quantity:1
    }
]
console.log("Sort By Name")
console.log(cartData1.sort((a, b) => a.name.localeCompare(b.name)))

