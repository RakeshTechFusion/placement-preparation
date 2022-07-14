var st=[]
var cd=""
function runProgram(input){
        input = input.trim().split("\n");
        var N = +input[0];
        var l=1
        for(var i=0; i<N; i++){
          var c=input[l++].trim().split(" ");
            add(c,N)
        }
}
       function add(c,N){
            if(c[0]=="E"){
                 st.push((c[1])) 
                  cd=st
                 console.log(st.length)
            }
            else if(c[0]=="D"){
               
                var dss=st.length
                if(st.length==0){
                    
                    console.log("-1","0")
                }
                else {
                     var ds=st.shift()
                     console.log(ds,st.length)
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