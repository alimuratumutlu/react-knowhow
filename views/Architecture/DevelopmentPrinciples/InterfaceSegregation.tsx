import { ListItem, Paragraph, SectionTitle } from '@components';

const InterfaceSegregation = (
  <>
    <Paragraph>
      Interface segregation is a principle in object-oriented design that suggests that client code
      should not be forced to depend on interfaces that it does not use. The principle is based on
      the idea that interfaces should be small and focused, rather than large and monolithic, to
      promote flexibility and maintainability.
    </Paragraph>

    <Paragraph>
      The interface segregation principle is typically achieved through the use of multiple,
      specialized interfaces, rather than a single, general-purpose interface. This allows client
      code to depend only on the interfaces that it actually uses, rather than being forced to
      depend on a large, unwieldy interface that contains many methods or properties that it does
      not need.
    </Paragraph>

    <SectionTitle>Benefits</SectionTitle>

    <ListItem
      itemLabel="Flexibility: "
      itemDescription="By using small, focused interfaces, code can be more flexible and adaptable to change."
    />

    <ListItem
      itemLabel="Maintainability: "
      itemDescription="Code that follows the interface segregation principle is typically easier to maintain, as dependencies are reduced and the impact of changes is minimized."
    />

    <ListItem
      itemLabel="Testability: "
      itemDescription="Code that relies on small, focused interfaces is typically easier to test, as dependencies can be easily mocked or replaced."
    />

    <ListItem
      itemLabel="Simplicity: "
      itemDescription="By using small, focused interfaces, code can be made simpler and more concise, reducing complexity and improving readability."
    />

    <SectionTitle>Examples</SectionTitle>

    <ListItem
      itemLabel="Adapter pattern: "
      itemDescription="A pattern for adapting an existing object to a new interface by creating a new object that translates between the two interfaces."
    />

    <ListItem
      itemLabel="Decorator pattern: "
      itemDescription="A pattern for adding behavior to an object by wrapping it in another object that provides the additional behavior."
    />

    <ListItem
      itemLabel="Dependency inversion: "
      itemDescription="A principle that suggests that code should depend on abstractions rather than concrete implementations."
    />

    <ListItem
      itemLabel="Interface segregation: "
      itemDescription="A principle that suggests that interfaces should be small and focused, rather than large and monolithic."
    />

    <ListItem
      itemLabel="Single responsibility: "
      itemDescription="A principle that suggests that classes should have a single responsibility, and that a class should only have one reason to change."
    />

    <ListItem
      itemLabel="Strategy pattern: "
      itemDescription="A pattern for encapsulating a family of algorithms into a set of classes that can be used interchangeably at runtime."
    />

    <ListItem
      itemLabel="Template method: "
      itemDescription="A pattern for defining the skeleton of an algorithm in an operation, deferring some steps to subclasses."
    />

    <ListItem
      itemLabel="Visitor pattern: "
      itemDescription="A pattern for separating an algorithm from an object structure by moving the hierarchy of methods into one object."
    />

    <ListItem
      itemLabel="YAGNI: "
      itemDescription="A principle that suggests that code should not be over-engineered, and that new features should not be added until they are actually needed."
    />

    <Paragraph>
      Overall, interface segregation is a powerful principle that promotes flexible, maintainable,
      and testable code. By using small, focused interfaces, developers can reduce complexity,
      increase flexibility, and promote modularity and separation of concerns in their code.
    </Paragraph>
  </>
);

export default InterfaceSegregation;
