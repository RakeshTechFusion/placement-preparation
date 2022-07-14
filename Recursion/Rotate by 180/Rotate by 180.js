//Enter code here
function runProgram(input){
    input=input.trim().split("\n")
   var tc=input[0]
     var line=1;
    for(var i=0;i<tc;i++)
    {
        var N=+input[line++]
        var mat=[];
        for(var j=0;j<N;j++){
            mat.push(input[line++].trim().split(" ").map(Number))
        }
     rotateMatrix(mat,N)
     }
 
 }
 //Enter code here
 function rotateMatrix(mat,N)
 {
     for(var i = N - 1; i >= 0; i--)
     {
         var bag="";
         for(var j = N - 1; j >= 0; j--)
         {
             bag=bag+mat[i][j] + " ";
         }
             console.log(bag)
     }
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