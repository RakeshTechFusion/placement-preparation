function runProgram(input){
    var input=input.trim().split("\n");
    var n=input[0]
    var gas=input[1].trim().split(" ").map(Number)
    var cost=input[2].trim().split(" ").map(Number)
    console.log(canCompleteCircuit(gas, cost))
    
}
//Enter code here
function canCompleteCircuit(gas, cost) {    
      let start = 0; //To keep track of index
    let sum =0;
    let diff = 0;
    for(let i=0; i<gas.length; i++){
        sum = sum + gas[i]-cost[i];
        if(sum<0){
            start = i + 1;
            diff = diff+sum;
            sum = 0;
        }
    }
    return sum + diff >=0 ? start : -1
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