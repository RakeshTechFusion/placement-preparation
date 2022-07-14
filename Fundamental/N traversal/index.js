function nTraversal(matrix) {
    var n=matrix.length;
    var temp="";
        for(var j=0;j<n;j++){
           for(var i=n-1;i>=0;i--){
      if(j==0||j==n-1||i-j==0)
    temp+=matrix[i][j]+" ";
      }
    }
    console.log(temp);
  }