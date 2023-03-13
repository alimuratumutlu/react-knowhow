import { ListItem, Paragraph, SectionTitle } from '@components';

const DependencyInversion = (
  <>
    <Paragraph>
      Dependency inversion is a principle in object-oriented design that suggests that high-level
      modules or classes should not depend on low-level modules or classes, but rather on
      abstractions. The principle is based on the idea that code should be designed to be flexible
      and adaptable to change, and that high-level modules should not be tightly coupled to
      low-level modules.
    </Paragraph>

    <Paragraph>
      The principle of dependency inversion is typically achieved through the use of interfaces or
      abstract classes, which define a set of methods or properties that must be implemented by any
      concrete class that uses the interface or abstract class. This allows high-level modules to
      interact with low-level modules through the abstraction provided by the interface or abstract
      class, rather than depending directly on the concrete implementation of the low-level module.
    </Paragraph>

    <SectionTitle>Benefits</SectionTitle>

    <ListItem
      itemLabel="Flexibility: "
      itemDescription="By relying on abstractions rather than concrete implementations, code can be more flexible and adaptable to change."
    />

    <ListItem
      itemLabel="Testability: "
      itemDescription="Code that relies on abstractions is typically easier to test, as dependencies can be easily mocked or replaced."
    />

    <ListItem
      itemLabel="Modularity: "
      itemDescription="Code that follows the dependency inversion principle is typically more modular, as dependencies can be easily swapped out or modified without affecting the rest of the application."
    />

    <ListItem
      itemLabel="Separation of concerns: "
      itemDescription="Dependency inversion promotes the separation of concerns, as high-level modules can focus on their specific tasks without worrying about the implementation details of low-level modules."
    />

    <SectionTitle>Examples</SectionTitle>

    <ListItem
      itemLabel="Dependency Injection: "
      itemDescription="A technique for assembling objects by injecting their dependencies through their constructors or properties."
    />

    <ListItem
      itemLabel="Adapter pattern: "
      itemDescription="A pattern for adapting an existing object to a new interface by creating a new object that translates between the two interfaces."
    />

    <ListItem
      itemLabel="Decorator pattern: "
      itemDescription="A pattern for adding behavior to an object by wrapping it in another object that provides the additional behavior."
    />

    <ListItem
      itemLabel="Inversion of control: "
      itemDescription="A pattern for separating the creation and management of objects from the rest of the application."
    />

    <ListItem
      itemLabel="Interface segregation: "
      itemDescription="A principle that suggests that interfaces should be small and focused, rather than large and monolithic."
    />
  </>
);

export default DependencyInversion;
