import { CodeBlock, Paragraph } from '@components';

const LinkedLists = (
  <>
    <Paragraph>
      A linked list is a collection of elements, each containing a value and a pointer to the next
      element in the list. Linked lists are used to store data of any type and can be easily
      modified by adding or removing elements. However, accessing an element in a linked list
      requires traversing the list from the beginning, which can be time-consuming.
    </Paragraph>

    <CodeBlock>
      {`// creating a linked list node
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// creating a linked list
class LinkedList {
  constructor() {
    this.head = null;
  }

  // adding a node to the end of the list
  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  // removing a node from the list
  remove(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}

// using the linked list
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.remove(2);`}
    </CodeBlock>
  </>
);

export default LinkedLists;
