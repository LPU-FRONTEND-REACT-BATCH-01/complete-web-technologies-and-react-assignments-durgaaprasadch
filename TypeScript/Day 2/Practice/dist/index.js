"use strict";
// let names: string = "John";
// let age: number = 25;
// let isActive: boolean = true;
// let numbers: number[] = [1, 2, 3];
function payment(modeOfPayment, cost) {
    let finalCost = 0;
    if (modeOfPayment === "UPI") {
        finalCost = cost - cost * 0.1;
    }
    else if (modeOfPayment === "Card") {
        finalCost = cost - cost * 0.05;
    }
    else if (modeOfPayment === "COD") {
        finalCost = cost + 50;
    }
    else if (modeOfPayment === "Net Banking") {
        finalCost = cost;
    }
    return `You are making this payment through ${modeOfPayment} and the final price is ${finalCost}`;
}
console.log(payment("COD", 500));
