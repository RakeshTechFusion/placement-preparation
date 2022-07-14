function soapShop(n, arr, q, m){
    
    
    function iterativeBinary(array, low, high, element){
        var output = 0;
        while(low<=high){
            middle = Math.floor(low + (high-low)/2);
            
            if(array[middle]<element){
                output = middle+1;
            }
            if(array[middle]<element){
                low = middle + 1;
            }
            else{
                high = middle -1;
            }
        }
        return output;
    }
    
    for(var i=0; i<q; i++){
        var k = m[i];
        console.log(iterativeBinary(arr, 0, n, k));
    }
    
}
 
 
 
function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var q = +input[2];
    var line = 3;
    var m = [];
    for(var i=0; i<q; i++){
        m.push(+input[line]);
        line++;
    }
    arr.sort(function(a,b){return a-b})
    soapShop(n, arr, q, m);
    // console.log(n, q, arr, m)
  }
 
  if (process.env.User === "admin") {
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