const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
      var slow=head;
    var fast=head;
    while(slow&&fast&&fast.next){
        
       
        slow=slow.next;
        fast=fast.next.next;
         if(slow==fast){
            return "true"
        }
        
    }
    return false;
};
