import { ListItem, Paragraph } from '@components';

const ClientServerArchitecture = (
  <>
    <Paragraph>
      N-tier architecture is an approach to building software systems where the application is
      divided into multiple layers, each responsible for a specific set of tasks or functions. Each
      layer communicates with the adjacent layers using well-defined interfaces and protocols.
    </Paragraph>
    <Paragraph>The most common N-tier architecture includes three layers:</Paragraph>
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
      itemLabel="Separation of concerns: "
      itemDescription="N-tier architecture separates the application into distinct layers, each with its own set of responsibilities, making it easier to manage and maintain."
    />
    <ListItem
      itemLabel="Scalability: "
      itemDescription="Each layer of the application can be scaled independently, allowing the system to handle increased load and traffic."
    />
    <ListItem
      itemLabel="Flexibility: "
      itemDescription="N-tier architecture allows for a wide range of applications, from simple websites to complex enterprise systems."
    />
    <ListItem
      itemLabel="Security: "
      itemDescription="N-tier architecture can use encryption, authentication, and access control mechanisms to ensure that data is secure and only authorized users have access to it."
    />
    <ListItem
      itemLabel="Maintainability: "
      itemDescription="N-tier architecture is designed to be modular and maintainable, making it easier to add new features, fix bugs, or update the system."
    />

    <Paragraph>
      Overall, N-tier architecture is a flexible and scalable approach to building software systems,
      with a focus on separation of concerns, modularity, and maintainability. It is well-suited for
      a wide range of applications, from simple websites to complex enterprise systems.
    </Paragraph>
  </>
);

export default ClientServerArchitecture;
