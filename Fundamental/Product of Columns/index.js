function productOfColumns(N,M,arr){
    //write code herev
    for(var i=0; i<M;i++)
    {
        var product=1;
        for(var j=0;j<N;j++)
        {
            product=product*(arr[j][i]);
        }
        console.log(product);
    }
}