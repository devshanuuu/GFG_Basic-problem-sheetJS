let a = 40;
let b = 22;
let c = 41;


let largest;

if (a >= b && a >= c) {
  largest = a;
} 
else if (b >= a && b >= c) {
  largest = b;
} 
else {
  largest = c;
}

console.log("Largest number is " + largest);