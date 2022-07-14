function rep(p){
    var result =0;
    for(var i =0;i<p.length;i++){
        result+=parseInt(p[i]);
   }
    return result;
}
function superd(p){
    if(p.length==1)return p;
    
    return superd(rep(p)+"");
}
function processData(input) {
    //Enter your code here
    var arr=input.split(' ');
    var i =arr[0];
    var n =parseInt(arr[1]);
    
    var p =parseInt(superd(i))*n;
    
    console.log(superd(p+""));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});