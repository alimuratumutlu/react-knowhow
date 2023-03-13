import { ListItem, Paragraph, SectionTitle } from '@components';

const DoNotRepeatYourself = (
  <>
    <Paragraph>
      <strong>Don&apos;t Repeat Yourself (DRY)</strong> is a principle in software engineering that
      suggests that every piece of knowledge or logic in a system should have a single, unambiguous
      representation. The principle is based on the idea that duplication of code or information can
      lead to errors, inconsistencies, and maintenance issues.
    </Paragraph>

    <Paragraph>
      The DRY principle is often achieved through the use of abstraction, modularity, and code
      reuse. By abstracting common functionality into reusable components or libraries, developers
      can avoid duplicating code and ensure that any changes to the functionality are applied
      consistently throughout the system.
    </Paragraph>

    <SectionTitle>Benefits</SectionTitle>

    <ListItem
      itemLabel="Reduced complexity: "
      itemDescription="By avoiding duplication of code and information, code can be simplified and made more concise."
    />

    <ListItem
      itemLabel="Increased productivity: "
      itemDescription="By using abstractions and code reuse, developers can write code more quickly and efficiently."
    />

    <ListItem
      itemLabel="Improved maintainability: "
      itemDescription="By reducing duplication and inconsistencies in code, the system can be easier to maintain and modify over time."
    />

    <ListItem
      itemLabel="Reduced risk of errors: "
      itemDescription="By ensuring that each piece of knowledge or logic has a single representation, the risk of errors and inconsistencies is reduced."
    />

    <SectionTitle>Examples</SectionTitle>

    <ListItem
      itemLabel="Code reuse: "
      itemDescription="Reusable components and libraries that can be used to avoid duplicating code."
    />

    <ListItem
      itemLabel="Abstraction: "
      itemDescription="Abstractions that can be used to avoid duplicating code and information."
    />

    <ListItem
      itemLabel="Modularity: "
      itemDescription="Modular code that can be reused across different parts of the system."
    />

    <ListItem
      itemLabel="Code libraries: "
      itemDescription="Code libraries that can be used to avoid duplicating code."
    />

    <ListItem
      itemLabel="Templates: "
      itemDescription="Templates or code generation tools that can be used to avoid duplicating code."
    />

    <SectionTitle>Related Principles</SectionTitle>

    <ListItem
      itemLabel="Single Responsibility Principle: "
      itemDescription="The Single Responsibility Principle (SRP) is a software design principle that suggests that each class or module in a system should have a single responsibility."
    />

    <ListItem
      itemLabel="Separation of Concerns: "
      itemDescription="Separation of concerns is a design principle for separating a computer program into distinct sections, such that each section addresses a separate concern."
    />

    <ListItem
      itemLabel="Law of Demeter: "
      itemDescription="The Law of Demeter (LoD) is a design principle that suggests that each unit should have only limited knowledge about other units: only units closely related to the current unit."
    />

    <ListItem
      itemLabel="KISS Principle: "
      itemDescription="The KISS Principle (Keep It Simple, Stupid) is a design principle that suggests that most systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design."
    />

    <ListItem
      itemLabel="YAGNI Principle: "
      itemDescription="The YAGNI Principle (You Ain't Gonna Need It) is a design principle that suggests that developers should not add functionality until deemed necessary by the customer."
    />
  </>
);

export default DoNotRepeatYourself;
