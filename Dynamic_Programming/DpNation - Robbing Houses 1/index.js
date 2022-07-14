//Enter code here
function runProgram(input){
    var input= input.trim().split("\n")
    var line=1;
    var tc = input[0].trim().split(" ").map(Number)
    for(var i=0;i<tc;i++){
        var n=input[line++]
        var nums= input[line++].trim().split(" ").map(Number)
        console.log(rob(nums,n))
    }
}
//Enter code here
var rob = function(nums,n) {
    if(n < 3) return Math.max(...nums, 0);
    let prev1 = 0, prev2 = nums[0];
    
    for(let i = 1; i < n; i++) {
        const steel = prev1 + nums[i];
        const noSteel = prev2;
        prev1 = prev2;
        prev2 = Math.max(steel, noSteel);
    }
    return prev2;
};
 

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
