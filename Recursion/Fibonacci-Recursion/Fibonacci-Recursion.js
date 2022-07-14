function runProgram(input){
    let n=input.trim().split(" ").map(Number)
    console.log(fibonaciRecursion(n))   
}
//Enter code here
function fibonaciRecursion(n){
    if(n==0 || n==1){
        return n;
    }
    return fibonaciRecursion(n-1) + fibonaciRecursion(n-2)
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