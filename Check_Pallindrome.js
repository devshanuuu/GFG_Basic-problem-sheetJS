function isPallindrome(str) {
    let reversed = "";

    for(i=str.length - 1; i>=0; i--) {
        reversed = reversed + str[i];
    }
    return str === reversed;
}

console.log(isPallindrome("house"));
console.log(isPallindrome("madam"));

