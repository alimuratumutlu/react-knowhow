import { Paragraph, SectionTitle } from '@components';

const ArchitecturalPatterns = (
  <>
    <Paragraph>
      Architectural patterns refer to high-level design patterns that define the overall structure
      and organization of a software system. Architectural patterns are used to define the
      relationships between the different components of a system, and to guide the development of
      software applications that are modular, maintainable, and scalable.
    </Paragraph>

    <Paragraph>Some common architectural patterns used in software development include:</Paragraph>

    <SectionTitle>Model-View-Controller (MVC) Pattern</SectionTitle>
    <Paragraph>
      This pattern separates the application logic into three distinct layers: the model, which
      represents the data and business logic; the view, which handles user interaction and
      presentation; and the controller, which manages the communication between the model and the
      view.
    </Paragraph>

    <SectionTitle>Microservices Pattern</SectionTitle>
    <Paragraph>
      This pattern breaks down large applications into smaller, independent services that can be
      developed and deployed independently of each other. Each microservice performs a specific
      function, and communicates with other microservices through a well-defined API.{' '}
    </Paragraph>

    <SectionTitle>Layered Architecture Pattern</SectionTitle>
    <Paragraph>
      This pattern separates the system into different layers, each of which provides a specific set
      of services. Typically, a layered architecture consists of a presentation layer, a business
      logic layer, and a data access layer.
    </Paragraph>

    <SectionTitle>Event-Driven Architecture Pattern</SectionTitle>
    <Paragraph>
      This pattern uses events to trigger actions in the system. Components of the system subscribe
      to events, and are notified when events occur. This approach can be used to build highly
      scalable and loosely coupled systems.
    </Paragraph>

    <SectionTitle>Service-Oriented Architecture Pattern</SectionTitle>
    <Paragraph>
      This pattern defines a set of services that can be accessed and shared by different
      applications and components. Services are designed to be independent and self-contained, and
      can be reused across different applications and systems.
    </Paragraph>

    <Paragraph>
      Overall, architectural patterns provide a set of guidelines and best practices for designing
      software systems that are modular, scalable, and maintainable. By using these patterns,
      developers can build complex applications that are easier to manage, test, and modify over
      time.
    </Paragraph>
  </>
);

export default ArchitecturalPatterns;
