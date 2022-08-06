function runProgram(input){
    input=input.trim().split("\n");
    let n=+input[0];
    for(let i=0,line=1;i<n;i++){
        let s=input[line++];
        console.log(valid(s))
    }
}
function left(s){
    let left=0;
    let right=s.length-1;
    let count=0;
    while(left<right){
        if(s[left]==s[right]){
            left++;
            right--;
        }
        else{
            count++;
            left++;
        }
    }
    return count<=1;
}
function right(s){
    let left=0;
    let right=s.length-1;
    let count=0;
    while(left<right){
        if(s[left]==s[right]){
            left++;
            right--;
        }
        else{
            count++;
            right--;
        }
    }
    return count<=1;
}
 function valid(s) {
    if(  left(s)||right(s)){
        return "YES";
    }
    return "NO";
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