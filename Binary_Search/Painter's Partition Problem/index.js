// Given an array A of n wooden boards where the ith board has Ai length. We need to paint all the n boards and we have p painters available for the work and each takes 1 unit time to paint 1 unit of the board.
// Two painters cannot share a board to paint. So for example, if the ith board is painted by some painter, then he will complete the painting. A board cannot be painted partially by one painter, and partially by another.
// Any painter will only paint continuous sections of boards, i.e if the painter paints a range [l,r], then he paints all the boards within that interval. For example -
// Consider 5 boards numbered from 1 to 5, then the painter can not paint the board [2,4,5].
// Calculate the minimum time to complete this job.
//using binary search.
//Enter code here
//Enter code here
function runProgram(input){
    input=input.trim().split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    let p=+input[2];
    console.log(hazu(n,p,arr));
    }
    function hazu(n,p,arr){
        let low=0,high=arr.length-1,ans=-1;
        while(low<=high){
            let mid=Math.floor(low+(high-low)/2);
            if(arr[mid]==n){
                return mid;
            }
            else if(arr[mid]>n){
                ans=mid;
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        return ans==-1? arr.length:ans;
    }
