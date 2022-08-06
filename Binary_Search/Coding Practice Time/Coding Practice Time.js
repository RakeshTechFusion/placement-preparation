// Sandhya is going to practice N different problems in the exact given order over the next M days. For each problem, she writes down the amount of time q[i] she will take to think and code the i-th problem.
// Before starting on the problems, she took advice from experienced competitive programmers on her practice routine and almost all of them advised her to keep her daily load at the minimum possible and avoid over training.
// Since she already has N problems to solve, she asks you to find the minimum time T such that training everyday for a time t[i]<T is sufficient to solve all the N problems in M days.
// Note : Unlike in real world, you cannot think on a problem on one day and solve it on the other day. You need to do it on the very same day!
// Output
// The output consists of one integer, the minimum time T as described in the problem statement.
function runProgram(input){
    input=input.trim().split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    let m=+input[2];
    console.log(hazu(n,m,arr));
    }
    function hazu(n,m,arr){
        let low=0,high=arr.length-1,ans=-1;
        while(low<=high){
            let mid=Math.floor(low+(high-low)/2);
            if(arr[mid]==m){
                return mid;
            }
            else if(arr[mid]>m){
                ans=mid;
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        return ans==-1? arr.length:ans;
    }