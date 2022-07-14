const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
      if (!head) {
        return head;
    }
    
    if (position === 0) {
        return head.next;
    }
    
    let current = head;
    let next = head.next;
    let counter = 1;
    
    while (next != null && counter < position) {
        current = current.next;
        next = next.next;
        counter++;
    }
    
    if (next) {
        current.next = next.next;
    }
    
    return head;
}