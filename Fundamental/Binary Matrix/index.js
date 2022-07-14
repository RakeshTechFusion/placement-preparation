function binaryMatrix(N,M, matrix) {
    //write code here
    for(let i=0;i<N;i++)
    {
        var bag="";
        for(let j=0;j<M;j++)
        {
            if(matrix[i][j]===0)
            {
                bag=bag+1+" ";
            }
            else if(matrix[i][j]=="1")
            {
                bag=bag+0+" ";
            }
        }
        console.log(bag)
    }
  } 