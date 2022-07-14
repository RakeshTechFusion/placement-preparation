function runProgram(input){
    const matriz = input.split('\n')[1].split(' ').map((num) => parseInt(num)).sort((a, b)=>{
  return a - b;
})
    const array = input.split('\n')
    let responses = []
    array.splice(0,2)
    const arrayInt = array.map((num) => parseInt(num))
    for(let i= 0 ; i < arrayInt.length; i++){
      responses.push(binarySearch(matriz , arrayInt[i]) === -1 ? 'NO':'YES' )   
    }
    
    console.log(responses.join('\n'))
}
function binarySearch ( arrayList , item ) {
 
    let start  = 0;
    let end = arrayList.length-1;
    let indexFound = -1;
 
    while (start <= end ) { 
 
            const middle =  Math.floor((end+start) / 2);
            const m =  arrayList[middle]  
            
            if(m === item) {
                indexFound = middle;
                return indexFound;
            } 
 
            item > m ?  start = middle + 1 : end = middle - 1;      
    }
 
    return indexFound;
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