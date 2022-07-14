function runProgram(input){
    input = input.trim()
    var n=input[0].trim()
    console.log(fib(n))
    
}
//Enter code here
 function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
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