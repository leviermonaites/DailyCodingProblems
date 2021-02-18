/*
This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

class Node {
  static _lastCreated;
  constructor(val, childOf) {
    this.val = val;
    this.left = null;
    this.right = null;

    if (childOf) {
      if (childOf.left) {
        if (childOf.right) throw new Error('Node full');
        else childOf.right = this;
      } else {
        childOf.left = this;
      }
    }
  }

  serialize() {
    return JSON.stringify(this);
  }

  deserialize(serializedNode) {
    return JSON.parse(serializedNode);
  }
}

const node = new Node('root');
const node2 = new Node('left', node);
const node3 = new Node('right', node);

const node4 = new Node('left.left', node2);

console.log(node.deserialize(node.serialize()).left.left.val);