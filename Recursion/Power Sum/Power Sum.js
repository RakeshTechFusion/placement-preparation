function runProgram(input){
   
    var [x,n]=input.trim().split(" ").map(Number)
    var num=1
    console.log( powerSum(x,n,num))
    
    
}
//Enter code here
function powerSum(x,n,num){
    let val=(x-Math.pow(num,n))
    if(val==0){
        return 1;
    }
    if(val<0){
        return 0;
    }
    return powerSum(val,n,num+1)+powerSum(x,n,num+1)
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