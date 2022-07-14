function substringsStartingWithK(N,A,K){
    var count=0;
    for(var i=0;i<N;i++){
        for(var j=i;j<N;j++){
            if(A[i]==K){
                count++;
            }
        }
    }
    console.log(count)
}