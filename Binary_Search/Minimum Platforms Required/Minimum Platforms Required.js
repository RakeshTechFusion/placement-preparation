function runProgram(input){
    input = input.trim().split('\n')
    let n = +input[0];
    let arr = input[1].trim().split(' ')
    let dep = input[2].trim().split(' ')
    findMin(arr, dep, n)
}
function findMin(arr, dep, n){
let result = 1;
let count = 1;
arr  = arr.map((elem)=>Number(elem.split(':').join('.')))
dep  = dep.map((elem)=>Number(elem.split(':').join('.')))


for(let i=0; i<n; i++){
   count = 1
   for(let j=i+1; j<n; j++){
       if((arr[i] >= arr[j] && arr[i] <= dep[j]) ||
       (arr[j] >= arr[i] && arr[j] <= dep[i])){
           count++;
       }
   }
   result = Math.max(result, count)
}
console.log(result)
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