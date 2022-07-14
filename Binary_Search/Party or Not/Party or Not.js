function runProgram(input){
    input = input.trim().split("\n");
    let [n,c,r] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    arr=arr.sort((a,b)=> a-b);
    PartyorNot(n,c,r,arr);
}
function PartyorNot(n,c,r,arr){
    // console.log(n,c,r,arr);
    let flag=true;
    
    for(let a=0; a<c; a++){
        r-=arr[a];
        if(r<0){
            flag=false;
        }
    }
    if(flag){
        console.log("Party");
    }else{
         console.log("Sad");
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