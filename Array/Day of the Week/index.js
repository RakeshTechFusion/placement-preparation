function dayOfTheWeek(day, N) {
    //write code here
    var arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var obj={};
    
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]==day)
        {
            var dayIndex=i
        }
    }
    var sum=(N+dayIndex)%7;
    console.log(arr[sum]);
    
  }