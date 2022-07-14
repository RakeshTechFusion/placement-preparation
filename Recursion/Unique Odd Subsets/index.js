function runProgram(input){
    input = input.trim().split("\n")
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number)
    let k = +input[2]
     subset(0,arr,[],0,k)
    if(flag){
        console.log("True")
    }
    else{
        console.log("False")
    }
    
}
let flag;
 function subset(index,arr,res,sum,k){
     if(res.length==k && sum%2 !=0){
         flag = true;
     }
     for(let i = index; i<arr.length; i++ ){
         if(!res.includes(arr[i])){
             res.push(arr[i])
         }
         sum = sum+arr[i];
         subset(i+1,arr,res,sum,k);
         res.pop();
         sum=sum-arr[i]
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