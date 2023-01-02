// let arr=[[10,20,30,40],[25,35,45,55],[16,26,36,46]];
// find the element 26 in this array.
// i=0->n-1
// for(i:0->n-1){
    // if(arr[i][0]<=target&&arr[i][m-1]>=target) binarySearch(..)
// }

// O(nlog(m))

let arr=[[10,20,30,40],[25,35,45,55],[16,26,36,46]];
// [16,26,36,46] lo=2,hi=3,mid=(lo+hi)/2=2,target=36

let binarySearch=(arr,row,target)=>{
    let lo=0,hi=arr[0].length-1;
    while(lo<=hi){
        let mid=Math.floor((lo+hi)/2);
        let ele=arr[row][mid];
        if(ele===target) return mid;
        else if(ele>target) hi=mid-1;
        else lo=mid+1;
    }
    return -1;
}

var main=(arr,target)=>{
    let n=arr.length,m=arr[0].length;
    for(let i=0;i<n;i++){
        if(arr[i][0]<=target&&arr[i][m-1]>=target){
            let res=binarySearch(arr,i,target);
            if(res!=-1) return [i,res];
        }
    }
    return [-1,-1];
}

console.log(main(arr,29));

