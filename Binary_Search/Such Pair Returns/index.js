function runProgram(input){
    input=input.trim().split("\n");
    var tc=+input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var [N,K]=input[line++].trim().split(" ").map(Number);
        var arr=input[line++].trim().split(" ").map(Number).sort((a,b)=>a-b)
        console.log(SuchPairReturns(N,K,arr))
    }
    
}
    function SuchPairReturns(N,K,arr){
      var s=0;
      var e=N-1;
      while(s<e){
          var sum=arr[s]+arr[e];
          if(sum===K){
              return 1;
          }
             if(sum>K){
                  e--;
              }
              else{
                  s++;
              }
          }
      
      return -1;
        
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