function add(length,target,arr){
    var i=0;j=1;
    while(i<length && j<length){
        if(i!=j && arr[j]-arr[i]===target)
        {
            console.log("Yes")
            return true;
        }
        else if(arr[j]-arr[i]<target)
        j++
        else
        i++
    }
    console.log("No")
     return false;
     
    }
  function runProgram(input)
   {
   input=input.split("\n")
   var tc=+input[0]
   var line=1
   for(var a=0; a<tc; a++)
   {
   var[length,target]=input[line++].split(" ").map(Number);
   var arr=input[line++].split(" ").map(Number);
   
      add(length,target,arr)
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