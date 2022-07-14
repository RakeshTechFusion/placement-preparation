//Enter code here
function runProgram(input){
    let n=input.trim().split(" ").map(Number)
    console.log(factorialRecursion(n))   
}
//Enter code here
function factorialRecursion(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*factorialRecursion(n-1)
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