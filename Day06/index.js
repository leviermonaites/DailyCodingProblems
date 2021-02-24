/*
    This problem was asked by Google.

    An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

    If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.
*/

class XORlinkedList {
    constructor(data, childOf) {
        this.data = data;
        this.both = [];

        if(childOf instanceof XORlinkedList) {
            if(childOf.both.length < 2) {
                childOf.add(this);
            } else {
                throw new Error("Node fulfilled");
            }
        } 
    }

    add(element) { 
        return this.both.push(element);
    }

    get(index) {
        return this.both[index];
    }
}

const root = new XORlinkedList(1);
const node2 = new XORlinkedList(2, root);
const node3 = new XORlinkedList(3, root);

console.log(root.get(1));