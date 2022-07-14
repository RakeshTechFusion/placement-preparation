function runProgram(input){  
    var input = input.split("\n");
    var size = +(input[0]);
    var arr=input[1].trim().split(" ").map(Number);
    //console.log(arr,size)
    sneModified(arr);
   
}

 function  sneModified(arr){
      var stack=[];
      var res="";
      var n=arr.length;
      var count=0;

   for(var i = 0; i < n; i++)
   {
       while ((stack.length != 0) && (stack[stack.length - 1] >= arr[i]))
       {
           stack.pop();
       }

       if (stack.length == 0)
       {
          res+=i
          count++
       }
       else
       {
           res += stack[stack.length - 1] + " "
       }

       stack.push(arr[i]);
   }
   console.log(count)
     
     
     
     
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
