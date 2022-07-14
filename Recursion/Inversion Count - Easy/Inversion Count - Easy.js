function runProgram(input){
    input=input.trim().split("\n")
    var tc=+input[0]
    var line = 1;
    for(var i =0;i<tc;i++)
    {
        var N = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        // console.log(N,arr)
      count(N,arr)  
    }
}
function count(N,arr)
{
    var res = [];
    for(var i=0;i<N;i++)
    {
        var count=0;
        for(var j=i+1;j<N;j++)
        {
            if(arr[i]>arr[j])
            {
                count++;
            }
        }
        res.push(count);
    }
    console.log(res.join(" "));
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