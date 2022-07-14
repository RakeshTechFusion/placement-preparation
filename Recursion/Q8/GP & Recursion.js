function runProgram(input){
    input = input.trim().split('\n')
    var [n,r]=input[0].trim().split(' ').map(Number)
    //console.log(n)
    //console.log(r)
    sumOfSeries(n,r)
    
     
     
 }
 function sumOfSeries(n,r){
     var sum = 0;
     for(let i = 0 ; i<=n;i++)
     {
         sum = sum + 1/r**i
         //console.log(sum)
     }
     console.log(sum.toFixed(4))
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