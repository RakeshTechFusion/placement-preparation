function runProgram(input){
    var input=input.trim().split("\n");
    var N=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    sort(N,arr);
}
    function sort(N,arr){
       var newarr=[];
    for(var i=0; i<N; i++)
    {
        newarr.push(i)
    }
    for(var i=0; i<N-1; i++)
    {
    for(var j=0; j<N-i-1; j++)
    {
        if(arr[j]>arr[j+1])
        {
            temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            
            temp1=newarr[j]
            newarr[j]=newarr[j+1]
            newarr[j+1]=temp1
        }
    }
}
console.log(newarr.join(" "));
    
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