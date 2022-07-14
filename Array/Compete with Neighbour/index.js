function runProgram(input){
    var input=input.trim().split("\n")
        var n= +input[0]
        
        var l=input[1].trim().split(" ").map(Number)
           
           competeWithNeighbour(n,l)
}    
            
    function competeWithNeighbour(n,l){
        var d=[]
        var c=0;
        for(var i=0; i<l.length; i++){
             
               if(i==0  || i==l.length-1){
                   if(i==0){
                   if(l[i]>l[i+1]){
                       c++
                   }
                   }
                   else {
                       if(l[l.length-1]>l[l.length-2]){
                           c++
                       }
                   }
                   
               }
               else {
              if(l[i]>l[i-1] && l[i]>l[i+1]){
                  c++
              }
               }
         }
         console.log(c)
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