function runProgram(input){
    input=input.trim().split("\n");
    
   
     check(input)
    
 }
 
 function check(input)
 {
     var bag="";
     for (var i=0;i<input.length;i++)
     {
        if(input[i]=="India")
        {
            console.log(i);
        }
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