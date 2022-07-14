function runProgram(input){
    input=input.trim().split("\n")
    n=+input[0]
    array=input[1].trim().split(" ").map(Number)
    console.log(rev(mergeSort(array)))
}
function merge(left, right) {
    let arr = []
    
    while (left.length && right.length) {
      
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
  
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  const half = array.length / 2
  
  
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
function rev(arr){
    var bag=""
    for(i=0;i<arr.length;i++){
        bag=arr[i]+" "+bag
    }
    return bag;
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