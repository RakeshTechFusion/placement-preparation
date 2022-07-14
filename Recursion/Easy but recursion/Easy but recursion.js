function runProgram(input){
    input=input.trim().split("\n")
    var tc=+input[0]
    var line=1
    for (var i=0;i<tc;i++)
    {
        var N=+input[line++]
        var arr=input[line++].trim().split(" ").map(Number)
       
       console.log(easyRecursion(arr,N));
    }
    
}
   
   function easyRecursion(arr,N){
       
       
       
       function sum(arr,N)
       {
           var sum=0;
           for (var i=0;i<N;i++)
           {
               sum+=arr[i]
           }
           return (sum)
       }
        
      if(N<0)
       {
           return 0;
       }
       return (sum(arr,N-1) + arr[N - 1]);
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