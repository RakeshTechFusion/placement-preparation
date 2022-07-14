function runProgram(input)
{
 var data = input.split("\n");
 var size = Number(data[0]);
 var arr=data[1].trim().split(" ").map(Number);
 console.log(solve(arr));
  
}
function solve(arr){
  var stack=[];
  var res="";
  var n=arr.length;
 
    for(var i = 0; i < n; i++)
    {
        while ((stack.length != 0) && (stack[stack.length - 1] >= arr[i]))
        {
            stack.pop();
        }

        if (stack.length == 0)
        {
           res += -1 + " "
        }
        else
        {
            res += stack[stack.length - 1] + " "
        }
 
        stack.push(arr[i]);
    }
    return res
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