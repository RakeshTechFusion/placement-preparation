function runProgram(input){
    input = input.trim().split("\n");
    var N = +input[0];
    var line=1
    for(var i=0; i<N; i++){
      var arr=input[line++].trim().split(" ");
      (buyTicket(arr));
    }
}
let que=[];
    

   function buyTicket(arr){
       
        if(arr[0]=="E"){
             que.push(arr[1]) 
            //  return que;
        }
        else if(arr[0]=="D"){
            if(que.length==0){
                console.log("Empty");
                // return que.shift();
            }
            else {
                console.log(que.shift())
                //  return "Empty";
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