function runProgram(input){
    input=input.trim().split("\n")
    var n=input[0]
    var arr=input[1].trim().split(" ").map(Number)
    var k=input[2]
    console.log(FindNumber(n,arr,k))
}
//Enter code here
function FindNumber(n,arr,k){
    for(let i=0;i<n;i++){
        if(arr[i]==k){
            return i;
        }
        else if(arr[i]>k){
            return i;
        }
    }
    return n;
}

 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
//using binary search
//Enter code here
//Enter code here
function runProgram(input){
  input=input.trim().split("\n");
  let n=+input[0];
  let arr=input[1].trim().split(" ").map(Number);
  let k=+input[2];
  console.log(hazu(n,k,arr));
}
function hazu(n,k,arr){
  let low=0,high=arr.length-1,ans=-1;
  while(low<=high){
      let mid=Math.floor(low+(high-low)/2);
      if(arr[mid]==k){
          return mid;
      }
      else if(arr[mid]>k){
          ans=mid;
          high=mid-1;
      }
      else{
          low=mid+1;
      }
  }
  return ans==-1? arr.length:ans;
}
if (process.env.USER === "") {
runProgram(``);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}