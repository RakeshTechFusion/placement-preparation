//Enter code here
function runProgram(input){
    input = input.trim().split('\n')
     let tc = +input[0];
    let line = 1;
    
    for( let i=0; i<tc; i++){
        let [n,m] = input[line++].trim().split(" ").map(Number);
        let arr = [];
        for( let i=0; i<n; i++){
            arr.push(input[line++].trim().split(" ").map(Number))
        }
        spring(arr,n,m)
    }
}
function  spring(arr,n,m){

   let dp = new Array(n);
    
    for( let j=0; j<n; j++){
        dp[j] = new Array(m+1);
        dp[j].fill(-1)
    }
    
    let max = Number.MIN_VALUE;
    
    for(let i=0; i<m; i++){
       let ans = springboard(arr,0,i);
       max = Math.max(max,ans)
    }
    
   function springboard(arr,row,col){
       if(row>=n || col>=m || col<0) return 0
       if(dp[row][col] != -1) return dp[row][col];
       
       return dp[row][col]  = arr[row][col]+Math.max(springboard(arr,row+1,col+1),springboard(arr,row+1,col),springboard(arr,row+1,col-1))
  
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