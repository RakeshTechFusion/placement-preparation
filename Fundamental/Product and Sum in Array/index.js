function sumOfProducts(N,arr){
    //Write code here
       var sum=0;
       for(var i=0;i<N;i++)
       {
           sum=sum+(arr[i]*(i+1));
       }
       console.log(sum);
    }