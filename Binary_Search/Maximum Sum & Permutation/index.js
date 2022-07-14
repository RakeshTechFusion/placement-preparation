function runProgram(input){
    input=input.trim().split("\n")
    var n=input[0]
    var arr=input[1].trim().split(" ").map(Number).sort((a,b)=>a-b)
    console.log( maxSum(arr, n)) 
}
//Enter code here
function maxSum(arr, n)
    {   
    let sum = 0;
    for (let i = 0; i < n; i++)
        sum += (arr[i] * i);
    return sum;
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