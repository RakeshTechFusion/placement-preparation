function runProgram(input){
    var n=+input;
    console.log(bobbox(n))
    
    
}
//Enter code here
function bobbox(n){
    if(n==0)
    return 1;
    else if(n<1)
    return 0;
    else
    return bobbox(n-5)+bobbox(n-3)+bobbox(n-1);
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