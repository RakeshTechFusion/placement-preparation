const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
     var newNode = new LinkedListNode(data);
    var current = head;
    
    if (position === 0) {
      newNode.next = current;
      return head = newNode;
    };
    
    var counter, previous, temp;
    
    counter = 0;
    while (counter < position && current) {
        previous = current;
        current = current.next;
        counter++;
    };
    
    
    current 
    
    temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    return head;
}