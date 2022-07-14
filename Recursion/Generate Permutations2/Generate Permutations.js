function runProgram(input){
    
    input= input.trim().split("\n");
    
    var n = +input[0];
    
    var str = input[1];
    
    generatePermutations(n,str)
}  
        function generatePermutations(n,str)
        {
        function gp(str1, a) 
        {
         if (str1.length === 0) 
         {
            console.log(a.split("").join(" "));
         }

    for (let i = 0; i < str1.length; i++) 
    {
      let num = str1[i];
      let left= str1.slice(0, i);
      let right= str1.slice(i + 1);
      let fixd = left + right;
      gp(fixd, a + num);
    }
}

let a = "";
str1=str.replace(/ /g,'');
gp(str1, a);
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