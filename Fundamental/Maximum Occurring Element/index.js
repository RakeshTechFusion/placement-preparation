function maximumOccuringElement(A,N){
    //write code here
    var obj={};
    for (var i=0;i<N;i++)
    {
        // var char=A[i];
        
        if(obj[A[i]]===undefined)
        {
            obj[A[i]]=1;
        }
        else
        {
           obj[A[i]]=obj[A[i]]+1; 
        }
        
    }
    // console.log(details);
    var pad=-Infinity;
    var arr=[];
    for(var k in obj)
    {
        arr.push(obj[k]);
    }
    // var pad=-Infinity;
    for(var l=0;l<N;l++)
    {
        if(pad<arr[l])
        {
            pad=arr[l];
        }
    }
    for(var m in obj)
    {
        if(pad==obj[m])
        {
            console.log(m);
            break;
        }
    }
}