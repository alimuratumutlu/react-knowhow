import { ListItem, Paragraph, SectionTitle } from '@components';

const LayeredArchitecture = (
  <>
    <Paragraph>
      Layered architecture is an architectural style that is used in software development to
      organize software systems into layers. In this architecture, each layer has a specific
      responsibility and communicates with the layers above and below it. Layered architecture is
      widely used in software development due to its simplicity, scalability, and maintainability.
      Here are the key components of layered architecture:
    </Paragraph>

    <SectionTitle>1. Presentation Layer</SectionTitle>
    <Paragraph>
      The presentation layer is the topmost layer in the architecture and is responsible for
      presenting data to users. The presentation layer includes user interface components, such as
      forms, buttons, and menus.
    </Paragraph>

    <SectionTitle>2. Application Layer</SectionTitle>
    <Paragraph>
      The application layer is the middle layer in the architecture and is responsible for
      implementing business logic. The application layer includes components that perform
      calculations, apply business rules, and manage data.
    </Paragraph>

    <SectionTitle>3. Data Access Layer</SectionTitle>
    <Paragraph>
      The data access layer is the bottom layer in the architecture and is responsible for accessing
      data from data sources. The data access layer includes components that interact with
      databases, file systems, and other data sources.
    </Paragraph>

    <SectionTitle>4. Communication Protocols</SectionTitle>
    <Paragraph>
      Communication protocols are used to enable communication between layers. Communication
      protocols include HTTP, TCP/IP, and SOAP. Communication protocols ensure that layers can
      communicate with each other in a standardized and efficient way.
    </Paragraph>

    <SectionTitle>5. Security</SectionTitle>
    <Paragraph>
      Security is an essential component of layered architecture. Security includes authentication,
      authorization, and data encryption. Security ensures that the software system is secure and
      protected against cyber threats.
    </Paragraph>

    <SectionTitle>Benefits of Layered Architecture</SectionTitle>
    <Paragraph>Here are some benefits of layered architecture:</Paragraph>

    <ListItem
      itemLabel="🌸 Modularity: "
      itemDescription="Layered architecture is modular and enables components to be easily replaced or upgraded."
    />
    <ListItem
      itemLabel="🌸 Scalability: "
      itemDescription="Layered architecture is scalable and can handle high loads and provide high availability."
    />
    <ListItem
      itemLabel="🌸 Separation of Concerns:"
      itemDescription="Layered architecture separates concerns, which makes software development more efficient and reduces the risk of errors."
    />
    <ListItem
      itemLabel="🌸 Flexibility: "
      itemDescription="Layered architecture is flexible and can be customized to meet specific requirements."
    />
  </>
);

export default LayeredArchitecture;
