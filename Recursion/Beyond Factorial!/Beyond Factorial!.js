function runProgram(input){
    let num=input.trim().split(" ").map(Number)
    console.log(financial(BeyonfFactorial(num)))
}
function BeyonfFactorial(num)
{
    if (num == 1)
        return 0;
    return (BeyonfFactorial(num - 1) + Math.log(num));
}

 function financial(x) {
  return Number.parseFloat(x).toFixed(4);
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