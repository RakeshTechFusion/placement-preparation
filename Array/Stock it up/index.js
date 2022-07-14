function runProgram(input){
    var input=input.trim().split("\n")
 var t= +input[0]
 var sum=0;
 var m=input[1].trim().split(" ").map(Number)

     for(var i=0; i<t; i++){
              var sum=sum+(550*m[0])+(240*m[1])+(84*m[2])+(159*m[3])+(80*m[4])+(160*m[5])+(252*m[6])
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