function runProgram(input){
    input=input.trim().split("\n")
    // console.log(input)
 var line=1;
 var tc=+input[0];
 for(var i=0; i<tc;i++){
     var [a,b]=input[line++].trim().split(" ").map(Number)
     console.log(gcd(a, b))
 }
    
    
}
//Enter code here
 function gcd(a, b) {
    if (b == 0) {
        return a;
    }
return gcd(b, a % b);
};

 

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