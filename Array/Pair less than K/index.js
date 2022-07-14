function runProgram(input){
  
    input=input.trim().split("\n")
    var tc=+input[0];
    var line=1;
    
    for(var i=0;i<tc;i++)
    {
       var N=+input[line];
       line++;
       var arr=input[line].trim().split(" ").map(Number);
       line++;
       var K=+input[line];
       line++;
    //   console.log(N,arr,K)
       
        target(N,K,arr)
    }
}

function target(N,K,arr){
     
    var flage=false;
    var count=0;
   var max=0;
   for(var i=0; i<N; i++){
       
      
       for(var j=i+1; j<N; j++){
            var sum=0;
           sum=arr[i]+arr[j]
           if(sum<K && sum>max){
               max=sum
               var a=max
               count++;
           }
       }
   }
   if(count>0){
       console.log(a)
   }
   else{
       console.log("-1")
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