function partyPlanning(N,PamID,M,JimID){
    //write code here
   let arr=[...new Set(JimID)];
   let arr2=[...new Set(PamID)];
   arr.sort((a,b)=>a-b)
   arr2.sort((a,b)=>a-b)
   if(arr.join("")===arr2.join("")){
       console.log("Yes")
   }
   else{
       console.log("No")
   }
}