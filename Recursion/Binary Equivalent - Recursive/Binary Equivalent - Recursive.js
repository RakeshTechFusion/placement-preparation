function runProgram(input){
    input=input.trim().split("\n")
    var line=1;
    var tc=+input[0];
    for(i=0;i<tc;i++)
    {
        var num=input[line++]
         console.log(decToBinRecursive(num))
    }
   
    // console.log(decToBinRecursive(num))
    
}
//Enter code here
function decToBinRecursive(num){
    if(num >= 1){
      return decToBinRecursive(Math.floor(num/2))+(num % 2);
    }
    return '';
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