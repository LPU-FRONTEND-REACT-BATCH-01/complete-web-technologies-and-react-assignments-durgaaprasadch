let a = 10;        // can change
const b = 20;      // cannot change
var c = 30;        // avoid

a = 15;            // allowed
// b = 25;         // error

console.log("Hello");   // console output
alert("Hello");         // popup



let name = "Durga";
console.log(name);

let isOn = true;
console.log(isOn);

let x;
console.log(x); // undefined


let y = null;
console.log(y);

// --------------------------------------------------------------
let person = {
  name: "Durga",
  age: 21
};

console.log(person.name);


let arr = [1, 2, 3];

console.log(arr[0]); // 1



function greet() {
  console.log("Hello");
}

greet();



console.log(typeof 10);       // number
console.log(typeof "hi");     // string
console.log(typeof true);     // boolean
console.log(typeof undefined);// undefined

console.log(typeof null);     // object (JS bug)