function runProgram(input){
    input=input.trim().split("\n");
    let tc=+input[0];
    for (let i=0,line=1;i<tc;i++){
        let n=input[line++];
        let A=input[line++].trim().split(" ").map(Number);
        coinSum(n,A);
    }
}
function coinSum(n,A){
let j = 0;
for (let i = 0; i < n; i++) {
    if (A[i] !== 0) {
        swap(A, j, i); 
        j++;
    }
}
function swap(A, a, b) {
    let temp = A[a];
    A[a] = A[b];
    A[b] = temp;
}

  console.log(A.join(" ")); 

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