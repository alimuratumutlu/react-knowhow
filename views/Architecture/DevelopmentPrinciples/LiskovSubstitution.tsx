/* eslint-disable max-len */
import { ListItem, Paragraph, SectionTitle } from '@components';

const LiskovSubstitution = (
  <>
    <Paragraph>The Liskov Substitution Principle (LSP) is a design principle in object-oriented programming that suggests that subtypes should be substitutable for their base types, without affecting the correctness of the program. The principle is named after Barbara Liskov, who first formulated it in a 1987 paper.</Paragraph>

    <Paragraph>In simpler terms, the LSP suggests that objects of a superclass should be able to be replaced by objects of a subclass without causing errors or unexpected behavior. This means that a subclass should be able to inherit all the properties and behaviors of its parent class, and should not change or remove any of its functionality.</Paragraph>

    <Paragraph>The LSP is based on the idea that a subclass should be able to be used in place of its parent class without causing any unexpected behavior. This means that a subclass should be able to inherit all the properties and behaviors of its parent class, and should not change or remove any of its functionality.</Paragraph>

    <SectionTitle>Benefits</SectionTitle>

    <ListItem itemLabel="Improved maintainability: " itemDescription="By ensuring that objects can be used interchangeably, the system can be made more maintainable and easier to modify over time." />

    <ListItem itemLabel="Improved flexibility: " itemDescription="By ensuring that objects can be used interchangeably, the system can be made more flexible and adaptable to changes." />

    <ListItem itemLabel="Improved testability: " itemDescription="By ensuring that objects can be used interchangeably, testing can be simplified and made more efficient." />

    <ListItem itemLabel="Improved reusability: " itemDescription="By making objects more general and reusable, code can be shared more easily between different parts of the system." />

    <SectionTitle>Example</SectionTitle>

    <ListItem itemDescription="Using interfaces or abstract classes to define common behaviors that can be inherited by different subclasses." />

    <ListItem itemDescription="Avoiding changing the behavior or functionality of inherited methods in subclasses." />
    <ListItem itemDescription="Ensuring that any exceptions or error conditions thrown by a subclass are compatible with the exceptions or error conditions thrown by its parent class." />

  </>
);

export default LiskovSubstitution;
