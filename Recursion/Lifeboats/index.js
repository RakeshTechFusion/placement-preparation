function runProgram(input){

    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(i=0;i<tc;i++){
        let [n, k] = input[line++].trim().split(" ").map(Number);
        let W = input[line++].trim().split(" ").map(Number);
        lifeBoats(W,n,k);
    }
}

function lifeBoats (W,n,k) {
    W = W.sort((a,b)=>a-b);
    let l = 0, r = n - 1;
    let count = 0;
    while(l<=r){
        if(W[l]+W[r]<=k){
            count++;
            r--;
            l++;
        }
        else{
            count++;
            r--;
        }
    }
    console.log(count);
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
