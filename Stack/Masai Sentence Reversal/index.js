function runProgram(input){
    input=input.trim().split(" ")
    // console.log(input)
    var stack=[]
   
    for(i=0;i<input.length;i++){
       stack.push(input[i])
    }
    // bag=reverse(bag)
   

var bag=""
while(stack.length>0){
    bag=bag+stack.pop()+" "
   
}  console.log(bag)
}




process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
