function runProgram(input){
    input=input.split("\n");
    var n=+input[0];
    var cbag=input[1].split(" ").map(Number);
    var hbag=input[2].split(" ").map(Number);
    masaiAirline(n,cbag,hbag);
}
    function masaiAirline(n,cbag,hbag)
    {
        for(let i=0;i<n;i++)
        {
            if(cbag[i]<=15 && hbag[i]<=7)
            {
                 console.log("Boarding");
            }
            else{
                  console.log("Stop");
            }
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