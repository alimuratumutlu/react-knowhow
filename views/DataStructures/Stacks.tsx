import { CodeBlock, Paragraph } from '@components';

const Stacks = (
  <>
    <Paragraph>
      A stack is a data structure that follows the Last In, First Out (LIFO) principle. Elements are
      added to and removed from the top of the stack, and the most recently added element is always
      the first to be removed. Stacks are used to keep track of function calls, undo and redo
      operations, and other similar tasks.
    </Paragraph>
    <CodeBlock>
      {`//creating a stack
class Stack {
constructor() {
  this.items = [];
}
      
// adding an item to the top of the stack
push(item) {
  this.items.push(item);
}
      
// removing the top item from the stack
pop() {
  return this.items.pop();
}   

// getting the top item from the stack without removing it
peek() {
  return this.items[this.items.length - 1];
}
}
    
// using the stack

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
    `}
    </CodeBlock>
  </>
);

export default Stacks;
