function runProgram(input){
    input=input.trim().split("\n");
    var length=+input[0];
    var str=input[1]
    var str1="";
    var index=0;
   Generateallsubsequence(str,str1,index)
//   console.log(input)
    
}
function Generateallsubsequence(str,str1,index){
    if(str1.length>0){
        console.log(str1);
    }
    if(index==str.length){
        return;
    }
    for(var i=index;i<str.length;i++){
        str1=str1+str[i]
        Generateallsubsequence(str,str1,i+1)
        str1=str1.slice(0,-1);
        // str1.delete(str1.length-1)
        // str1=str1.slice(str1.length-1)
        
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
