// Fibonacci

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
// let n=5;
// var fib=function(n,dp){
//     if(n<=1) return n;
//     if(dp[n]!==undefined) return dp[n];
//     console.log(n);
//     dp[n]=fib(n-1,dp)+fib(n-2,dp);
//     return dp[n];
// }
// let dp={};
// console.log(`Op: ${fib(n,dp)}`);


// https://leetcode.com/problems/n-th-tribonacci-number/description/

// var solve=function(n,dp){
//     if(n===0) return 0;
//     if(n<=2) return 1;
//     if(dp[n]!==undefined) return dp[n];
//     dp[n]=solve(n-1,dp)+solve(n-2,dp)+solve(n-3,dp);
//     return dp[n];
// }
// var tribonacci = function(n) {
//     let dp={};
//     return solve(n,dp);
// };

// https://leetcode.com/problems/house-robber/description/
var solve=function(nums,n,dp){
    if(n===0) return 0;
    if(dp[n]!==undefined) return dp[n];
    let nonPick=solve(nums,n-1,dp),pick=nums[n-1];
    if(n>2) pick+=solve(nums,n-2,dp);
    dp[n]=Math.max(pick,nonPick);
    return dp[n];
}
var rob = function(nums) {
    let dp={};
    return solve(nums,nums.length,dp);
};