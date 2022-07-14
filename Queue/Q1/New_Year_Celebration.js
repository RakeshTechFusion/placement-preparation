function runProgram(input){
    
    input = input.trim().split("\n");
    
    var l = +input[0];
    var line = 1;
    var que = [];
    var f = -1;
    var r = -1;
    var stack = [];
    var top = -1;
    for(let i = 0;i<l;i++)
    {
        var arr = input[line++].trim().split(" ").map(Number);
        
        if(arr[0]==1&&arr[1]!=undefined)
        {
            r++;
            que[r] = arr[1];
            
            
        }
        else if(arr[0]==2&&arr[1]!=undefined)
        {
             top++;
             stack[top]=arr[1];
        }
        else if(arr[0]==3&&r>=0)
        {
            f++;
            console.log(que[f]);
            
        }
        else if(arr[0]==4&&top>=0)
        {
            console.log(stack[top]);
            // top--;
        }
        else if(arr[0]==5)
        {
            top++;
            stack[top] = que[f];
            // f--;
        }
        else if(que.length===0||stack.length==0)
        {
            console.log("-1");
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