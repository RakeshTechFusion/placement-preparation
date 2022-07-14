function runProgram(input) {
    // Write code here
    input=input.split("\n")
    let str=input[0].split("").map(Number);
    console.log(evencount(str))
  }
  function evencount(str){
     let index=0;
     let arr=[];
     while(index<str.length){
         let count=0;
         for(let i=index;i<str.length;i++){
             if(str[i]%2===0){
                 count++
             }
         }
         arr.push(count);
         index++;
     }
     return arr.join(" ")
     
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