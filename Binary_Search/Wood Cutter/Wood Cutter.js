
function runProgram(input){
    var data = input.split("\n");
    var f = data[0].split(" ");
    var len = Number(f[0]);
    var height = Number(f[1]);
    var arr = data[1].split(" ").map(a=>Number(a)).sort((a,b)=>b-a);
    var sum = 0;
    for (var i=0;i<len;i++){
        var cut = 0;
        sum = sum + arr[i]
        cut = sum - arr[i]*(i+1)
        if (cut >= height){
            sum = sum-arr[i]
            break;
        }
    }
    if ((sum-height)>=0){
        console.log(Math.floor((sum-height)/(i)))
    }
    else {
        console.log(-1)
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
