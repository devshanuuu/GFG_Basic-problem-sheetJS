let n = 5;
let factorial = 1;

if(n===0){
    console.log("Factorial of 0 is 1");
    }else{
        for(i=1; i<=5; i++){
            factorial = factorial*i
        }
        console.log("Factorial of " + n + " is " + factorial);
        
    }