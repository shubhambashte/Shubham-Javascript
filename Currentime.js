var currentTime= new Date();
var time=currentTime.getHours();
var greeting;
if(time<12){
    greeting = "morning";
}
else if(time<18){
    greeting = "afternoon";
}
else{
    greeting = "evening";
}
console.log("Good",greeting);