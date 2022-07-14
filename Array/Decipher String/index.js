function runProgram(input){  
    input=input.trim().split("\n")
    var tc=+input[0]
    var line=1
    for (var i=0;i<tc;i++)
    {
        var N=+input[line++]
        var str=input[line++]
         //console.log(tc,N,str)
          decipherSString(N,str)
    }
   
   
    
}

  function  decipherSString(N,str)
  {
      
   
    var bag="";
    for (var i=0;i<str.length;i++)
    {
        if(str[i]!=NaN)
        {
            for (var j=0;j<str[i];j++)
            {
                bag+=str[i-1]
            }
        }
         
    }
    console.log(bag)
       
      
      
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