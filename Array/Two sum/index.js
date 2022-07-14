function runProgram(input){
    input=input.trim().split("\n")
    var tc=+input[0]
    var line=1
    for(var i=0;i<tc;i++)
    {
        var [N,K]=input[line].trim().split(" ").map(Number)
        line++
        var arr=input[line].trim().split(" ").map(Number)
        line++
         twoSum(N,K,arr)
    }
   
}
function twoSum(N,K,arr){
     var left=0;
    var right=N-1;
    var flage=false
    while(left<right){
        sum=arr[left]+arr[right]
        if(sum==K)
        {
            flage=true;
            break;
        }
        if(sum>K)
        {
            right--
        }
        if(sum<K)
        {
            left++
        }
    }
   if(flage==true){
       console.log(left,right)
   }
   else 
   {
       console.log("-1","-1")
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