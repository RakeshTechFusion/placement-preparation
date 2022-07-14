function runProgram(input){
  
    input=input.trim().split("\n")
    var arr=input[0].trim().split(" ")
       var arr1= input[1].trim().split(" ")
       target(arr,arr1)
}

      function target(arr,arr1){
          var b=[]
          var c=[]
             for(var i=0; i<arr[0].length;  i++){
                 b.push(arr[0][i])
                 c.push(arr1[0][i])
             }
             b.sort()
             c.sort();
           a= b.join("")
            d= c.join("")
            // console.log(a,d)
              if(a==d){
                  console.log("Yes")
              }
              else{
                  console.log("No")
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