let a=1,b=6,c=4;
let disc=(b*b)-(4*a*c)
console.log(disc)

if(disc>0){
    console.log("roots are real and unequal")
    let x1=(-b +(Math.sqrt(disc))/(2*a))
    let x2=(-b -(Math.sqrt(disc))/(2*a))
    console.log("the roots x1 and x2 are:",x1 + "  "+x2)
    
}
else if(disc==0){
    console.log("roots are real and equal")
    let x1=-b/(2*a)
    console.log("the roots are "+x1)
}
else if(disc<0){
    console.log("roots are imaginary")
   
}
