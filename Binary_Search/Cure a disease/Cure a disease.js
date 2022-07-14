function runProgram(input){
    input=input.trim().split("\n")
    //console.log(input)       //[ '5', '123 146 454 542 456', '100 328 248 689 200' ]
    let N=+input[0]
    let arr1=input[1].trim().split(" ").map(Number)
    let arr2=input[2].trim().split(" ").map(Number)
    //console.log(arr1,arr2)
    cureDisease(N,arr1,arr2)
    
}
     let count=0
     function cureDisease(N,arr1,arr2){
         for (let i=0;i<N;i++){
             if(arr1[i]>arr2[i]){
                 count++
             }
         }
         //console.log(count)
         if(count==N)
         {
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