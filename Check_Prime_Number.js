let n = 17;
let isPrime = true;

if(n<2){
    isPrime = false; // number less than 2 are not prime
}
 else{
    for(i=2; i<n; i++){
        if(n%i === 0){
            isPrime = false;
            break;
        }
    }
 }

 if(isPrime){
    console.log(n + " is a prime number");
 }

 else{
    console.log(n + " is not a prime number");
    
 }