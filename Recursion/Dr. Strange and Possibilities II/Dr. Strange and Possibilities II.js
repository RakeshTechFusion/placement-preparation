let result=[]
function runProgram(input){
   input=input.trim().split("\n")
   let n= +input[0]
//   var line=1
   let arr=input[1].trim().split(" ").map(Number)
    arr = arr.sort((a,b)=>(a-b))
   strange(arr,n,[],0)
    result.map((item)=>console.log(item))
   
}
function strange(arr,n,ans,k)
{
    if(k<=n){
        if(!result.includes(ans.join(' '))){
            result.push(ans.join(" "))
        }
    }
    for(let i=k;i<n;i++)
    {
        ans.push(arr[i]);
        strange(arr,n,ans,i+1)
        ans.pop()
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