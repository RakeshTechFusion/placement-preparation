function solve(N,arr){
    //write code here
   for(i=0;i<N;i++)
    {
        for(j=0;j<N-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                var temp=arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=temp;
                    
            }
        }
        
    }console.log(arr.join(" "));
}