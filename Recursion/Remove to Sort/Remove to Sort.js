function runProgram(input){
    input=input.trim().split("\n")
    var n = +input[0]
    var arr =input[1].trim().split(" ").map(Number)
    sort(n,arr)
}
function sort(n,arr){
   let res=1;
   for(let i=res;i<n;i++){
       if(arr[res-1]<=arr[i]){
           arr[res]=arr[i]
           res++
       }
   }
   let bag=[]
   for(let i=0;i<res;i++){
       bag+=arr[i]+" "
   }
   console.log(bag)
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