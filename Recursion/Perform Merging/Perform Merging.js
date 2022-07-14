function runProgram(input){
    input=input.trim().split("\n")
    var arr1=input[1].split(" ").map(Number);
    var arr2=input[2].split(" ").map(Number);
    var n=arr1.length;
    var m=arr2.length;
    console.log(mergeArrays( arr1, arr2, n, m).join(" ") )
}
//Enter code here
function mergeArrays( arr1, arr2, n, m) { 
    var i = n-1
    var j = m-1
    var k = n+m-1
    while (i >= 0 & j >= 0) { 
        if (arr1[i] > arr2[j]) {
            arr1[k] = arr1[i]
            i = i - 1 
        }
        else{
            arr1[k] = arr2[j]
            j = j - 1
        }
        k = k - 1
    }
    while (i >= 0){
        arr1[k] = arr1[i]
        i = i - 1
        k = k - 1
    } 
    while (j >= 0){
        arr1[k] = arr2[j]
        j = j - 1
        k = k - 1
    } 
    return arr1
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