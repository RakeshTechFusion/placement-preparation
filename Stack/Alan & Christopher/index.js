function runProgram(input){ 
    
    input=input.trim().split("\n")
    var tc=+input[0]
    line=1
    for(var i=0;i<tc;i++)
    {
        var str=input[line++]
        alanChristopher(str)
    }
    
}


   function alanChristopher(str){
       
       var stack=[];
       for (var i=0;i<str.length;i++)
       {
           
           stack.push(str[i])
           if(str[i]=="#" )
           {
               stack.pop();
               stack.pop(str[i-1]);
           }
           
       }
       
       console.log(stack.join(""))
       
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