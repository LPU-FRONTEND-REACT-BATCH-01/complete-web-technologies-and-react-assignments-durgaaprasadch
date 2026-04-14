"use strict";
let a = true;
// let a:unknown = 100
//let a:unknown ="qwerty"
if (typeof a === "string") {
    const result = a.charAt(0).toUpperCase() + a.slice(1);
    console.log(result);
}
else if (typeof a === "number") {
    console.log(a + 100);
}
else if (typeof a === "boolean") {
    console.log(!a);
}
