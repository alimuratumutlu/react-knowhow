import { ListItem, Paragraph } from '@components';

const SpaceBasedArchitecture = (
  <>
    <Paragraph>
      Space-Based Architecture (SBA) is an approach to building software systems that is based on
      the concept of distributed data grids. In SBA, the application is divided into small,
      independent processing units that operate on data grids distributed across a network. Each
      processing unit is responsible for executing a specific task or set of tasks, and data is
      distributed across the data grid to optimize performance and scalability.
    </Paragraph>

    <Paragraph>
      In an SBA, the application is designed to operate in a distributed environment, with each
      processing unit running on a separate node or cluster. The processing units communicate with
      each other through the data grid, using messaging or other communication protocols.
    </Paragraph>
    <Paragraph>Some important aspects of SBA include:</Paragraph>

    <Paragraph>
      Data partitioning and distribution: Data is partitioned and distributed across the data grid
      to optimize performance and scalability.
    </Paragraph>

    <ListItem
      itemLabel="Dynamic scaling: "
      itemDescription="The system can be dynamically scaled up or down by adding or removing nodes from the data grid."
    />
    <ListItem
      itemLabel="Fault tolerance and resiliency: "
      itemDescription="The system is designed to tolerate faults and failures, with redundancy and failover mechanisms built in to ensure continuous operation."
    />

    <ListItem
      itemLabel="Event-driven processing: "
      itemDescription="Processing units are triggered by events, such as new data being added to the grid, rather than being invoked directly by other components."
    />

    <ListItem
      itemLabel="Processing pipelines: "
      itemDescription="Processing units can be organized into pipelines, with each pipeline performing a specific processing task or set of tasks."
    />

    <Paragraph>
      Overall, SBA is a highly scalable and fault-tolerant approach to building software systems,
      with a focus on distributed data processing and optimization. It is well-suited for
      applications that require high performance, high scalability, and high availability, such as
      real-time data processing and analytics.
    </Paragraph>
  </>
);

export default SpaceBasedArchitecture;
