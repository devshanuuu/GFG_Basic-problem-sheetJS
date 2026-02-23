let n = 12345;
let sum = 0;
let stringNum = n.toString();

for(i=0; i<stringNum.length; i++){
    sum = sum + Number(stringNum[i])  // Change to number from string
}

console.log("Sum of digits = " + sum);
