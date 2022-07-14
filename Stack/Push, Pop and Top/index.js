var arr = [];
        var top = -1;
function runProgram(input){
        input = input.trim().split("\n");
        var N = +input[0];
        for(var i=0; i<N; i++){
            var [a,b] = input[i+1].trim().split(" ").map(Number);
            if(a==1){
                push(arr, b);
            }
            else if(a==2){
                pop();
            }
            else if(a==3){
                peek();
            }
        }
}

function push(arr, data){
    top++;
    arr[top]=data;
}

function pop(){
    if(top==-1){
        return;
    }
    else{
        top--;
    }
}

function peek(){
    if(top == -1){
        console.log("Empty!")
    }
    else{
        console.log(arr[top]);
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