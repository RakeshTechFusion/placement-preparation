function stringModification3(N,str) {
    //write code here
    var a=0;
    var b=0;
    var bag="";
    for(var i=1;i<=N;i++)
    {
        var c=0;
        c=3*i;
        if(c<=N)
        {
            for(var j=c-1;j>=a;j--)
            {
                bag=bag+str[j]+"";
                b++;
            }
            a=b;
        }
    }
   console.log(bag); 

}