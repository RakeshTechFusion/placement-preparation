function spiralTraversal(N, M, arr){
    //write code here
  var  top=0;
  var left=0;
  var right=M-1;
  var bottom=N-1;
  var bag="";
  var count=0;
  while(count< N*M)
  {
  for(var i=top;i<=bottom && count< N*M;i++)
  {
      bag=bag+arr[i][left]+" ";
      count++;
  }
  left++;
//   console.log(bag);
for(var i=left;i<=right && count< N*M;i++)
{
    bag=bag+arr[bottom][i]+" ";
    count++;
}
bottom--;
// console.log(bag);
for(var i=bottom;i>=top && count< N*M;i--)
{
    bag=bag+arr[i][right]+" ";
    count++;
}
right--;
// console.log(bag);
for(var i=right;i>=left && count< N*M;i--)
{
    bag=bag+arr[top][i]+" ";
    count++;
}
top++;

}
console.log(bag);
}