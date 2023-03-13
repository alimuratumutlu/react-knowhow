import { ListItem, Paragraph } from '@components';

const ServiceOrientedArchitecture = (
  <>
    <Paragraph>
      SOA, or Service-Oriented Architecture, is an approach to building software systems that
      involves decomposing a system into individual services that can be used independently or
      combined to create more complex applications. In SOA, services are modular, reusable, and
      independently deployable, making it easier to build, maintain, and modify software systems.
    </Paragraph>

    <Paragraph>The key components of SOA include:</Paragraph>

    <ListItem
      itemLabel="Services: "
      itemDescription="The fundamental building blocks of an SOA system. Services are self-contained, independent components that can be invoked over a network."
    />

    <ListItem
      itemLabel="Service registry: "
      itemDescription="A directory of available services that allows clients to discover and invoke services."
    />

    <ListItem
      itemLabel="Service bus: "
      itemDescription="A middleware layer that provides messaging and orchestration services to coordinate the interaction between services."
    />

    <ListItem
      itemLabel="Service contracts: "
      itemDescription="A formal agreement between a service provider and a service consumer that defines the interface and behavior of the service."
    />

    <ListItem
      itemLabel="Service composition: "
      itemDescription="The process of combining multiple services to create more complex applications."
    />

    <Paragraph>Some common technologies and frameworks used in SOA include:</Paragraph>

    <ListItem
      itemLabel="Web services: "
      itemDescription="A standard for exchanging data between applications over the web using XML-based messaging."
    />

    <ListItem
      itemLabel="Representational State Transfer (REST): "
      itemDescription="An architectural style for building web services that uses HTTP methods to perform operations on resources."
    />

    <ListItem
      itemLabel="Simple Object Access Protocol (SOAP): "
      itemDescription="A messaging protocol used for exchanging structured data between applications."
    />

    <ListItem
      itemLabel="Enterprise Service Bus (ESB): "
      itemDescription="A middleware layer that provides messaging, routing, and transformation services to support the integration of multiple applications and services."
    />

    <Paragraph>
      Overall, SOA is a powerful approach to building software systems that emphasizes modularity,
      reuse, and interoperability. SOA systems can be highly scalable, flexible, and maintainable,
      making them well-suited for large-scale, distributed applications in a variety of domains.
    </Paragraph>
  </>
);

export default ServiceOrientedArchitecture;
