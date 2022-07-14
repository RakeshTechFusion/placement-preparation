function runProgram(input) {
	input = input.trim().split("\n");
	let mat = [];
	for(let i = 1; i < input.length;i++){
	    mat.push(input[i].trim().split(" ").map(Number));
	    
	}
	let ans = rotateElements(mat);
	showMat(ans);
};
const rotateElements = (mat) => {
    let left = 0;
    let right= mat[0].length - 1;
    let up = 0;
    let down = mat.length - 1;
    let N =mat.length
    for(let i = 0; i<Math.floor(N/2); i++){
        let prev = mat [up + 1][left];
        for(let j = left; j<= right; j++){
            [mat[up][j], prev] = [prev, mat[up][j]];
            
        }
        up++;
        for(let j=up; j<= down; j++){
            [mat[j][right], prev] = [prev, mat[j][right]];
        }
        right--;
        for(let j=right; j>= left; j--){
            [mat[down][j], prev] = [prev, mat[down][j]];
        }
        down--;
        for(let j=down; j>= up; j--){
            [mat[j][left], prev] = [prev, mat[j][left]];
        }
        left++;
    }return mat;
}
const showMat = (mat) => {
    let row = mat.length;
    let col = mat[0].length;
    for(let i=0; i<row;i++){
        let output = "";
        for(let j=0; j<col; j++){
            output += mat[i][j] + " ";
        }
        console.log(output);
    }
}



if (process.env.USERNAME === "") {
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