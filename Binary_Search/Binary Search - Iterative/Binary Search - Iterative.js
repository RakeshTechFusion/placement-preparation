function runProgram(input){
    input=input.trim().split("\n")
     
    var [n,x]=input[0].trim().split(" ")
    var A=input[1].trim().split(" ")
    
    console.log(IterativeFunction(A, x))
}




function IterativeFunction(A, x) {
 A.sort(function(a,b){
    return a-b
 })
        var low = 0, high = A.length - 1;
		while (low <= high)
		{
			var mid = Math.floor((low + high) / 2);
			if (x == A[mid]) {
				// return mid
					return 1;
			}
			else if (x < A[mid]) {
				high = mid - 1;
			}
			else {
				low = mid + 1;
			}
		}
	return -1;
	
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