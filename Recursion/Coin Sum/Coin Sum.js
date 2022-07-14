function runProgram(input){
    input=input.trim().split("\n")
    let N=+input[0];
    let res=input[1].split(" ").map(Number)
    let X=[];
    coinsum(0,res,[]);
    console.log(X.length)
    console.log(X.sort((a,b)=>a-b).join(" "));
    

//Enter code here
function coinsum(K,res,Z){
    if(Z.length>0){
        let sum=Z.reduce((a,b)=>a+b);
        if(!X.includes(sum))
        {
            X.push(sum)
        }
    }
    for(let i=K;i<res.length;i++)
    {
        Z.push(res[i])
        coinsum(i+1,res,Z)
        Z.pop();
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