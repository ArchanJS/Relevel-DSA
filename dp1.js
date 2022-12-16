// 0 1 1 2 3 5 8 ...

// Recursive
// let n=5;
// var fib=function(n){
//     if(n<=1) return n;
//     console.log(n);
//     return fib(n-1)+fib(n-2);
// }
// console.log(`Op: ${fib(n)}`);

// Memoization
let n=5;
var fib=function(n,dp){
    if(n<=1) return n;
    if(dp[n]!==undefined) return dp[n];
    console.log(n);
    dp[n]=fib(n-1,dp)+fib(n-2,dp);
    return dp[n];
}
let dp={};
console.log(`Op: ${fib(n,dp)}`);