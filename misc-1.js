// https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/description/

// var maximumBags = function(cap, ro, add) {
//     let diff=[];
//     let n=cap.length;
//     for(let i=0;i<n;i++){
//         diff.push(cap[i]-ro[i]);
//     }
//     diff.sort((a,b)=>a-b);
//     let cnt=0,i=0;
//     while(i<n&&add>=diff[i]){
//         add-=diff[i];
//         cnt++;
//         i++;
//     }
//     return cnt;
// };

// https://leetcode.com/problems/letter-case-permutation/description/
// var isAlpha=function(ch){
//     if((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')) return true;
//     return false;
// }
// var solve=function(ans,s,i,arr){
//     if(i===s.length){
//         arr.push(ans);
//         return;
//     }
//     if(isAlpha(s[i])){
//         solve(ans+s[i].toUpperCase(),s,i+1,arr);
//         solve(ans+s[i].toLowerCase(),s,i+1,arr);
//     }
//     else solve(ans+s[i],s,i+1,arr);
// }
// var letterCasePermutation = function(s) {
//     let arr=[];
//     solve("",s,0,arr);
//     return arr;
// };