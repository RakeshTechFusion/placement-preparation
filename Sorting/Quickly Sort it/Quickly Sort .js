function runProgram(input){
    input=input.trim().split("\n")
    var n=input[0];
    var A=input[1].split(" ").map(Number);
     console.log(quickSort(A).join(" "))
    
}
//Enter code here
function quickSort(A) {
	var smaller = []; var larger = [];
	if (A.length <= 1)
		return A;
	
	for (var i = 1; i < A.length; i++) { 
		if (A[i] < A[0])
			smaller.push(A[i]); 
		if (A[i] >= A[0]) 
			larger.push(A[i]); 
	}
	return quickSort(smaller).concat(A[0], quickSort(larger));
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