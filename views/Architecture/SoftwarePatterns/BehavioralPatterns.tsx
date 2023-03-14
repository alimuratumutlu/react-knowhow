import { Paragraph, SectionTitle } from '@components';

const BehavioralPatterns = (
  <>
    <Paragraph>
      Behavioral patterns are design patterns that focus on managing communication and behavior
      between objects in a software system. These patterns define the way that different objects
      interact with each other to accomplish specific tasks or goals. There are several different
      types of behavioral patterns, including:
    </Paragraph>

    <SectionTitle>Mediator Pattern</SectionTitle>
    <Paragraph>
      This pattern defines an object that encapsulates how a set of objects interact. This allows
      the objects to interact with each other without being tightly coupled, and allows the
      interaction to be customized or changed at runtime.
    </Paragraph>

    <SectionTitle>Observer Pattern</SectionTitle>
    <Paragraph>
      This pattern defines a one-to-many dependency between objects, where changes to one
      object&apos;s state trigger updates to all other objects that depend on it.
    </Paragraph>

    <SectionTitle>Strategy Pattern</SectionTitle>
    <Paragraph>
      This pattern defines a family of algorithms, encapsulates each one, and makes them
      interchangeable. This allows the algorithm to be selected at runtime based on the specific
      context or situation.
    </Paragraph>

    <SectionTitle>Template Method Pattern</SectionTitle>
    <Paragraph>
      This pattern defines a skeleton of an algorithm, with some steps left to be defined by
      subclasses. This allows for the behavior of an algorithm to be customized by different
      subclasses.
    </Paragraph>

    <SectionTitle>Visitor Pattern</SectionTitle>
    <Paragraph>
      This pattern defines a new operation to a set of classes without changing the classes. This
      allows for new operations to be added to existing classes without modifying the classes.
    </Paragraph>

    <SectionTitle>Command Pattern</SectionTitle>
    <Paragraph>
      This pattern encapsulates a request as an object, allowing the request to be queued, logged,
      or even undone at a later time.
    </Paragraph>

    <SectionTitle>Chain of Responsibility Pattern</SectionTitle>
    <Paragraph>
      This pattern allows multiple objects to handle a request, with each object checking whether it
      can handle the request and passing it on to the next object in the chain if it cannot.
    </Paragraph>

    <SectionTitle>Interpreter Pattern</SectionTitle>
    <Paragraph>
      This pattern defines a way to represent a grammar or language, and provides a way to interpret
      and execute code written in that language.
    </Paragraph>

    <Paragraph>
      Overall, behavioral patterns provide a set of guidelines and best practices for managing
      communication and behavior between objects in a software system. By using these patterns,
      developers can create systems that are more flexible, adaptable, and maintainable, and that
      can be customized to different situations or contexts.
    </Paragraph>
  </>
);

export default BehavioralPatterns;
