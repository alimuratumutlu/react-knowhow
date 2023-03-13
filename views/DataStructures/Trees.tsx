import { CodeBlock, Paragraph } from '@components';

const Trees = (
  <>
    <Paragraph>
      A tree is a hierarchical data structure that consists of nodes connected by edges. Each node
      contains a value, and the edges define the relationship between the nodes. Trees are used to
      represent hierarchical relationships, such as the structure of a file system or the
      organization of a company.
    </Paragraph>
    <Paragraph>
      Let&apos;s create a simple file system hierarchy as a tree using JavaScript. We can represent
      each directory as a node in the tree, with its children directories and files as its edges.
    </Paragraph>
    <CodeBlock>
      {`class Node {
constructor(name) {
  this.name = name;
  this.children = [];
}

addChild(node) {
  this.children.push(node);
}
}

// Create root directory
const root = new Node("root");

// Create subdirectories and files
const dir1 = new Node("dir1");
const dir2 = new Node("dir2");
const file1 = new Node("file1.txt");
const file2 = new Node("file2.txt");

// Add subdirectories and files to root directory
root.addChild(dir1);
root.addChild(dir2);
root.addChild(file1);
root.addChild(file2);

// Create subdirectories and files for dir1
const dir1_1 = new Node("dir1_1");
const dir1_2 = new Node("dir1_2");
const file1_1 = new Node("file1_1.txt");
const file1_2 = new Node("file1_2.txt");

// Add subdirectories and files to dir1
dir1.addChild(dir1_1);
dir1.addChild(dir1_2);
dir1.addChild(file1_1);
dir1.addChild(file1_2);      `}
    </CodeBlock>
  </>
);

export default Trees;
