let count;
function runProgram(input){
    let newInput=input.trim().split("\n")
    let t=Number(newInput[0].trim());
    for(var i=1;i<t*2;i+=2){
        let arr=newInput[i+1].trim().split(" ").map(Number)
        count=0;
        sub(arr,0,arr.length-1,0);
        console.log(count)
    }
}
function sub(arr,low,high,sum){
    if(low<=high+1){
        if(sum%2==1)
        count++
    }
    for(var i=low;i<=high;i++){
        sub(arr,i+1,high,sum+arr[i])
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