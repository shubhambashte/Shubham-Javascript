const time=newDate().getHours();
let greeting;
if(time<10){
    greeting="Good Morning";
}
else if(time<20){
    greeting="Good day";
}
else{
    greeting="Good Evening";
}
console.log(greeting)





let percentage=91;
let grade;
if(percentage>90){
    grade="A+"
}
else if(percentage>80){
    grade="A"
}
else if(percentage>70){
    grade="B+"
}
else if(percentage>60){
    grade="B"
}
else if(percentage>50){
    grade="C"
}
else if(percentage>40){
    grade="D"
}
else{
    console.log(fail)
}
console.log("yours score",grade)