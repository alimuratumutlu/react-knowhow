import { CodeBlock, Paragraph } from '@components';

const Graphs = (
  <>
    <Paragraph>
      A graph is a collection of nodes and edges that can be connected in any way. Graphs are used
      to represent complex relationships between elements, such as social networks, road networks,
      and communication networks.
    </Paragraph>
    <Paragraph>
      Let&apos;s create a simple social network as a graph using JavaScript. We can represent each
      user as a node in the graph, with their connections to other users as its edges.
    </Paragraph>
    <CodeBlock>
      {`class Node {
constructor(name) {
  this.name = name;
  this.connections = [];
}

addConnection(node) {
  this.connections.push(node);
}
}

// Create users
const user1 = new Node("User 1");
const user2 = new Node("User 2");
const user3 = new Node("User 3");

// Connect users
user1.addConnection(user2);
user2.addConnection(user3);
user3.addConnection(user1);
    `}
    </CodeBlock>
    <Paragraph>
      In this example, we create a Node class that represents each user in the social network. We
      create three users, user1, user2, and user3, and connect them to each other using the
      addConnection method. We represent the connections between users as edges in the graph.
    </Paragraph>
  </>
);

export default Graphs;
