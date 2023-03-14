import { ListItem, Paragraph, SectionTitle } from '@components';

const CompositionOverInheritance = (
  <>
    <Paragraph>
      Composition over inheritance is a principle in software engineering that suggests that
      composition (i.e., assembling objects from smaller parts) is often a better approach than
      inheritance (i.e., defining new classes based on existing ones) for achieving code reuse and
      flexibility.
    </Paragraph>

    <Paragraph>
      Inheritance involves creating a new class by inheriting the properties and methods of an
      existing class. Inheritance can simplify code by reusing existing code, but it can also create
      complex class hierarchies that are difficult to understand and maintain.
    </Paragraph>

    <Paragraph>
      Composition, on the other hand, involves creating objects by combining simpler objects or
      components. Composition promotes code reuse by combining existing components in new ways,
      without creating complex class hierarchies. Composition also makes it easier to modify and
      extend the behavior of objects, as new components can be added or replaced without affecting
      the existing code.
    </Paragraph>

    <SectionTitle>Benefits</SectionTitle>

    <ListItem
      itemLabel="Flexibility: "
      itemDescription="Composition allows for greater flexibility in object design, as objects can be assembled from different components in different ways, making it easier to modify and extend their behavior."
    />

    <ListItem
      itemLabel="Encapsulation: "
      itemDescription="Composition promotes encapsulation, as objects can be composed of smaller, more specialized objects that perform specific tasks."
    />

    <ListItem
      itemLabel="Code reuse: "
      itemDescription="Composition promotes code reuse, as components can be used in multiple objects, without creating complex inheritance hierarchies."
    />

    <ListItem
      itemLabel="Testability: "
      itemDescription="Composition makes it easier to test objects, as components can be tested independently of the objects that use them."
    />

    <SectionTitle>Examples</SectionTitle>

    <ListItem
      itemLabel="Factory pattern: "
      itemDescription="A pattern for creating objects by encapsulating their creation logic in a factory class."
    />

    <ListItem
      itemLabel="Dependency Injection: "
      itemDescription="A technique for assembling objects by injecting their dependencies through their constructors or properties."
    />

    <ListItem
      itemLabel="Decorator pattern: "
      itemDescription="A pattern for adding behavior to an object by wrapping it in another object that provides the additional behavior."
    />

    <ListItem
      itemLabel="Dependency Injection: "
      itemDescription="A pattern for adapting an existing object to a new interface by creating a new object that translates between the two interfaces."
    />

    <ListItem
      itemLabel="Adapter pattern: "
      itemDescription="A pattern for adapting an existing object to a new interface by creating a new object that translates between the two interfaces."
    />

    <Paragraph>
      Overall, composition over inheritance is a powerful principle that promotes flexible and
      maintainable code. By using composition to assemble objects from smaller components,
      developers can achieve code reuse, encapsulation, and flexibility without creating complex
      class hierarchies.
    </Paragraph>
  </>
);

export default CompositionOverInheritance;
