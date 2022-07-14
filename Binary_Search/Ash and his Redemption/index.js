function runProgram(input){
    input=input.trim().split("\n");
    var tc=+input[0];
   let line=1
    for(let i=0;i<tc;i++){
        let n=+input[line++]
          var arr=input[line++].trim().split(" ").map(Number);
       
        arr.sort((a,b)=>a-b);
      
        var arr1=input[line++].trim().split(" ").map(Number);
        arr1.sort((a,b)=>a-b);
        randiorton(arr,arr1,n);
    }

    
     }
function randiorton(arr,arr1,n){
    flag=false
    for(i=0;i<n;i++){
        if(arr[i]>arr1[i]){
             flag=true
        }else{
             flag=false
             break;
        }
    }
    if(flag===true){console.log("Ash Finally Wins")}
    else if(flag===false){
        console.log("Train Hard Again")
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