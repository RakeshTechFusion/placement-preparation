function runProgram(input){
    input=input.trim().split("\n")
    var length=input[0].trim().split(" ").map(Number)
    var arr=input[1].trim().split(" ").map(Number)
      console.log( Minimuminsortedrotatedarray(arr)) 
}

function  Minimuminsortedrotatedarray(arr) {

    if(arr.length === 0 || arr === null) {
        
    return -1;
    }

    var low = 0;
    var high = arr.length-1;

    while(low < high){
        var mid = Math.floor((low+high)/2);
        if(arr[mid]>arr[high]){
            low = mid+1;
        }else{
            high = mid;
        }
    }

      return arr[high]
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