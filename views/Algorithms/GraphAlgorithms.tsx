/* eslint-disable no-useless-escape */
import { CodeBlock, Paragraph, SectionTitle } from '@components';

const GraphAlgorithms = (
  <>
    <Paragraph>
      Graph algorithms are used to solve problems that involve relationships between objects. Graphs
      are collections of nodes (also known as vertices) and edges, where edges represent the
      relationships between the nodes. Graph algorithms can be used to solve a wide variety of
      problems, such as finding the shortest path between two nodes, finding the minimum spanning
      tree of a graph, or finding cycles in a graph.
    </Paragraph>
    <Paragraph>
      There are many different types of graph algorithms, each with its own strengths and
      weaknesses, and each designed to solve specific problems.
    </Paragraph>
    <Paragraph>
      In general, a graph algorithm is a way of analyzing the relationships between nodes in a
      graph.
    </Paragraph>
    <SectionTitle>Breadth-First Search</SectionTitle>
    <Paragraph>
      Breadth-first search is a searching algorithm that starts at the root node and explores all
      the neighboring nodes at the current depth before moving on to nodes at the next depth.
    </Paragraph>
    <CodeBlock>
      {`function BFS(graph, startNode) {
  const queue = [startNode];
  const visited = new Set();

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visited.add(currentNode);

    const neighbors = graph[currentNode];
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return visited;
}
      `}
    </CodeBlock>
    <Paragraph>
      Here, the BFS function takes in two parameters - graph which is an object representing the
      graph, and startNode which is the node to start the BFS from.
    </Paragraph>
    <Paragraph>
      We create a queue and a visited set to keep track of the nodes that we need to visit and the
      nodes that we have already visited respectively.
    </Paragraph>
    <Paragraph>We start by adding the startNode to the queue and marking it as visited.</Paragraph>
    <Paragraph>
      Then, we loop through the queue as long as it is not empty. For each iteration, we take out
      the first node from the queue, mark it as visited, and get its neighbors from the graph.
    </Paragraph>
    <Paragraph>
      We loop through each neighbor and if it has not been visited before, we add it to the queue
      and mark it as visited.
    </Paragraph>
    <Paragraph>
      Finally, we return the visited set which contains all the nodes visited during the BFS
      traversal.
    </Paragraph>
    <Paragraph>
      Note that the graph object represents an adjacency list, where each key is a node and its
      value is an array of its neighbors. For example:
    </Paragraph>
    <CodeBlock>
      {`const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};`}
    </CodeBlock>
    <Paragraph>
      In the above graph, node A has neighbors B and C, node B has neighbors A, D, and E, and so on.
    </Paragraph>
    <SectionTitle>Depth-First Search</SectionTitle>
    <Paragraph>
      Depth-first search is another searching algorithm that explores as far as possible along each
      branch before backtracking.
    </Paragraph>
    <CodeBlock>
      {`// Node class representing each node in the graph
class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = [];
    this.visited = false;
  }
}

// Graph class representing the entire graph
class Graph {
  constructor() {
    this.nodes = [];
  }

  // Add a new node to the graph
  addNode(value) {
    const node = new Node(value);
    this.nodes.push(node);
    return node;
  }

  // Add an edge between two nodes in the graph
  addEdge(node1, node2) {
    node1.adjacents.push(node2);
    node2.adjacents.push(node1);
  }

  // Depth-First Search algorithm
  dfs(startNode) {
    const stack = [startNode];
    startNode.visited = true;
    while (stack.length > 0) {
      const currentNode = stack.pop();
      console.log(currentNode.value);
      for (let i = 0; i < currentNode.adjacents.length; i++) {
        const adjacentNode = currentNode.adjacents[i];
        if (!adjacentNode.visited) {
          adjacentNode.visited = true;
          stack.push(adjacentNode);
        }
      }
    }
  }
}

// Create a new graph
const graph = new Graph();

// Add nodes to the graph
const nodeA = graph.addNode("A");
const nodeB = graph.addNode("B");
const nodeC = graph.addNode("C");
const nodeD = graph.addNode("D");
const nodeE = graph.addNode("E");

// Add edges to the graph
graph.addEdge(nodeA, nodeB);
graph.addEdge(nodeA, nodeC);
graph.addEdge(nodeB, nodeD);
graph.addEdge(nodeC, nodeE);

// Perform Depth-First Search starting from nodeA
graph.dfs(nodeA);
      `}
    </CodeBlock>
    <Paragraph>
      In this code, we have a Node class representing each node in the graph, and a Graph class
      representing the entire graph. We first create a graph object and then add nodes and edges to
      it.
    </Paragraph>
    <Paragraph>
      The dfs function is a Depth-First Search algorithm that takes a starting node as input. We use
      a stack to keep track of nodes to visit, and mark each node as visited as we traverse the
      graph. The console.log(currentNode.value) line prints the value of each node as we visit it.
    </Paragraph>
    <Paragraph>
      In the end, we call graph.dfs(nodeA) to perform the Depth-First Search starting from nodeA.
    </Paragraph>
    <SectionTitle>Dijkstra&apos;s Algorithm</SectionTitle>
    <Paragraph>
      Dijkstra&apos;s algorithm is a shortest path algorithm that finds the shortest path between
      two nodes in a weighted graph.
    </Paragraph>
    <CodeBlock>
      {`function dijkstra(graph, startNode, endNode) {
  const distances = {};
  const visited = {};
  const previous = {};
  const pq = new PriorityQueue();

  // Initialize distances with Infinity except for the start node, which has distance 0
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  // Add the start node to the priority queue
  pq.enqueue(startNode, 0);

  while (!pq.isEmpty()) {
    const currentNode = pq.dequeue().element;

    // If the current node is the end node, we have found the shortest path
    if (currentNode === endNode) {
      // Build the shortest path by traversing the previous object from end to start
      const path = [];
      let node = endNode;
      while (node) {
        path.push(node);
        node = previous[node];
      }
      return path.reverse();
    }

    // If we have already visited this node, skip it
    if (visited[currentNode]) {
      continue;
    }
    visited[currentNode] = true;

    // Relax the neighbors of the current node
    for (const neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const tentativeDistance = distances[currentNode] + distance;

      if (tentativeDistance < distances[neighbor]) {
        distances[neighbor] = tentativeDistance;
        previous[neighbor] = currentNode;
        pq.enqueue(neighbor, distances[neighbor]);
      }
    }
  }

  // If we get here, there is no path from startNode to endNode
  return null;
}

// Example usage
const graph = {
  A: { B: 2, C: 4 },
  B: { D: 3 },
  C: { D: 1, E: 6 },
  D: { E: 2 },
  E: {},
};
const shortestPath = dijkstra(graph, 'A', 'E');
console.log(shortestPath); // Output: ['A', 'B', 'D', 'E']
      `}
    </CodeBlock>
    <Paragraph>
      In this example, the dijkstra function takes in a graph object, startNode and endNode. The
      graph object is an adjacency list representing the weighted directed graph. The startNode and
      endNode are the nodes between which we want to find the shortest path.
    </Paragraph>
    <Paragraph>
      The algorithm uses four objects to keep track of the distances, visited nodes, previous nodes
      and the priority queue. The distances object keeps track of the tentative distances for each
      node. The visited object keeps track of the nodes that have been visited. The previous object
      keeps track of the previous node in the shortest path to each node. The pq object is a
      priority queue that stores nodes according to their tentative distance.
    </Paragraph>
    <Paragraph>
      The function starts by initializing the distances object with Infinity for all nodes except
      for the startNode, which is initialized to 0. It then adds the startNode to the priority
      queue.
    </Paragraph>
    <Paragraph>
      The while loop continues until the priority queue is empty. Inside the loop, the function
      extracts
    </Paragraph>
    <SectionTitle>Bellman-Ford Algorithm</SectionTitle>
    <Paragraph>
      Bellman-Ford algorithm is another shortest path algorithm that can handle negative weight
      edges, unlike Dijkstr&apos;s algorithm.
    </Paragraph>
    <CodeBlock>
      {`function bellmanFord(graph, start) {
  // Step 1: Initialize distances and predecessor
  let distances = {};
  let predecessors = {};
  for (let node in graph) {
    distances[node] = Infinity;
    predecessors[node] = null;
  }
  distances[start] = 0;

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let u in graph) {
      for (let v in graph[u]) {
        let weight = graph[u][v];
        if (distances[u] + weight < distances[v]) {
          distances[v] = distances[u] + weight;
          predecessors[v] = u;
        }
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (let u in graph) {
    for (let v in graph[u]) {
      let weight = graph[u][v];
      if (distances[u] + weight < distances[v]) {
        throw new Error("Graph contains a negative-weight cycle");
      }
    }
  }

  return { distances, predecessors };
}
      `}
    </CodeBlock>
    <Paragraph>
      The bellmanFord function takes in a graph object and a starting node, and returns an object
      with the final distances and predecessors for each node in the graph. Here&apos;s an example
      usage with the following graph:
    </Paragraph>
    <CodeBlock>
      {`
A --5--> B --2--> C
 \      |         ^  
  1     3         |  
   \    |         |  
    v   v         |  
     D --6------- E  
      `}
    </CodeBlock>
    <CodeBlock>
      {`let graph = {
  A: { B: 5, D: 1 },
  B: { C: 2, E: 3 },
  C: { E: 1 },
  D: { B: 3, E: 6 },
  E: {}
};
let start = "A";

let result = bellmanFord(graph, start);
console.log(result.distances); // { A: 0, B: 5, C: 7, D: 1, E: 8 }
console.log(result.predecessors); // { A: null, B: 'A', C: 'B', D: 'A', E: 'B' }
      `}
    </CodeBlock>
    <Paragraph>
      In the example, the bellmanFord function returns the shortest distances and predecessors for
      each node in the graph, starting from node A.
    </Paragraph>
    <SectionTitle>Prim&apos;s Algorithm</SectionTitle>
    <Paragraph>
      Prim&apos;s algorithm is a minimum spanning tree algorithm that finds the minimum spanning
      tree for a connected, weighted graph.
    </Paragraph>
    <CodeBlock>
      {`function prim(graph) {
  const n = graph.length;
  const parent = new Array(n).fill(-1);
  const key = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);

  key[0] = 0; // Set the key of the first vertex to 0

  for (let i = 0; i < n - 1; i++) {
    let minKey = Infinity;
    let minIndex = -1;

    // Find the vertex with the minimum key value among the vertices
    // that haven't been visited yet
    for (let j = 0; j < n; j++) {
      if (!visited[j] && key[j] < minKey) {
        minKey = key[j];
        minIndex = j;
      }
    }

    visited[minIndex] = true;

    // Update the key values of adjacent vertices that haven't been visited yet
    for (let j = 0; j < n; j++) {
      const weight = graph[minIndex][j];
      if (weight > 0 && !visited[j] && weight < key[j]) {
        parent[j] = minIndex;
        key[j] = weight;
      }
    }
  }

  return parent; // Return the array of parent vertices
}

// Example usage:
const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0]
];

const parent = prim(graph);
console.log(parent); // Output: [-1, 0, 1, 0, 1]
      `}
    </CodeBlock>
    <Paragraph>
      This implementation of Prim&apos;s Algorithm takes an adjacency matrix graph as input and
      returns an array of parent vertices. The n variable is the number of vertices in the graph.
      The algorithm initializes arrays for the parent vertices, the key values (which are initially
      set to infinity for all vertices except the first one, which is set to 0), and a boolean array
      to keep track of which vertices have been visited.
    </Paragraph>
    <Paragraph>
      The algorithm then loops n-1 times, finding the vertex with the minimum key value among the
      vertices that haven&apos;t been visited yet. It marks that vertex as visited and updates the
      key values of its adjacent vertices that haven&apos;t been visited yet. If the weight of an
      edge is less than the current key value of a vertex, the parent of that vertex is updated to
      the current vertex. Finally, the array of parent vertices is returned.
    </Paragraph>
    <SectionTitle>Kruskal&apos;s Algorithm</SectionTitle>
    <Paragraph>
      Kruskal&apos;s algorithm is another minimum spanning tree algorithm that finds the minimum
      spanning tree by building it up one edge at a time.
    </Paragraph>
    <CodeBlock>
      {`// Define the graph using an adjacency list
const graph = {
  'A': {'B': 7, 'D': 5},
  'B': {'A': 7, 'C': 8, 'D': 9, 'E': 7},
  'C': {'B': 8, 'E': 5},
  'D': {'A': 5, 'B': 9, 'E': 15, 'F': 6},
  'E': {'B': 7, 'C': 5, 'D': 15, 'F': 8, 'G': 9},
  'F': {'D': 6, 'E': 8, 'G': 11},
  'G': {'E': 9, 'F': 11}
};

// Define a function to find the parent of a vertex in a union-find data structure
function find(parent, i) {
  if (parent[i] === i) {
    return i;
  }
  return find(parent, parent[i]);
}

// Define a function to perform union of two vertices in a union-find data structure
function union(parent, rank, x, y) {
  const xRoot = find(parent, x);
  const yRoot = find(parent, y);
  if (rank[xRoot] < rank[yRoot]) {
    parent[xRoot] = yRoot;
  } else if (rank[xRoot] > rank[yRoot]) {
    parent[yRoot] = xRoot;
  } else {
    parent[yRoot] = xRoot;
    rank[xRoot]++;
  }
}

// Define Kruskal's algorithm function
function kruskal(graph) {
  const vertices = Object.keys(graph);
  const parent = {};
  const rank = {};
  let edges = [];
  let result = [];
  
  // Initialize the parent and rank arrays for union-find data structure
  vertices.forEach(vertex => {
    parent[vertex] = vertex;
    rank[vertex] = 0;
  });

  // Create a list of edges from the graph
  for (const vertex in graph) {
    for (const neighbor in graph[vertex]) {
      edges.push([vertex, neighbor, graph[vertex][neighbor]]);
    }
  }

  // Sort the edges in increasing order of their weight
  edges.sort((a, b) => a[2] - b[2]);

  // Iterate over each edge and add it to the minimum spanning tree if it does not create a cycle
  edges.forEach(edge => {
    const [vertex1, vertex2, weight] = edge;
    const root1 = find(parent, vertex1);
    const root2 = find(parent, vertex2);
    if (root1 !== root2) {
      result.push(edge);
      union(parent, rank, root1, root2);
    }
  });

  return result;
}

// Test Kruskal's algorithm function with the example graph
const minimumSpanningTree = kruskal
      `}
    </CodeBlock>
    <Paragraph>
      In this example, the kruskal function takes a graph in the form of an adjacency list as input
      and returns the edges of the minimum spanning tree in the form of an array. The find function
      and union function are used to implement the union-find data structure, which is used to check
      whether adding an edge to the minimum spanning tree will create a cycle.
    </Paragraph>
    <SectionTitle>Floyd-Warshall Algorithm</SectionTitle>
    <Paragraph>
      Floyd-Warshall algorithm is an all-pairs shortest path algorithm that finds the shortest path
      between all pairs of nodes in a graph.
    </Paragraph>
    <CodeBlock>
      {`function floydWarshall(graph) {
  const dist = [];
  const n = graph.length;

  // Initialize the distance matrix with the values from the input graph
  for (let i = 0; i < n; i++) {
    dist[i] = [];
    for (let j = 0; j < n; j++) {
      dist[i][j] = graph[i][j];
    }
  }

  // Calculate the shortest paths between all pairs of vertices
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity && dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}
      `}
    </CodeBlock>
    <Paragraph>
      The graph input parameter is a two-dimensional array representing the adjacency matrix of the
      graph. Each element graph[i][j] of the matrix represents the weight of the edge connecting
      vertex i to vertex j, or Infinity if there is no edge between the vertices.
    </Paragraph>
    <Paragraph>
      The function returns a two-dimensional array dist representing the shortest distances between
      all pairs of vertices in the graph. Element dist[i][j] contains the length of the shortest
      path from vertex i to vertex j.
    </Paragraph>
  </>
);

export default GraphAlgorithms;
