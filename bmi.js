const prompt =require("prompt-sync")();
let BMI;
let height = (prompt("User height is :"));
let weight = (prompt("User weight is :"));
BMI=weight/(height^2);
console.log(BMI)
if(BMI<18){
    console.log("underweight");
}
else if(BMI>=18 && BMI<=25){
    console.log("Average Weight");
}
else if(BMI>=25 && BMI<=30){
    console.log("Overweight");
}
else if(BMI>=30 && BMI<=35){
    console.log("Obese");
}
else if(BMI>=35 && BMI<=40){
    console.log("Overobese")
}
else{
    console.log("Superobese")
}
