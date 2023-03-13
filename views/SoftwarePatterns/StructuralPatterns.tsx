import { ListItem, Paragraph } from '@components';

const StructuralPatterns = (
  <>
    <Paragraph>
      Structural patterns are design patterns that focus on organizing classes and objects in a
      software system to form larger structures, and to simplify the relationships between them.
      These patterns define the way that different objects are arranged and connected to each other,
      and can be used to build complex systems that are more modular, maintainable, and scalable.
      There are several different types of structural patterns, including:
    </Paragraph>

    <ListItem
      itemLabel="Adapter pattern: "
      itemDescription="This pattern allows incompatible interfaces to work together, by wrapping one interface with another that the client code can use. "
    />

    <ListItem
      itemLabel="Bridge pattern: "
      itemDescription="This pattern separates an abstraction from its implementation, allowing them to be developed and changed independently of each other. "
    />

    <ListItem
      itemLabel="Composite pattern: "
      itemDescription="This pattern allows objects to be represented as a tree-like structure, with each object having the same interface. "
    />

    <ListItem
      itemLabel="Decorator pattern: "
      itemDescription="This pattern allows behavior to be added to an object dynamically, by wrapping it with another object that provides additional functionality. "
    />

    <ListItem
      itemLabel="Facade pattern: "
      itemDescription="This pattern provides a simplified interface to a complex system, by hiding its internal workings and presenting a simpler and more user-friendly interface. "
    />

    <ListItem
      itemLabel="Flyweight pattern: "
      itemDescription="This pattern allows large numbers of objects to be created and used efficiently, by sharing common parts of the objects between them. "
    />

    <ListItem
      itemLabel="Proxy pattern: "
      itemDescription="This pattern provides a placeholder object that represents a more complex object, in order to control access to it or to delay its creation until it is needed. "
    />

    <Paragraph>
      Overall, structural patterns provide a set of guidelines and best practices for organizing
      classes and objects in a software system, and for simplifying the relationships between them.
      By using these patterns, developers can build systems that are more modular, maintainable, and
      scalable, and that can be adapted to changing requirements and environments over time.
    </Paragraph>
  </>
);

export default StructuralPatterns;
