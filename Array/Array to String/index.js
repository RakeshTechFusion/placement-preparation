function runProgram(input){
    input=input.split("\n")
    var length=+input[0];
    var arr=input[1].split(" ").map(Number)
    arrToString(arr,length)
}
   function arrToString(arr,length)
   {
       var bag="";
       for(var i=0;i<length;i++)
       {
           if(arr[i]<0)
           {
               bag=bag+0;
           }
           else{
               bag=bag+arr[i];
           }
       }
       console.log(bag);
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