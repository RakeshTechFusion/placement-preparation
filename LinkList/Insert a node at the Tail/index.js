const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let node=new LinkedListNode(data)
    let temp=head
    if(head===null){
        head=node
    }
    else{
        while(temp.next!==null){
            temp=temp.next
        }
        temp.next=node
        node.next=null
    }
    return head
}