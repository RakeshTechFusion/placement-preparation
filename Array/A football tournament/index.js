//Enter code here
function runProgram(A){
    A=A.split("\n")
   N=+A[0]
 //   var A=input
     maximumOccuringElement(A,N)
 }
 
 function maximumOccuringElement(A,N){
     var details = {};
     var c=null;
 for(var i = 1; i<=N; i++)
 {
   var char = A[i];
   if(details[char] == undefined)
   {
     details[char] = 1;
   }
   else{
     details[char] = details[char]+1;
   }}
   for(i in details){
      
      if(details[i]>c || c==null){
          c=details[i]
          var j=i
 }}
   console.log(j)
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