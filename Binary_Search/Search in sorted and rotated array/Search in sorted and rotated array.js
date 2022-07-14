function runProgram(input){
    input=input.trim().split("\n")
    var [n,key]=input[0].trim().split(" ").map(Number)
    var arr=input[1].trim().split(" ").map(Number)
    var l=0; 
    var h=arr.length-1;
    console.log(search(arr, l, h, key))
}
//Enter code here

function search(arr, l, h, key){
    if (l > h)
        return -1;
 
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] == key)
        return mid;
 
    /* If arr[l...mid] is sorted */
    if (arr[l] <= arr[mid]) {
        if (key >= arr[l] && key <= arr[mid])
            return search(arr, l, mid - 1, key);
        
        return search(arr, mid + 1, h, key);
    }
    if (key >= arr[mid] && key <= arr[h])
        return search(arr, mid + 1, h, key);
 
    return search(arr, l, mid - 1, key);
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