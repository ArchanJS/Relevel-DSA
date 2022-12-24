// https://leetcode.com/problems/climbing-stairs/description/

var solve=function(n,dp){
    if(n===0) return 1;
    if(dp[n]!==undefined)  return dp[n];
    let p1=solve(n-1,dp),p2=0;
    if(n>1) p2=solve(n-2,dp);
    dp[n]=p1+p2;
    return dp[n]; 
}
var climbStairs = function(n) {
    return solve(n,{});
};

// https://leetcode.com/problems/unique-paths/description/

var solve=function(n,m,dp){
    if(n===1&&m===1) return 1;
    var key=n.toString()+" "+m.toString();
    if(dp[key]!==undefined) return dp[key];
    let p1=0,p2=0;
    if(n>1) p1=solve(n-1,m,dp);
    if(m>1) p2=solve(n,m-1,dp);
    dp[key]=p1+p2;
    return dp[key];
}
var uniquePaths = function(n, m) {
    return solve(n,m,{});
};