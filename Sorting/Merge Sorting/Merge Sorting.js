function runProgram(input){
    input=input.trim().split("\n")
    var n=input[0]
    var array=input[1].trim().split(" ").map(Number)
    console.log(mergeSort(array).join(" "))
}
//Enter code here
const _mergeArrays = (a, b) => {
  const c = []

  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift())
  }
  while (a.length) {
    c.push(a.shift())
  }
  while (b.length) {
    c.push(b.shift())
  }

  return c
}

const mergeSort = (array) => {
  if (array.length < 2) return array
  const middle = Math.floor(array.length / 2)
  const a_l = array.slice(0, middle)
  const a_r = array.slice(middle, array.length)
  const sorted_l = mergeSort(a_l)
  const sorted_r = mergeSort(a_r)
  return _mergeArrays(sorted_l, sorted_r)
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