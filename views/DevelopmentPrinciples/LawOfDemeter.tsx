import { ListItem, Paragraph, SectionTitle } from '@components';

const LawOfDemeter = (
  <>
    <Paragraph>
      The Law of Demeter, also known as the Principle of Least Knowledge, is a design guideline in
      object-oriented programming that suggests that a module or object should only communicate with
      its immediate dependencies and not with the dependencies of those dependencies.
    </Paragraph>

    <Paragraph>
      In simpler terms, the Law of Demeter suggests that objects should only talk to their direct
      neighbors and not to strangers. This means that an object should only use methods of other
      objects that are directly related to it, and should not have knowledge of the internal
      workings or dependencies of those objects.
    </Paragraph>

    <Paragraph>
      The Law of Demeter is based on the idea that a module or object should have limited knowledge
      of the rest of the system, to promote modularity and reduce coupling. By reducing the number
      of direct dependencies between objects, the system can be made more flexible and maintainable.
    </Paragraph>

    <SectionTitle>Benefits</SectionTitle>

    <ListItem
      itemLabel="Improved modularity: "
      itemDescription="By reducing coupling between objects, the system can be made more modular and easier to maintain."
    />

    <ListItem
      itemLabel="Improved flexibility: "
      itemDescription="By limiting knowledge of the rest of the system, objects can be made more flexible and adaptable to changes."
    />

    <ListItem
      itemLabel="Improved testability: "
      itemDescription="By limiting dependencies, objects can be more easily isolated and tested."
    />

    <ListItem
      itemLabel="Improved readability: "
      itemDescription="By limiting the scope of an object's dependencies, the code can be made easier to read and understand."
    />

    <SectionTitle>Examples</SectionTitle>

    <ListItem itemDescription="Using getters and setters to access properties of objects, rather than directly accessing them." />

    <ListItem itemDescription="Using interface or abstraction to communicate between objects, rather than direct object references." />

    <ListItem itemDescription="Using facade pattern to simplify complex systems, by providing a simplified interface to a larger system." />
  </>
);

export default LawOfDemeter;
