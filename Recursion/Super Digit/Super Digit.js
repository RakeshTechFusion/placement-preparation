function runProgram(input){
    input=input.trim().split("\n")
for(let i=0,line=1;i<input[0];i++){
    let num=input[line++]
    while(num.length>1){
        num=sum(num)
    }
    console.log(num)
}
function sum(num){
    let ans=0
    for(let i=0;i<num.length;i++){
        ans+=+num[i]
    }
    return ans+""
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