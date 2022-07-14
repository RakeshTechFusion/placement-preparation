function runProgram(input){
    input=input.split("\n")
    var n=input[0]
    getMinSteps(n)
}
//Enter code here
function getMinSteps(n){
   var count=0;
   while(n!==0){
       var max=0;
       for(var i=5;i>=1;i--){
           if(i<=n && i>max){
               max=i;
               n=n-max;
               count++;
           }
       }
   }
   console.log(count)
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