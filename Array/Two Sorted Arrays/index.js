function runProgram(input){
    input=input.trim().split("\n")
    var tc=+input[0];
    var line=1;
    for(var i=0; i<tc ; i++){
        var l=+input[line++];
        var arr=input[line++].trim().split(" ").map(Number)
        var arr1=input[line++].trim().split(" ").map(Number)
        sorted(l,arr,arr1)
    }
    
}

function sorted(l,arr,arr1){
   var count=0;
   var right=l-1;
   var left=0;
   while(left<l && right>=0){
       if(arr[left]==arr1[right]){
           count++
           right--;
           left++;
       }
       else if(arr[left]>arr1[right]){
           right--
       }
       else{
           left++;
       }
   }
    console.log(count)
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