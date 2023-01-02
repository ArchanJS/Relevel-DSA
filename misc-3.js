// https://leetcode.com/problems/decode-ways/description/

var solve=(s,i,dp)=>{
    if(i>=s.length) {
        // console.log(ans);
        return 1;
    }
    if(dp[i]!=undefined) return dp[i];
    let pick1=0,pick2=0;
    if(s[i]==='0') return 0;
    pick1=solve(s,i+1,dp);
    if((s.length-i)>=2) {
        let temp="";
        temp+=s[i];
        temp+=s[i+1];
        if(temp<="26") pick2=solve(s,i+2,dp);
    }
    dp[i]=pick1+pick2;
    return dp[i];
}
var numDecodings = function(s) {
    // console.log("10">"26");
    let dp={};
    return solve(s,0,dp);
};

// https://leetcode.com/problems/detect-capital/description/

var check1=function(word){
    for(let i=0;i<word.length;i++){
        if(word[i]<'A'||word[i]>'Z') return false;
    }
    return true;
}
var check2=function(word){
    for(let i=1;i<word.length;i++){
        if(word[i]>='A'&&word[i]<='Z') return false;
    }
    return true;
}
var detectCapitalUse = function(word) {
   return check1(word)||check2(word);
};