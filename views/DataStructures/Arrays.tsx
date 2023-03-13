import { CodeBlock, Paragraph } from '@components';

const Arrays = (
  <>
    <Paragraph>
      An array is a collection of elements, each identified by an index or a key. Arrays are
      typically used to store data of the same type, such as a list of numbers or a list of strings.
      Arrays are a simple and efficient data structure, but they can be limited in their
      flexibility, as their size is fixed when they are created.
    </Paragraph>
    <CodeBlock>
      {`// creating an array
const myArray = [1, 2, 3, 4, 5];

// accessing an element in an array
const secondElement = myArray[1];

// adding an element to the end of an array
myArray.push(6);

// removing an element from the end of an array
myArray.pop();`}
    </CodeBlock>
  </>
);

export default Arrays;
