const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
  

    var newNode = new LinkedListNode(data);

    if(head==null){
        head = newNode;
        return head;
    }else{
        newNode.next = head
        head = newNode;
        return head;
    }



}
