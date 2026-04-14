let a:number = 100;

let s:string = "10";

let b:bigint=10n;
b = 11n;

let c:symbol = Symbol("id");

let d:any="as";

let e:unknown = "Hello";
// ---------------------------------------------------

// Annotations

let age1: number = 25;

let username: string;
username = "Durga";





//Inference
let age = 25;  //// inferred as number

let names = "Durga";   // string
let isActive = true;  // boolean


let arr:number[]= [32,1,1]