function solve(N,arr){
    //write code here
    for(var i=0;i<N;i++)
    {
      var index=i;
      var temp;
        for(var j=i+1;j<N;j++)
        {
            if(arr[j]<arr[index])
            {
                index=j;
            }
            
        }
        temp=arr[i];
        arr[i]=arr[index];
        arr[index]=temp;
    }
        console.log(arr.join(" "));
}