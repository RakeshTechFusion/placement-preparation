const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
function deleteNode(node){
    var temp = node.next;
        node.data = temp.data;
        node.next = temp.next;
}
function printList(node){
        while (node != null){
            console.log(node.data + " ");
            node = node.next;
        }
    }