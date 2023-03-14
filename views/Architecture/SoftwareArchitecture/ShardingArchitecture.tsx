import { ListItem, Paragraph } from '@components';

const ShardingArchitecture = (
  <>
    <Paragraph>
      Sharding architecture is an approach to building software systems that involves partitioning
      data across multiple servers or databases, in order to improve performance, scalability, and
      availability. In sharding architecture, each shard contains a subset of the data, and each
      shard is stored on a separate server or database.
    </Paragraph>

    <Paragraph>The main advantages of sharding architecture include:</Paragraph>

    <ListItem
      itemLabel="Improved performance: "
      itemDescription="Sharding architecture can improve performance by allowing each server or database to handle a smaller subset of the data, which reduces the amount of data that needs to be processed and improves response times."
    />

    <ListItem
      itemLabel="Increased scalability: "
      itemDescription="Sharding architecture can increase scalability by allowing additional servers or databases to be added as the data volume grows, without requiring significant changes to the system architecture."
    />

    <ListItem
      itemLabel="Increased availability: "
      itemDescription="Sharding architecture can increase availability by distributing the data across multiple servers or databases, which reduces the risk of a single point of failure and improves the system's ability to handle failures and maintain service continuity."
    />

    <Paragraph>Some common approaches to sharding architecture include:</Paragraph>

    <ListItem
      itemLabel="Horizontal sharding: "
      itemDescription="This involves partitioning data across multiple servers or databases based on specific criteria, such as customer ID or date range."
    />

    <ListItem
      itemLabel="Vertical sharding: "
      itemDescription="This involves partitioning data across multiple servers or databases based on specific attributes, such as location or data type."
    />

    <ListItem
      itemLabel="Hybrid sharding: "
      itemDescription="This involves using a combination of horizontal and vertical sharding to partition data across multiple servers or databases."
    />

    <Paragraph>
      Some common technologies and frameworks used in sharding architecture include:
    </Paragraph>

    <ListItem
      itemLabel="MySQL Cluster: "
      itemDescription="A high-availability, scalable, and distributed database system that supports sharding."
    />

    <ListItem
      itemLabel="MongoDB: "
      itemDescription="A document-oriented database system that supports horizontal sharding."
    />

    <ListItem
      itemLabel="Apache Cassandra: "
      itemDescription="A distributed database system that supports both horizontal and vertical sharding."
    />

    <Paragraph>
      Overall, sharding architecture is a powerful approach to building software systems that
      require high levels of performance, scalability, and availability. Sharding can be achieved
      through a variety of approaches, such as horizontal or vertical sharding, and can be
      implemented using specific technologies and frameworks, depending on the specific requirements
      of the system.
    </Paragraph>
  </>
);

export default ShardingArchitecture;
