import { ListItem, Paragraph } from '@components';

const GeneralResponsibilityAssignment = (
  <>
    <Paragraph>
      GRASP (General Responsibility Assignment Software Patterns) is a set of guidelines for
      assigning responsibilities to classes and objects in object-oriented design. The main goal of
      GRASP is to promote good object-oriented design principles and practices, such as high
      cohesion and low coupling.
    </Paragraph>

    <Paragraph>
      GRASP was developed by Michael Feathers in 1996. It is based on the SOLID principles of
      object-oriented design, which were developed by Robert C. Martin (also known as Uncle Bob).
      Some of the key principles of GRASP include:
    </Paragraph>

    <ListItem
      itemLabel="Information expert"
      itemDescription="Assign responsibility to the class or object that has the most information or knowledge about a particular task or data."
    />
    <ListItem
      itemLabel="Creator"
      itemDescription="Assign responsibility to the class or object that is responsible for creating or instantiating another object."
    />
    <ListItem
      itemLabel="Controller"
      itemDescription="Assign responsibility to the class or object that is responsible for controlling the flow of the application."
    />
    <ListItem
      itemLabel="Low coupling"
      itemDescription="Assign responsibilities to classes or objects that have a low degree of coupling, or dependency, between them."
    />
    <ListItem
      itemLabel="High cohesion"
      itemDescription="Assign responsibilities to classes or objects that have a high degree of cohesion, or relatedness, between their methods and properties."
    />
    <ListItem
      itemLabel="Polymorphism"
      itemDescription="Use polymorphism to assign responsibilities to objects that can perform similar tasks, but with different implementations."
    />
    <ListItem
      itemLabel="Pure fabrication"
      itemDescription="Assign responsibility to a class or object that does not correspond to any real-world entity, but instead serves as a utility or helper class."
    />

    <Paragraph>
      GRASP principles are not specific to any particular programming language or framework. They
      can be applied to any object-oriented programming language, such as C#, Java, or Python.
    </Paragraph>

    <Paragraph> GRASP principles are often used in conjunction with design patterns.</Paragraph>

    <Paragraph>Some common design patterns that are based on GRASP principles include:</Paragraph>

    <ListItem
      itemLabel="Factory method"
      itemDescription="A pattern for creating objects without specifying their exact class."
    />
    <ListItem
      itemLabel="Strategy pattern"
      itemDescription="A pattern for defining a family of interchangeable algorithms or behaviors."
    />
    <ListItem
      itemLabel="Observer pattern"
      itemDescription="A pattern for notifying multiple objects about changes to a single object."
    />

    <Paragraph>
      Overall, GRASP provides a useful set of guidelines for assigning responsibilities to classes
      and objects in object-oriented design. By following GRASP principles, developers can create
      software systems that are well-organized, maintainable, and scalable.
    </Paragraph>
  </>
);

export default GeneralResponsibilityAssignment;
