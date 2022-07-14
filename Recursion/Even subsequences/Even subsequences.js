function runProgram(input){
    input=input.trim().split("\n")
    var tc=+input[0]
    var line=1;
    for(var i=0;i<tc;i++)
    {
        var N=+input[line++]
        var arr=input[line++].trim().split(" ").map(Number)
        subseq(N,arr)
    }
}
function subseq(N,arr){
    let res=true;
    for(let i=0;i<N;i++)
    {
        if(arr[i]%2==1)
        {
            console.log("yes");
            res=false;
            break;
        }
    }
    if(res)
    {
        console.log("no")
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