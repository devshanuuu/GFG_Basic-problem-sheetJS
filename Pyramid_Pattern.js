let n = 5; 

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= n - i; j++) { // for printing spaces
    row += " ";
  }

  for (let k = 1; k <= (2 * i - 1); k++) { // for printing stars
    row += "*";
  }

  console.log(row);
}