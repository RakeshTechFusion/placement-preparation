function runProgram(input){
    input=input.trim().split("\n")
    var[n,k]=input[0].trim().split(" ").map(Number)
    var arr=input[1].trim().split(" ").map(Number)
        
        findMaximumElement(arr,k,n)
}
    function findMaximumElement(arr,k,n)
    {
        let max = 0;
  for(let i=0;i<n-k+1;i++){
    let tempMax = 0;
    for(let j=i;j<i+k;j++){
      tempMax += arr[j];
    }
    if(tempMax > max){
      max = tempMax;
    }
  }
  console.log(max);
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