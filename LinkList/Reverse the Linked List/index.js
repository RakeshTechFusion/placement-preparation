const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    if (!head || head && !head.next) {
        return head;
    }
    let first = head;
    let tail = head;
    let second = head.next ;
    while (second) {
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }
    head.next = null;
    head = first;
    return head
}