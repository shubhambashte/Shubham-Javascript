// const person =["Abhinav","Shubham","Rahul","Ojas","Omkar","Kunal"];
// person.sort();
// console.log(person)

// const person =["Abhinav","Shubham","Rahul","Ojas","Omkar","Kunal"];
// person.reverse();
// console.log(person)

// const person =["Abhinav","Shubham","Rahul","Ojas","Omkar","Kunal"];
// const sorted = person.toSorted();
// console.log(sorted)


// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b})
// console.log(points)


// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b - a});
// console.log(points)
 
const value = [40, 100, 1, 5, 25, 10];
function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }
  console.log(myArrayMax(value))




  const values = [40, 100, 1, 5, 25, 10];
function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }
  console.log(myArrayMin(values))