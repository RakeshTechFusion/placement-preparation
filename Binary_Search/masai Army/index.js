//Enter code here
function runProgram(input){
    input=input.trim().split("\n");
    let tc=+input[0];
    for(let i=0,line=1;i<tc;i++){
        let [n,d]=input[line++].trim().split(" ").map(Number);
        let arr=input[line++].trim().split(" ").map(Number);
        masaiArmy(n,d,arr);
    }
}
function  masaiArmy(n,d,arr){
    let count=0;
    for(let i=0;i<n-1;i++){
         for(let j=i+1;j<n;j++){
          let result=Math.abs(arr[i]-arr[j]);
              if(result<=d){
                  count++;
              }
          }
          
         }
    
    console.log(count*2);
    
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