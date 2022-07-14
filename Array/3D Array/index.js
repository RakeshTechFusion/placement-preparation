//Enter code here
function runProgram(input){
    input=input.trim().split("\n")
    var [N,row,col] = input[0].trim().split(" ").map(Number)
    var arr=input[1].trim().split(" ").map(Number)
    
        addnumber(N,row,col,arr)
}


function addnumber(N,row,col,arr)
{
    var c=0;
    while(c<arr.length){
        for(var i=0;i<N && c<arr.length;i++){
            var bag="";
            for(var j=0;j<col && c<arr.length;j++){
                bag=bag+arr[c]+" ";
                c++;
            }
            console.log(bag)
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
