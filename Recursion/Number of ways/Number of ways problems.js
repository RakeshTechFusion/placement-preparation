function runProgram(input){
    let n=input.trim().split(" ").map(Number)
      console.log(findStep(n))
}
  function findStep(n)
    {
        if ( n == 0){
            return 1;
        }
        else if (n < 0){
            return 0;
        }
 
        else{
            return findStep(n - 3) + findStep(n - 2)
                + findStep(n - 1);
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