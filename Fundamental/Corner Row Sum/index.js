function rowSum(N,arr){
    // Write code here
     var sum=0;
        var a=N-1;
        for(i=0;i<N;i++)
        {
            for(var j=0;j<N;j++)
            {
                if(i===0||i===a)
                {
                    sum=sum+arr[i][j];
                }
              
            }
        }
      console.log(sum);
    }