
// let names: string = "John";
// let age: number = 25;
// let isActive: boolean = true;
// let numbers: number[] = [1, 2, 3];



// // -----------------------------------------

// let numbers: number[] = [1, 2, 3];   // strict type of number
// let names: string[] = ["Durga", "Raj"];   // strict type of string


// let user: { name: string; age?: number } = {    // ? is for optional
//   name: "Durga"
// };


// // ----------------------------------------------


// // Object Declaration and initilization 





 // Using Type
// type User = {
//   name: string;
//   age: number;
// };

 //let user: User = {
//   name: "Durga",
//   age: 21
// };

// ---------------------------------------


// let user: User = {
//   name: "Durga",
//   age: 21
// };

// interface User {
//   name: string;
//   age: number;
// }

// let user: User = {
//   name: "Durga",
//   age: 21
// };



    // 2. Nested interface
// interface User {
//   name: string;
//   address: {
//     city: string;
//     pincode: number;
//   };
// }
// let user: User = {
//   name: "Durga",
//   address: {
//     city: "Punjab",
//     pincode: 144411
//   }
// };



// interface User {
//   name: string;
//   age: number;
// }

// let user: User = {
  
//   age: 21,
//   name: "Durga"
// };


// console.log(user.age)



// // 


// ..void

// function logMessage(): void {
//   console.log("Hello");
// }


// //never 
// function throwError(msg: string): never {
//   throw new Error(msg);
// }


// Custom inference 
// type n = number;
// let a:n = 44


// union type of string literals. 


// type User = "Admin" | "customer" 

// let a:User = "customer"


// Typing Function Parameters


// function add(a: number, b: number) {
//   return a + b;
// }

// function add(a: number, b: number): number {
//   return a + b;
// }

// ---------------------------------------------------------------------------------

// Using Custom Type in Function


// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// function printProduct(p: Product): void {
//   console.log(p.title);
// }



// ----------------------------------------------------------------

type PaymentOptionsAvailable = "UPI" | "Card" | "COD" | "Net Banking"


function payment(modeOfPayment:PaymentOptionsAvailable,cost:number):string{
     let finalCost:number = 0
     if(modeOfPayment === "UPI")
       {
        finalCost = cost - cost*0.1
    }
    else if(modeOfPayment === "Card"){
        finalCost = cost - cost*0.05
    }
    else if(modeOfPayment === "COD"){
        finalCost= cost+50
    }
    else if(modeOfPayment === "Net Banking"){
        finalCost= cost
    }


    return `You are making this payment through ${modeOfPayment} and the final price is ${finalCost}`
   
}
console.log(payment("COD",500))