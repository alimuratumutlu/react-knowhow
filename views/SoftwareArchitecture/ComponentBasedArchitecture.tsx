import { ListItem, Paragraph, SectionTitle } from '@components';

const ComponentBasedArchitecture = (
  <>
    <Paragraph>
      Component-based architecture is an architectural style that is used in software development to
      build software systems using reusable components. It involves breaking down software systems
      into smaller, independent components that can be developed, tested, and deployed
      independently. Here are the key components of component-based architecture:
    </Paragraph>
    <SectionTitle>1. Components</SectionTitle>
    <Paragraph>
      Components are the building blocks of component-based architecture. Components are
      independent, reusable pieces of code that can be used to build software systems. Components
      can be developed, tested, and deployed independently, which makes software development more
      efficient and reduces the time required to develop and deploy software systems.
    </Paragraph>
    <SectionTitle>2. Interfaces</SectionTitle>
    <Paragraph>
      Interfaces are the contracts between components. Interfaces define how components interact
      with each other and what services they provide. Interfaces ensure that components are loosely
      coupled and can be replaced or upgraded without affecting other components.
    </Paragraph>
    <SectionTitle>3. Dependency Injection</SectionTitle>
    <Paragraph>
      Dependency injection is the process of injecting dependencies into components at runtime.
      Dependency injection ensures that components are modular and can be developed, tested, and
      deployed independently. Dependency injection also ensures that components are loosely coupled
      and can be replaced or upgraded without affecting other components.
    </Paragraph>
    <SectionTitle>4. Configuration</SectionTitle>
    <Paragraph>
      Configuration is the process of configuring components at runtime. Configuration includes
      setting component properties, initializing component state, and setting component
      dependencies. Configuration ensures that components are flexible and can be customized to meet
      specific requirements.
    </Paragraph>
    <SectionTitle>5. Testing</SectionTitle>
    <Paragraph>
      Testing is the process of ensuring that components are working correctly. Testing includes
      unit testing, integration testing, and system testing. Testing ensures that components are
      reliable, efficient, and meet functional and non-functional requirements.
    </Paragraph>
    <SectionTitle>Benefits of Component-Based Architecture</SectionTitle>
    <Paragraph>Here are some benefits of component-based architecture:</Paragraph>
    <Paragraph>
      <ListItem
        itemLabel="🌲 Reusability: "
        itemDescription="Components can be reused in multiple software systems, which reduces development time and increases software system quality."
      />

      <ListItem
        itemLabel="🌲 Scalability: "
        itemDescription="Components can be scaled independently, which enables software systems to handle high loads and provide high availability."
      />

      <ListItem
        itemLabel="🌲 Maintainability: "
        itemDescription="Components are modular and can be easily replaced or upgraded, which reduces the cost and time required for maintenance."
      />

      <ListItem
        itemLabel="🌲 Efficiency: "
        itemDescription="Components can be developed, tested, and deployed independently, which makes software development more efficient and reduces the time required to develop and deploy software systems."
      />

      <ListItem
        itemLabel="🌲 Flexibility: "
        itemDescription="Components are flexible and can be customized to meet specific requirements, which enables software systems to meet different user needs."
      />
    </Paragraph>
  </>
);

export default ComponentBasedArchitecture;
