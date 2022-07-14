function twoArrayAndProduct(n, m, matrix, p){
    //write code here
    var product=0;
    var count=0;
    for (var i=0;i<n;i++)
    {
        for (var j=0;j<m;j++)
        {
            if(j<m-2)
            {
                product=matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]
                if(product==p)
                {
                    count++
                }
            }
            if(i<n-2)
            {
                product=matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]
                if(product==p)
                {
                    count++
                }
            }
            if(j<m-2 && i<n-2)
            {
                product=matrix[i][j]*matrix[i+1][j+1]*matrix[i+2][j+2]
                if(product==p)
                {
                    count++
                }
            }
            if(i>=2 && j<m-2)
            {
                product=matrix[i][j]*matrix[i-1][j+1]*matrix[i-2][j+2]
                if(product==p)
                {
                    count++
                }
            }
        }
        
    }
    console.log(count)
  
}