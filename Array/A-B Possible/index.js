function runProgram(input){
    input=input.trim().split("\n")
    var n=input[0]
    var line=1;
    var tc=input[0].trim().split(" ").map(Number)
    for(var i=0;i<tc;i++){
        var m=input[line++].trim().split(" ").map(Number)
        console.log(swap(m , n))
    }
}
//Enter code here
function Possible(left,right)

{
    if(left==right)
    {
      flag=true
     
    }
  if(left>right){
      return 
  }
  Possible(left*2,right)+Possible(parseInt(String(left)+1),right)
  
}

function runProgram(input){
   input=input.trim().split("\n")
   let tc=+input[0]
   let line=1
   for(i=0;i<tc;i++)
   {
       flag=false;
       var[left,right]=input[line++].trim().split(" ").map(Number)
        Possible(left,right)
       if(flag===true){
          console.log("Possible") 
       }
       else{
           console.log("Not Possible")
       }
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