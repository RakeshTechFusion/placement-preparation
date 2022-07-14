function runProgram(input){
    input=input.trim().split("\n")
    var tc=+input[0]
    var line=1;
    for(var i=0;i<tc;i++){
        var length=input[line++]
        var arr=input[line++].trim().split(" ").map(Number)
        sum(length,arr)
    }
    
}
//Enter code here
function sum(length,arr){
    var bag=[];
    for(var i=0;i<length;i++){
        var sum=0;
        while(arr[i]>0){
            var remain=arr[i]%10;
            sum+=remain;
            arr[i]=Math.floor(arr[i]/10)
        }
        bag.push(sum)
    }
    print(bag)
}
function print(bag){
    var bag1="";
    for(var i=0;i<bag.length;i++)
    {
        bag1+=bag[i]+" "
    }
    console.log(bag1)
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