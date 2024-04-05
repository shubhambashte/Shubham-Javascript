const prompt = require("prompt-sync")();
userChoice=parseInt(prompt("enter 0 for rock  1 for Scissor 2 for paper"));
computerChoice=Math.floor(Math.random()*3)
// console.log(computerChoice)

if(computerChoice==userChoice){
    console.log("It's a draw")
}
else if( userChoice==1 &&computerchoice==0){
    console.log("computer win")
}
else if( userChoice==2 &&computerchoice==0){
    console.log("user win")
}
else if( userChoice==0 &&computerchoice==1){
    console.log("user win")
}
else if( userChoice==2 &&computerchoice==1){
    console.log("computer win")
}
else if( userChoice==0 &&computerchoice==2){
    console.log("computer win")
}
else if( userChoice==1 &&computerchoice==2){
    console.log("user win")
}

