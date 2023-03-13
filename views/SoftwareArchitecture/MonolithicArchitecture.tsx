import { ListItem, Paragraph } from '@components';

const ClientServerArchitecture = (
  <>
    <Paragraph>
      Monolithic architecture is an approach to building software systems where all the components
      of the application are tightly integrated and deployed as a single unit. In a monolithic
      architecture, the entire application is built as a single, cohesive unit, with all the
      functionality bundled together into a single codebase and deployed on a single server.
    </Paragraph>
    <Paragraph>
      In a monolithic architecture, all the components of the application are tightly coupled,
      meaning that changes to one component can affect other components. This can make it difficult
      to make changes to the system, test new features, or scale up the application.
    </Paragraph>
    <Paragraph>Some important aspects of monolithic architecture include:</Paragraph>
    <ListItem
      itemLabel="Single codebase: "
      itemDescription="All the components of the application are part of a single codebase, making it easy to maintain and update."
    />
    <ListItem
      itemLabel="Tight coupling: "
      itemDescription="Components of the application are tightly coupled, meaning that changes to one component can affect other components."
    />
    <ListItem
      itemLabel="Scalability: "
      itemDescription="Monolithic architecture can be difficult to scale, as the entire application must be scaled together."
    />
    <ListItem
      itemLabel="Reliability: "
      itemDescription="A single point of failure can cause the entire application to fail, making it less reliable than distributed architectures."
    />
    <ListItem
      itemLabel="Difficulty of testing: "
      itemDescription="Testing new features or changes can be difficult, as it can be hard to isolate specific components for testing."
    />
    <Paragraph>
      Overall, client-server architecture is a widely used approach to building software systems,
      with a focus on scalability, flexibility, and separation of concerns. It is well-suited for a
      wide range of applications, from simple websites to complex enterprise systems.
    </Paragraph>
  </>
);

export default ClientServerArchitecture;
