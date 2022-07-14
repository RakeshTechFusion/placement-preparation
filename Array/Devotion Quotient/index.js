function runProgram(input){
    input = input.trim().split("\n")
    var n = +input[0]
    var line = 1
    var name_arr = [] 
    var d_arr = []
    for(let i = 0 ; i<n ; i++){
        var [name , devotion] = input[line++].split(" ")
        devotion  = +devotion
        name_arr.push(name)
        d_arr.push(devotion)
        
    }
    fun(name_arr,d_arr,n)
}
 function fun(name_arr,d_arr,n){   
    var max = d_arr[0]
    // console.log(max)
    var index = 0
    for(let i = 0 ; i < n ; i++){
        if(d_arr[i] > max){
            max = d_arr[i]
            index = i
        }
        
    }
    
    console.log(name_arr[index])


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
