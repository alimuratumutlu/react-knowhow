import { ListItem, Paragraph, SectionTitle } from '@components';

const KeepItStupidSimple = (
  <>
    <Paragraph>
      <strong>Keep It Simple Stupid (KISS)</strong> is a principle in software engineering that
      suggests that code should be kept as simple as possible. The principle is based on the idea
      that simpler code is easier to understand, debug, and maintain than complex code.
    </Paragraph>

    <Paragraph>
      The KISS principle suggests that developers should strive for simplicity in all aspects of
      their code, including architecture, design, and implementation. This can be achieved through
      the use of modular design, clear documentation, and avoiding unnecessary complexity.
    </Paragraph>

    <SectionTitle>Benefits</SectionTitle>

    <ListItem
      itemLabel="Easier maintenance: "
      itemDescription="Simple code is easier to maintain than complex code, as it is easier to understand and debug."
    />

    <ListItem
      itemLabel="Improved readability: "
      itemDescription="Simple code is easier to read and understand, making it easier for other developers to work with and modify."
    />

    <ListItem
      itemLabel="Reduced risk of errors: "
      itemDescription="Simple code is less likely to contain errors or bugs than complex code, as it is easier to understand and test."
    />

    <ListItem
      itemLabel="Faster development: "
      itemDescription="Simple code is often faster to develop than complex code, as it requires less time and effort to design, implement, and test."
    />

    <SectionTitle>Examples</SectionTitle>

    <ListItem
      itemLabel="Modular design: "
      itemDescription="Breaking the system down into smaller, more manageable modules that are easier to understand and maintain."
    />

    <ListItem
      itemLabel="Clear documentation: "
      itemDescription="Documenting code clearly and concisely, to make it easier for other developers to understand and modify."
    />

    <ListItem
      itemLabel="Avoiding unnecessary complexity: "
      itemDescription="Simplifying code by avoiding unnecessary complexity, such as overly complex algorithms or design patterns."
    />

    <Paragraph>
      Overall, the KISS principle is a powerful principle that can improve the quality and
      maintainability of software systems. By striving for simplicity in all aspects of their code,
      developers can reduce complexity, improve readability, and promote modularity and separation
      of concerns in their code.
    </Paragraph>
  </>
);

export default KeepItStupidSimple;
