function runProgram(input){
    input=input.trim().split("\n");
    var tc=+input[0];
    var line=1;
    for(var i=0;i<tc;i++)
    {
      var [N,K]=input[line++].trim().split(" ").map(Number);
        var arr=input[line++].trim().split(" ").map(Number);
        // var K=+input[line++];
        //pairReturn(N,K,arr)
        console.log(sumPair (N,K,arr))
    }
    }
    
function sumPair(N,K,arr){

    arr.sort(function (a,b){
        return a-b
    })
    //console.log(arr)
    array=[]
    left = 0
    var sum=0;
    right =N-1
    while (left < right)
        {
        var sum = arr[left] + arr[right]
         if (sum == K) 
        {
            return "1"
            break;
            
        }
        else if (sum > K)
        {
             right --
        }
        else
        {
             left++
        }
        
    }
    return "-1"

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