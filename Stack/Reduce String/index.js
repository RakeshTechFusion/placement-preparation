function runProgram(input){
    N = input.length

string = ""
for(i=0;i<N;i++){
  count = 0;
  if(input[i]==input[i+1]){
      i++
  }
  else{
      string = string + input[i]
  }
}
if(string != ""){
  console.log(string)
}
else{
  console.log("Empty String")
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