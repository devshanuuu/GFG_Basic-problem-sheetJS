let n = 4839;

let stringnum = n.toString(); // convert number to string
let count = 0;

for(i=1; i<=stringnum.length; i++){
    count++;
}
console.log("Number of digits in " + n + " = " + count);
