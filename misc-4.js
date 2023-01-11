// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/description/
var generateTheString = function(n) {
    let s="";
    if(n%2===0){
        for(let i=1;i<n;i++) s+='a';
        s+='b';
    }
    else{
        for(let i=1;i<=n;i++) s+='a';
    }
    return s;
};

// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/
var halvesAreAlike = function(s) {
    let s1="aeiou",s2="AEIOU";
    let n=Math.floor((s.length)/2);
    let str1=s.substring(0,n),str2=s.substring(n),cnt1=0,cnt2=0;
    for(let i=0;i<str1.length;i++){
        if(s1.includes(str1[i])||s2.includes(str1[i])) cnt1++;
    }
    for(let i=0;i<str2.length;i++){
        if(s1.includes(str2[i])||s2.includes(str2[i])) cnt2++;
    }
    return cnt1===cnt2;
};

// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
var maxDepth = function(s) {
    let maxi=0,curr=0;
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)==='(') curr++;
        else if(s.charAt(i)===')') curr--;
        maxi=Math.max(maxi,curr);
    }
    return maxi;
};