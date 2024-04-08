// first 200 unit free
//next 300 unit 5 per unit
//above 500 unit - 10 per unit
 
// const prompt=require("prompt-sync")();
let lightunit=(prompt("Enter your light unit: "));
let lightbill;

if(lightunit<200){
    lightbill=0;
    console.log("light unit"+lightbill)
}
else if(lightunit<200 && lightunit<500){
    lightbill=(lightunit*5)-200;
    console.log("light unit:"+lightbill)
}
else if(lightunit>500){
    lightbill=(lightunit-500)*10+1500;
    console.log("light unit:"+lightbill)
}
