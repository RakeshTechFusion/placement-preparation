const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

var deleteDuplicates = function(head) {
    
     var res = head;
    if(!head){
        return null;
    }
    
    while(head.next != null){
        if(head.data == head.next.data){
            head.next = head.next.next;
        }else{
            head = head.next;
        }
    }
    return res;
    
};