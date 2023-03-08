import React from 'react';
import Gist from 'react-gist';

import Paragraph from '../../components/atoms/Paragraph/Paragraph.component';
import SubTitle from '../../components/atoms/SubTitle/SubTitle.component';

import PostTemplate from '../../templates/Post.template';

export default function GraphAlgorithms() {
  return (
    <PostTemplate title="Graph Algorithms">
      <Paragraph>
        Graph algorithms are used to solve problems that involve relationships between objects.
        Graphs are collections of nodes (also known as vertices) and edges, where edges represent
        the relationships between the nodes. Graph algorithms can be used to solve a wide variety of
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
      <SubTitle>Breadth-First Search</SubTitle>
      <Paragraph>
        Breadth-first search is a searching algorithm that starts at the root node and explores all
        the neighboring nodes at the current depth before moving on to nodes at the next depth.
      </Paragraph>
      <Gist id="453bf5988ae61249d28a5b564a6045cd" />
      <Paragraph>
        Here, the BFS function takes in two parameters - graph which is an object representing the
        graph, and startNode which is the node to start the BFS from.
      </Paragraph>
      <Paragraph>
        We create a queue and a visited set to keep track of the nodes that we need to visit and the
        nodes that we have already visited respectively.
      </Paragraph>
      <Paragraph>
        We start by adding the startNode to the queue and marking it as visited.
      </Paragraph>
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
      <Gist id="16180615e63246b0527294b9e4e47eb2" />
      <Paragraph>
        In the above graph, node A has neighbors B and C, node B has neighbors A, D, and E, and so
        on.
      </Paragraph>
      <SubTitle>Depth-First Search</SubTitle>
      <Paragraph>
        Depth-first search is another searching algorithm that explores as far as possible along
        each branch before backtracking.
      </Paragraph>
      <Gist id="078223462bd69d0910aadd149f794d06" />
      <Paragraph>
        In this code, we have a Node class representing each node in the graph, and a Graph class
        representing the entire graph. We first create a graph object and then add nodes and edges
        to it.
      </Paragraph>
      <Paragraph>
        The dfs function is a Depth-First Search algorithm that takes a starting node as input. We
        use a stack to keep track of nodes to visit, and mark each node as visited as we traverse
        the graph. The console.log(currentNode.value) line prints the value of each node as we visit
        it.
      </Paragraph>
      <Paragraph>
        In the end, we call graph.dfs(nodeA) to perform the Depth-First Search starting from nodeA.
      </Paragraph>
      <SubTitle>Dijkstra&apos;s Algorithm</SubTitle>
      <Paragraph>
        Dijkstra&apos;s algorithm is a shortest path algorithm that finds the shortest path between
        two nodes in a weighted graph.
      </Paragraph>
      <Gist id="58e88c2b888423d9d5218c8fe5c0cabf" />
      <Paragraph>
        In this example, the dijkstra function takes in a graph object, startNode and endNode. The
        graph object is an adjacency list representing the weighted directed graph. The startNode
        and endNode are the nodes between which we want to find the shortest path.
      </Paragraph>
      <Paragraph>
        The algorithm uses four objects to keep track of the distances, visited nodes, previous
        nodes and the priority queue. The distances object keeps track of the tentative distances
        for each node. The visited object keeps track of the nodes that have been visited. The
        previous object keeps track of the previous node in the shortest path to each node. The pq
        object is a priority queue that stores nodes according to their tentative distance.
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
      <SubTitle>Bellman-Ford Algorithm</SubTitle>
      <Paragraph>
        Bellman-Ford algorithm is another shortest path algorithm that can handle negative weight
        edges, unlike Dijkstr&apos;s algorithm.
      </Paragraph>
      <Gist id="0860e422710294028f645b67ee6fbe0e" />
      <Paragraph>
        The bellmanFord function takes in a graph object and a starting node, and returns an object
        with the final distances and predecessors for each node in the graph. Here&apos;s an example
        usage with the following graph:
      </Paragraph>
      <Gist id="6bb285d99df4ae842c9e4f66463eb5fc" />
      <Gist id="9e739e435a3c2c63b341691cf6f0c317" />
      <Paragraph>
        In the example, the bellmanFord function returns the shortest distances and predecessors for
        each node in the graph, starting from node A.
      </Paragraph>
      <SubTitle>Prim&apos;s Algorithm</SubTitle>
      <Paragraph>
        Prim&apos;s algorithm is a minimum spanning tree algorithm that finds the minimum spanning
        tree for a connected, weighted graph.
      </Paragraph>
      <Gist id="c614a65e3aa1f373b566088e416361f0" />
      <Paragraph>
        This implementation of Prim&apos;s Algorithm takes an adjacency matrix graph as input and
        returns an array of parent vertices. The n variable is the number of vertices in the graph.
        The algorithm initializes arrays for the parent vertices, the key values (which are
        initially set to infinity for all vertices except the first one, which is set to 0), and a
        boolean array to keep track of which vertices have been visited.
      </Paragraph>
      <Paragraph>
        The algorithm then loops n-1 times, finding the vertex with the minimum key value among the
        vertices that haven&apos;t been visited yet. It marks that vertex as visited and updates the
        key values of its adjacent vertices that haven&apos;t been visited yet. If the weight of an
        edge is less than the current key value of a vertex, the parent of that vertex is updated to
        the current vertex. Finally, the array of parent vertices is returned.
      </Paragraph>
      <SubTitle>Kruskal&apos;s Algorithm</SubTitle>
      <Paragraph>
        Kruskal&apos;s algorithm is another minimum spanning tree algorithm that finds the minimum
        spanning tree by building it up one edge at a time.
      </Paragraph>
      <Gist id="856ccae0549f926e5285d2e42c5b35eb" />
      <Paragraph>
        In this example, the kruskal function takes a graph in the form of an adjacency list as
        input and returns the edges of the minimum spanning tree in the form of an array. The find
        function and union function are used to implement the union-find data structure, which is
        used to check whether adding an edge to the minimum spanning tree will create a cycle.
      </Paragraph>
      <SubTitle>Floyd-Warshall Algorithm</SubTitle>
      <Paragraph>
        Floyd-Warshall algorithm is an all-pairs shortest path algorithm that finds the shortest
        path between all pairs of nodes in a graph.
      </Paragraph>
      <Gist id="7245504490cd6576866ebd4990b8e175" />
      <Paragraph>
        The graph input parameter is a two-dimensional array representing the adjacency matrix of
        the graph. Each element graph[i][j] of the matrix represents the weight of the edge
        connecting vertex i to vertex j, or Infinity if there is no edge between the vertices.
      </Paragraph>
      <Paragraph>
        The function returns a two-dimensional array dist representing the shortest distances
        between all pairs of vertices in the graph. Element dist[i][j] contains the length of the
        shortest path from vertex i to vertex j.
      </Paragraph>
    </PostTemplate>
  );
}
