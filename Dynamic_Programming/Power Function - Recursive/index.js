//Enter code here
function runProgram(input){
    input= input.trim()
    var [x,y]= input[0].trim().split(" ")
    console.log( power(x, y))
}
//Enter code here
function power(x , y)
{
    var temp;
    if( y == 0)
        return 1;
    temp = power(x, y / 2);
    if (y % 2 == 0)
        return temp*temp;
    else
        return x*temp*temp;
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