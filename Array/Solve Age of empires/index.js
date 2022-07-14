function runProgram(input) {
	input = input.split("\n");
	var n = +input[0];
	var arr = input[1].split(" ").map(Number);
	ageof(n,arr)
}
function ageof(n,arr){
    var sum = 0;
    arr = arr.sort(function (a,b){
        return a-b;
    })
    for(var i = 0;i<arr.length;i=i+2){
        sum = sum+arr[i]
    }
    console.log(sum)
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