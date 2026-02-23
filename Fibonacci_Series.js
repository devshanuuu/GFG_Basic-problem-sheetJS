let n = 10;

let first = 0;
let second = 1;

for(i=1; i<=n; i++){
   console.log(first);

   let next = first + second; //calculate next term
   first = second;
   second = next;
   
}