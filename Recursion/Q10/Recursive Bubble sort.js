function runProgram(input){
    var data = input.trim().split("\n");
    var n = Number(data[0]);
    var arr = data[1].split(" ").map(Number);
    (check(arr,n));
      console.log(arr.join(" "))
} 
 function check(arr, n)
{
    if (n === 1)
        return;
    for (var i = 0; i < n - 1; i++)
        if (arr[i] > arr[i + 1])
        {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    return check(arr, n - 1);

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});