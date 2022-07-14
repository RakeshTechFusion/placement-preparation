function runProgram(input) {
    input=input.trim().split("\n");
    var t=+input[0];
    var step=1;
    while(t>0){
        var [n,k]=input[step++].trim().split(" ").map(Number);
        var arr=input[step++].trim().split(" ").map(Number);
        var arrnew=new Map();
        var min=Number.MAX_VALUE;
        for(var i=0;i<n;i++){
            var arr1=[];
            var sum=0;
            for(var j=0;j<n;j++){
                if(arr[i]>arr[j]){
                    arr1.push((arr[i]-arr[j])*3)
                }
                else{
                    arr1.push((arr[j]-arr[i])*5)
                }
            }
            arr1.sort((a,b)=>a-b);
            for(var u=0;u<k;u++){
                sum+=arr1[u]
            }
            if(min>sum){
                min=sum;
            }
     
        }
        console.log(min);
    t--;
    }
    }
     
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
    