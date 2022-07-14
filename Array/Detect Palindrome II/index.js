function runProgram(input){
    input=input.trim().split("\n");
    var length=input[0];
    var str=input[1].split(" ").map(Number)
    detectPalindrome(str)
}
// function detectPalindrome(length,arr)
// {
//     for(let i=0; i<length/2;i++)
//     {
//         if(arr[i]!==arr[length-1-i])
//         {
//             console.log("Possible!")
//         }
//         // else{
//         //      console.log("Not Possible!")
//         // }
//     }
//     console.log("Not Possible!")
// }
function detectPalindrome(str) {
var newString = "";
for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]; //or str.charAt(i)
}
//console.log(newString);
if(newString === str){
    console.log('Possible!');
    
}else
{
    console.log('Not Possible!');
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