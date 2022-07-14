function runProgram(input){
    input=input.trim().split("\n");
    var m=input[0];
   var arr=[];
    var k=0;
    substring(m,arr,k);
    }
function substring(m,arr,k){
     if(arr.length>=0){
         console.log(arr.join(" "));
         }
         for(var i=k;i<m;i++){
             arr.push(i+1);
              substring(m,[...arr],i+1);
              arr.pop();
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