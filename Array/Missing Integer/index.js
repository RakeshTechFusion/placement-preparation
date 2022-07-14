function runProgram(input){
    input=input.split(" ").map(Number)
    //console.log(input);
    missingNumbers(input)
 }
   function missingNumbers(input)
     {
         var n=input.length;
         var sum=((n+1)*(n+2))/2;
         for(let i=0;i<n;i++)
           sum-=input[i];
         console.log(sum);
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