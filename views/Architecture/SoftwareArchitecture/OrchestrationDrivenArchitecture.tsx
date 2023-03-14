import { ListItem, Paragraph } from '@components';

const OrchestrationDrivenArchitecture = (
  <>
    <Paragraph>
      In an orchestration-driven architecture, the orchestration engine acts as the main point of
      control, managing the flow of data and control between microservices. The microservices
      themselves are designed to be stateless and independent, with well-defined APIs for
      communicating with each other.
    </Paragraph>
    <Paragraph>
      The orchestration engine is responsible for performing the following tasks:
    </Paragraph>
    <ListItem
      itemLabel="Service discovery: "
      itemDescription="The orchestration engine discovers and identifies available microservices in the system."
    />
    <ListItem
      itemLabel="Routing and load balancing: "
      itemDescription="The orchestration engine directs incoming requests to the appropriate microservice instance and balances the load between instances."
    />
    <ListItem
      itemLabel="Data transformation: "
      itemDescription="The orchestration engine can transform data between different formats and protocols to ensure compatibility between microservices."
    />
    <ListItem
      itemLabel="Error handling and retries: "
      itemDescription="The orchestration engine handles errors and retries in case of failures in the system."
    />
    <ListItem
      itemLabel="Monitoring and logging: "
      itemDescription="The orchestration engine monitors the system and logs activity for analysis and debugging."
    />
    <Paragraph>
      Overall, an orchestration-driven architecture can provide greater flexibility, scalability,
      and resilience compared to traditional monolithic architectures. It also allows for easier
      integration of new microservices into the system, as the orchestration engine can manage the
      interactions between them. However, it does require careful planning and design to ensure that
      the orchestration engine is efficient, reliable, and can handle the complexities of the
      system.
    </Paragraph>
  </>
);

export default OrchestrationDrivenArchitecture;
