// https://leetcode.com/problems/minimum-falling-path-sum/description/

// var solve=function(mat,n,m,dp){
//     if(n===0) return mat[n][m];
//     let key=n.toString()+" "+m.toString();
//     if(dp[key]!=undefined) return dp[key];
//     let p1=mat[n][m]+solve(mat,n-1,m,dp),p2=1e9,p3=1e9;
//     if(m>0) p2=mat[n][m]+solve(mat,n-1,m-1,dp);
//     if(m<mat.length-1) p3=mat[n][m]+solve(mat,n-1,m+1,dp);
//     // console.log(Math.min(p1,p2,p3));
//     dp[key]=Math.min(p1,p2,p3);
//     return dp[key];
// }
// var minFallingPathSum = function(mat) {
//     let n=mat.length,m=mat[0].length,mini=1e9,dp={};
//     for(let j=0;j<m;j++){
//         mini=Math.min(mini,solve(mat,n-1,j,dp));
//     }
//     return mini;
// };

// https://leetcode.com/problems/minimum-path-sum/description/

// var solve=function(grid,n,m,dp){
//     if(n===0&&m===0) return grid[n][m];
//     let key=n.toString()+" "+m.toString();
//     if(dp[key]!==undefined) return dp[key];
//     let p1=1e9,p2=1e9;
//     if(m>0) p1=grid[n][m]+solve(grid,n,m-1,dp);
//     if(n>0) p2=grid[n][m]+solve(grid,n-1,m,dp);
//     dp[key]=Math.min(p1,p2);
//     return dp[key];
// }
// var minPathSum = function(grid) {
//     let n=grid.length,m=grid[0].length,dp={};
//     return solve(grid,n-1,m-1,dp);
// };