//Enter code here
function runProgram(input) {
    var inp=input.split("\n")
    var t=+inp[0]
    var l=1
    for(var i=0;i<t;i++){
        ques=+inp[l]
        l++
        console.log(min_pages(ques))
    }
    }
    function min_pages(n){
    var count = 0;
     
      while(n > 0)
      {
        if(n%12 == 0)
        {
          count += n/12;
          return count;
        }
        else
        {
          n = n - 10;
          count++;
        }
      }
     
    if(n == 0)
    {
      return count;
      }
      else
      {
        return -1
          
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
  