function runProgram(input){
    input=input.trim().split("\n")
    var line=1;
    var tc=input[0];
    for(let i=0;i<tc;i++){
        var A=input[line++]
        console.log(uniqueGift(A));
    }
    
}
//Enter code here
function uniqueGift(A){
    const hash = {};
        let pointer = 0;
        let result = '';
        
        for(let i = 0; i < A.length; i++) {
            const curr = A.charAt(i);
            
            if (hash[curr] === undefined) {
                hash[curr] = 1;
            } else {
                hash[curr]++;
            }
            
            let fnr = A.charAt(pointer);
            while(hash[fnr] > 1) {
                pointer++;
                fnr = A.charAt(pointer);
            }
            if (hash[fnr] === 1) {
                result += fnr;                
            } else {
                result += "#";
            }

        }
        
        return result;
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