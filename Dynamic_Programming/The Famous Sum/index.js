//Enter code here
function runProgram(input) {
    let ds = 0;
    let idx = input.lastIndexOf(' ');
    let k = parseInt(input.slice(idx, input.length));
    for (let i = 0; i < idx; i++) {
        ds += k * parseInt(input[i]);
    }
    while (ds > 9) {
        ds = String(ds).split('').map(e => { return parseInt(e); }).reduce((acc, i) => { return acc + i; }, 0);
    }
    console.log(ds);
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
