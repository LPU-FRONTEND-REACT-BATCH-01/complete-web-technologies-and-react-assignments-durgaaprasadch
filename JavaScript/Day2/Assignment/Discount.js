let cost = Number(prompt("Enter Cost:"))
final_price=0

if(cost<2000 ){
    console.log("You Got No Discount And Your Final Price is "+cost)}
 else if(cost>=2000 && cost <6000){
    final_price = cost-cost*0.15;
    console.log("You Got a Discount of 15% And Your Final Price is "+final_price)
}
else if(cost>=6000){
    final_price = cost-cost*0.25;
    console.log("You Got a Discount of 25% And Your Final Price is "+final_price)
}
