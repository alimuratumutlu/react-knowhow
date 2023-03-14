import { ListItem, Paragraph } from '@components';

const PeerToPeerArchitecture = (
  <>
    <Paragraph>
      Peer-to-peer (P2P) architecture is an approach to building software systems where all the
      nodes in the network are equal and can act as both clients and servers. In P2P architecture,
      each node can request and provide resources or services to other nodes in the network without
      the need for a centralized server.
    </Paragraph>
    <Paragraph>
      In a P2P architecture, there is no distinction between clients and servers. Each node in the
      network can act as both a client and a server, and can communicate directly with other nodes
      without the need for intermediaries.
    </Paragraph>
    <Paragraph>Some important aspects of P2P architecture include:</Paragraph>
    <ListItem
      itemLabel="Presentation layer: "
      itemDescription="The presentation layer is responsible for user interface and user interaction. It typically includes web or mobile applications that users interact with directly."
    />
    <ListItem
      itemLabel="Application layer: "
      itemDescription="The application layer is responsible for processing requests, executing business logic, and accessing data. It typically includes application servers, web servers, or microservices."
    />
    <ListItem
      itemLabel="Data layer: "
      itemDescription="The data layer is responsible for storing and managing data. It typically includes databases or data storage systems."
    />

    <Paragraph>Some important aspects of N-tier architecture include:</Paragraph>

    <ListItem
      itemLabel="Decentralized: "
      itemDescription="P2P architecture is decentralized, meaning that there is no central authority or server controlling the network."
    />
    <ListItem
      itemLabel="Resource sharing: "
      itemDescription="Nodes in the network can share resources, such as processing power, storage, and bandwidth."
    />
    <ListItem
      itemLabel="Scalability: "
      itemDescription="P2P architecture can be highly scalable, as nodes can be added or removed from the network dynamically without affecting the overall functionality of the system."
    />
    <ListItem
      itemLabel="Redundancy: "
      itemDescription="P2P architecture can be highly redundant, as multiple nodes can provide the same resource or service, ensuring that the system remains available even if some nodes fail."
    />
    <ListItem
      itemLabel="Security: "
      itemDescription="P2P architecture can use encryption, authentication, and access control mechanisms to ensure that data is secure and only authorized nodes have access to it."
    />

    <Paragraph>
      Overall, P2P architecture is a highly decentralized and scalable approach to building software
      systems, with a focus on resource sharing and redundancy. It is well-suited for applications
      that require high scalability, high availability, and low latency, such as file sharing,
      content distribution, and real-time communication.
    </Paragraph>
  </>
);

export default PeerToPeerArchitecture;
