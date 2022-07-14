function runProgram(input){
    input=input.split("\n");
    var N=+(input[0]);
    var arr=input[1].split(" ").map(Number);
    var K=+(input[2]);
    magic(N,arr,K);
    
    
}

function magic(N,arr,K)
{
    let count=0;
    let start=-1;
    let end=-1;
    for(var i=0; i<N; i++)
    {
        if(K!==arr[i])
        {
            continue
        }
        if (start == -1)
        {
                start = i;
        }
            end = i;
            count++;
        }
        if (start != -1)
        {
            console.log(start,end,count);
  
        }
        else
        {
             console.log("Not Found");
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