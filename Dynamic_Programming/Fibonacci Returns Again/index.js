//Enter code here
function runProgram(input){
    input=input.trim()
        let n=input[0]
        console.log(fib(n))
 }
 //Enter code here
  function fib(n) {
     const memo = {}
     
     function helper(n){
         if(n in memo) { return memo[n]}
         if (n===0) {return 0}
         if (n<3) {return 1}
         return memo[n] = helper(n-1) + helper(n-2);
     }
    
     return helper(n)
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
 