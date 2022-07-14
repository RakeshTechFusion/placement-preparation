function runProgram(input){
    input=input.trim().split("\n")
    N=+input[0]
    arr=input[1].trim().split(" ").map(Number)
    string(N,arr)
}
function string(N,arr){
    q=""
    for(i=0;i<N;i++){
        if(arr[i]>0){
     q+=arr[i]}
     else{
q=q+0
     }
    }
    
    console.log(q)
    // console.log(arr)
    
}
// function enqueue(element)
// {    
//     // adding element to the queue
    
// }

 

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
