import { CodeBlock, Paragraph } from '@components';

const Queues = (
  <>
    <Paragraph>
      A queue is a data structure that follows the First In, First Out (FIFO) principle. Elements
      are added to the back of the queue and removed from the front, and the oldest element is
      always the first to be removed. Queues are used to manage tasks in a system, such as printing
      jobs or network requests.
    </Paragraph>
    <CodeBlock>
      {`// creating a queue
class Queue {
  constructor() {
    this.items = [];
  }

  // adding an item to the back of the queue
  enqueue(item) {
    this.items.push(item);
  }

  // removing the first item from the queue
  dequeue() {
    return this.items.shift();
  }

  // getting the first item from the queue without removing it
  peek() {
    return this.items[0];
  }
}

// using the queue
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();`}
    </CodeBlock>
  </>
);

export default Queues;
