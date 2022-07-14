function runProgram(input){
    input = input.trim().split("\n")
    var tc = +input[0]
    var line = 1
    for(var i = 0 ; i < tc ; i++){
        // var virat = 0
        // var ab = 0
        var overs = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        check(overs , arr , 0 , 0)
    }
    
}
function check(overs , arr , virat , ab){
    var count = 1 ;
    var next_strike = "ab"
    for(var i = 0 ; i < arr.length ; i++){
        if(next_strike == "ab"){
            ab = ab + arr[i]
            if(arr[i]%2 == 1){
                next_strike = "virat"
            }
        }
        else{
           virat = virat + arr[i] 
           if(arr[i]%2 == 1){
                next_strike = "ab"
            }
        }
        count++
        if(count > 6){
            count = 1
            if(next_strike == "ab"){
                next_strike = "virat"
            }
            else{
                next_strike = "ab"
            }
        }
        
        
    }
    if(virat > ab){
        console.log("Virat Kohli")
    }
    else if(ab > virat){
        console.log("AB de Villiers")
    }
    else{
        console.log("Tie")
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