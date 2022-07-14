function runProgram(input){
    input=input.trim().split("\n")
   var tc=+input[0];
   var line=1;
   for(var i=0;i<tc;i++){
       var n=+input[line++];
       var arr=input[line++].trim().split(" ").map(Number)
       stock(n,arr)
   }
 
    
    
}
//Enter code here
function stock(n,arr){
    var count=0;
    var bag="";
    for(var i=0;i<n;i++){
        if(i==0){
        count++;
        bag+=count+" ";
        }
        else if(arr[i-1]>arr[i]){
            count++;
            bag+=1+" ";
        }
        else if(arr[i-1]<arr[i]){
            count++;
            var s=0;
            s=count-1;
            bag+=s+" ";
        }
    }
    console.log(bag)
    
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