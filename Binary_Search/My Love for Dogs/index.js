function runProgram(input){
    input=input.trim().split("\n");
    var n=+input[0];
  var number=input[1].trim().split(" ").map(Number);
       
        number.sort((a,b)=>a-b);
      
        var strength=input[2].trim().split(" ").map(Number);
        strength.sort((a,b)=>a-b);
        dogs(number,strength,n);
     
     }
function dogs(number,strength,n){
      var sum=0;
   for(let i=0;i<n;i++){
      
        sum+=number[i]*strength[i];
   }
   
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