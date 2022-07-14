function runProgram(input){
    input = input.split("\n");
      let n = input[0];
      let arr = input[1].split(" ").map(Number);
      arr.sort((a,b) => a-b);
      let left = [];
      left.push(arr[0])
     for(let i=1;i<n;i+=2){
         left.push(arr[i])
     }
     let right = [];
     for(let i=2;i<n;i+=2){
      right.push(arr[i])
      }
      right.reverse();
      let r = left.concat(right)
      
      n =n-1;
      let diff;
      let max = Number.MIN_SAFE_INTEGER;
      for(let i=0;i<=n;i++){
          if(i === n){
               diff = Math.abs(r[i] - r[0]);
          }else{
              diff = Math.abs(r[i] - r[i+1]);
          }
          max = Math.max(max,diff) 
      
      }
      console.log(max)
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