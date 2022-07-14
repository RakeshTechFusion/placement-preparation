function runProgram(input){
    input=input.trim().split("\n")
     
    var [n,x]=input[0].trim().split(" ")
    var arr=input[1].trim().split(" ")

     arr.sort(function(a,b){
    return a-b
 })
    var l = 0, r = arr.length - 1;
    console.log(recSearch(arr, l, r, x))
}

function recSearch(arr, l, r, x)
{
    if (r < l)
        return -1;
    if (arr[l] == x)
        return 1;
    if (arr[r] == x)
        return 1;
     return recSearch(arr, l+1, r-1, x);
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