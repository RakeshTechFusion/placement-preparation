function averagesOfPrime(num){
	//Enter Code Here
    var sum=0;
    var x=0;
    for(let i=1;i<=num;i++)
    {
        var count=0;
        for(let j=2;j<=num;j++)
        {
            if(i%j===0)
            {
                count++;
            }
        }
        if(count==1)
        {
            sum=sum+i;
            x++;
        }
        
    }
	console.log(Math.floor(sum/x));
	
}