function runProgram(input){
    input=input.trim().split("\n")
    var [n,m]=input[0].trim().split(" ")
    for(var i=0;i<n;i++){
        if(i%2==0){
            let arr=input[i+1].trim().split(" ").map(Number)
            console.log(arr.join(" "))
        }
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