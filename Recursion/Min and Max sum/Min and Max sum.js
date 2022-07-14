function runProgram(input){
    input=input.trim().split('\n');
     let tc=+input[0];
     let line=1;
     for(let i=0;i<tc;i++)
     {
    let [N,M] =input[line++].trim().split(" ").map(Number);
    let arr= input[line++].trim().split(" ").map(Number);
 //   console.log(N,M,arr);
      minmax(N,M,arr)
     }
 }
 function minmax(N,M,arr)
 {
     let sub=arr.sort(function(x,y)
     {
      return x-y;   
     })
     let arr1=[];
     for(let i=sub.length-1;i>=0;i--)
     {
         arr1.push(sub[i])
     }
     let min=0;
     let max=0;
     for(let j=0;j<M;j++)
     {
         min+=arr[j]
     }
     for(let k=0;k<M;k++)
     {
         max+=arr1[k]
     }
     console.log(max-min)
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