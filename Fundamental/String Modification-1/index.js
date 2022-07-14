function stringModification(N,str) {
    //write code here
    let a="",b="",c="";
    for(let i=0;i<Math.floor((str.length/2));i++)
    {
        a=a+str[i];
    }
    for(let j=Math.floor((str.length/2));j<N;j++)
    {
        b=b+str[j];
    }
    c=b+a;
    console.log(c);
    

}