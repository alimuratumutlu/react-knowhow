import { Paragraph, SectionTitle } from '@components';

const CreationalPatterns = (
  <>
    <Paragraph>
      Creational patterns are design patterns that focus on object creation and initialization in a
      software system. These patterns provide solutions to common problems that arise when creating
      new objects, such as managing object lifecycles, creating objects with complex dependencies,
      and ensuring that only one instance of an object is created. By using creational patterns,
      developers can build systems that are more modular, maintainable, and scalable. Some commonly
      used creational patterns include:
    </Paragraph>

    <SectionTitle>Singleton Pattern</SectionTitle>
    <Paragraph>
      This pattern ensures that only one instance of a class is created and provides a global point
      of access to that instance.
    </Paragraph>

    <SectionTitle>Factory Method Pattern</SectionTitle>
    <Paragraph>
      This pattern provides an interface for creating objects, but allows subclasses to decide which
      class to instantiate.
    </Paragraph>

    <SectionTitle>Abstract Factory Pattern</SectionTitle>
    <Paragraph>
      This pattern provides an interface for creating families of related or dependent objects,
      without specifying their concrete classes.
    </Paragraph>

    <SectionTitle>Builder Pattern</SectionTitle>
    <Paragraph>
      This pattern provides a way to create complex objects by separating the construction of an
      object from its representation.
    </Paragraph>

    <SectionTitle>Prototype Pattern</SectionTitle>
    <Paragraph>
      This pattern provides a way to create new objects by copying or cloning existing objects.
    </Paragraph>

    <Paragraph>
      Overall, creational patterns provide a set of guidelines and best practices for object
      creation and initialization in a software system. By using these patterns, developers can
      build systems that are more modular, maintainable, and scalable, and that can be adapted to
      different situations or contexts.
    </Paragraph>
  </>
);

export default CreationalPatterns;
