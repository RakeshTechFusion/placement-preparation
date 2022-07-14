function countZerosOnesTwos(N,arr){
    //write code here
    var count=0;
    var count1=0;
    var count2=0;
    var bag="";
    for(var i=0;i<N;i++)
    {
        if(arr[i]===0)
        {
            count++;
        }
        else if(arr[i]==1)
        {
            count1++;
        }
        else
        {
            count2++;
        }
    }
    sum=count+" "+count1+" "+count2;
    console.log(sum);
}