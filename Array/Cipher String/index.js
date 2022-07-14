function runProgram(input){  
    input=input.trim().split("\n")
    var tc=+input[0]
    var line=1
    for (var i=0;i<tc;i++)
    {
        var N=+input[line++]
        var str=input[line++]
         //console.log(tc,N,str)
         cipherString(N,str)
    }
    
   }
   
   
     function  cipherString(N,str)
      {
      var x=str[0];
      var count=1;
      var cipher="";
      for (var i=1;i<str.length;i++)
      {
          if(str[i]==x)
          {
              count++
          }
          else
          {
              cipher+=x+count;
              //console.log(cipher)
              x=str[i];
              //console.log(x)
              count=1
          }
       }
       cipher+=x+count;
       console.log(cipher)
      
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