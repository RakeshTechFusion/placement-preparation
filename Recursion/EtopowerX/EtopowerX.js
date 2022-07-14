function runProgram(input){
    
    let [x,n]= input.trim().split(" ").map(Number);
     let p= epowerx(x,n);
     console.log(p.toFixed(4))
    //console.log(x,n)
    
}

function fact(n)
{
    if(n==1){
        return 1;
    }
    else{
    return n*fact(n-1);
}
}
function pow(n,x)
{
    if(n===0){
        return 1;
    }
    else{
      return x*pow(n-1,x);   
    }
   
}
function epowerx(x,n)
{
    if(n<1){
        return 1;
    }
    else{
      return (1/fact(n))*pow(n,x)+epowerx(x,n-1);   
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