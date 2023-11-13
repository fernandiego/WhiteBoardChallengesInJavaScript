class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

function printLinkedList(head) {
  let current = head;

  while (current) {
    console.log(current.data);
    current = current.next;
  }
}

// Example usage:

const linkedList = new LinkedList();
linkedList.insertNode(1);
linkedList.insertNode(2);
linkedList.insertNode(3);

printLinkedList(linkedList.head);
