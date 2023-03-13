import { ListItem, Paragraph, SectionTitle } from '@components';

const OpenClosed = (
  <>
    <Paragraph>
      The Open-Closed Principle (OCP) is a design principle in object-oriented programming that
      suggests that software entities should be open for extension but closed for modification. The
      principle is based on the idea that existing code should not be modified to add new
      functionality, but rather extended through the addition of new code.
    </Paragraph>
    <Paragraph>
      In simpler terms, the OCP suggests that code should be designed to be as extensible as
      possible, without requiring changes to existing code. This means that new features or
      functionality should be added by extending existing code, rather than modifying it directly.
    </Paragraph>

    <Paragraph>
      The OCP is based on the idea that changing existing code can be risky and error-prone, and
      that it is better to design code to be extensible from the beginning. By adhering to the OCP,
      developers can create more flexible and maintainable code.
    </Paragraph>

    <SectionTitle>Benefits</SectionTitle>

    <ListItem
      itemLabel="Improved modularity"
      itemDescription="By designing code to be extensible, the system can be made more modular and easier to maintain."
    />

    <ListItem
      itemLabel="Improved flexibility"
      itemDescription="By allowing code to be extended rather than modified, the system can be made more flexible and adaptable to changes."
    />

    <ListItem
      itemLabel="Improved testability"
      itemDescription="By separating the code that needs to be tested from the code that does not, testing can be simplified and made more efficient."
    />

    <ListItem
      itemLabel="Improved reusability"
      itemDescription="By designing code to be extensible, code can be reused more easily between different parts of the system."
    />

    <SectionTitle>Examples</SectionTitle>

    <ListItem
      itemLabel="Interfaces: "
      itemDescription="Interfaces can be used to define common behaviors that can be inherited by different subclasses."
    />

    <ListItem
      itemLabel="Strategy pattern: "
      itemDescription="The Strategy pattern can be used to separate algorithms or behaviors that can be swapped out at runtime."
    />

    <ListItem
      itemLabel="Decorator pattern: "
      itemDescription="The Decorator pattern can be used to add new functionality to an existing class without modifying it directly."
    />

    <Paragraph>
      Overall, the Open-Closed Principle is a useful guideline for designing object-oriented systems
      that are modular, flexible, and maintainable. By designing code to be extensible from the
      beginning, developers can create code that is easier to maintain and adapt to changes over
      time.
    </Paragraph>
  </>
);

export default OpenClosed;
