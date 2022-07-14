function runProgram(input){
    input=input.trim();
    let p=input.length;
    let s=length(p);
    
   console.log(s)
    
}
function length(p)
{
   if(p==1) {
       return 1;
   }
   else {
      return 1 +  length(p-1)
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