// let age = 16;
// var age=18;
function validate(age){
if(age >= 18) {
 console.log('You can vote in the election');
} else {
 console.log('not eligible for voting card');
}
}

const userinput= prompt(parseInt("Enter your age:"))
validate(userinput)
