function runProgram(input){ 
    input=input.trim().split("\n")
    //console.log(input)
    tc=+input[0]
    line=1
    for(var i=0;i<tc;i++)
    {
        var length=+input[line++]
        var mat=[]
        for (var j=0;j<length;j++)
        {
            mat.push(input[line++].trim().split(" ").map(Number))
        }
        numArray(length,mat)
        //console.log(length,mat)
    }
    
    
    function numArray(length,mat){
         var top=0;
        var left=0;
        var right=length-1;
        var bottom=length-1;
        var count=0;
        var bag="";
        while(count<length*length)
        {
            for(var i=bottom;i>=0 ;i--)
            {
               bag+=mat[i][left]+" "
                count++
            }
            left++
            //console.log(bag)
            for(i=left;i<=right  ;i++)
            {
                bag+=mat[top][i]+" "
                count++
            }
            top++
            for (i=top;i<=bottom ;i++)
            {
                bag+=mat[i][right]+" "
                count++
            }
            right--
            for(i=right;i>=left ;i--)
            {
                bag+=mat[bottom][i]+" "
                count++
            }
           bottom--
            break;
           
        }
         console.log(bag)
        
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