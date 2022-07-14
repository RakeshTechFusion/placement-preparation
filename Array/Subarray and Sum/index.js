function runProgram(input){
    input=input.split("\n")
    var [n,k]=input[0].trim().split("\n")
    var array=input[1].trim().split().map(Number)
   // console.log(n,k)
    
   console.log(longestSubarrays(array, k))
}
//Enter code here
function longestSubarrays(array,k){
    var left = -1
    var right = 0
    var sum = 0;
    for (i = 0;i<array.length;i++){
        if (array[i] % k != 0){
            if (left == -1) left = i
            right = i
        }
        sum += array[i]
    }
    if (sum % k != 0) return 1 
    if (left == -1) return 0
    left = left + 1
    right = array.length - right
    var max_window_size = array.length - min(left,right)
    return window_size

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