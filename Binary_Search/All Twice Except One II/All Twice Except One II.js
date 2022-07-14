function runProgram(input){
    input=input.trim().split("\n")
   var tc=+input[0]
    var line=1;
    for(var i=0;i<tc;i++){
        var n=+input[line++]
        var arr=input[line++].split(" ").map(Number)
        findTwice(arr,n)
    }
}
//Enter code here
function findTwice(arr,n)
{
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1;
        }
        else{
            obj[arr[i]]++;
        }
    }
    for(let key in obj){
        if(obj[key]===1){
            console.log(key)
            break;
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