function runProgram(input){
    input=input.trim().split("\n")
    //console.log(input)//[ '2', '3 1', '4 3' ]
    let N=+input[0]
    let s1=input[1].trim().split(" ").map(Number)
    let c1=input[2].trim().split(" ").map(Number)
    //console.log(s1,c1)
    Challenge (N,s1,c1)
    
}
 
  function  Challenge (N,s1,c1){
       s1=s1.sort((a,b)=>a-b)
       c1=c1.sort((a,b)=>a-b)
       //console.log(s1)
       //console.log(c1)
       let sum=0
      for(let i=0;i<N;i++)
      {
         sum+=(s1[i]*c1[i])  
      }
      console.log(sum)
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