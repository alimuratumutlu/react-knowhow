import { ListItem, Paragraph, SectionTitle } from '@components';

const ConventionOverConfiguration = (
  <>
    <Paragraph>
      Convention over configuration is a principle in software engineering that suggests that
      developers can reduce the amount of configuration needed in an application by relying on
      common conventions or defaults. The idea is that many applications have common requirements,
      and developers can leverage these commonalities by following established conventions, rather
      than having to configure each detail explicitly.
    </Paragraph>

    <Paragraph>
      {' '}
      Convention over configuration has its roots in the Ruby on Rails web development framework,
      which emphasized the use of sensible defaults and common conventions to simplify the
      development process. Since then, many other frameworks and programming languages have adopted
      similar principles, including Django (Python), Grails (Java), and Spring Boot (Java).
    </Paragraph>

    <SectionTitle>Benefits</SectionTitle>

    <ListItem
      itemLabel="Reduced complexity: "
      itemDescription="Convention over configuration can simplify application development by reducing the amount of configuration needed, as developers can rely on established conventions and defaults."
    />

    <ListItem
      itemLabel="Increased productivity: "
      itemDescription="By relying on conventions and defaults, developers can focus on writing code, rather than spending time configuring the application."
    />

    <ListItem
      itemLabel="Improved consistency: "
      itemDescription="Convention over configuration can improve consistency across applications, as developers follow the same conventions and defaults."
    />

    <ListItem
      itemLabel="Easier onboarding: "
      itemDescription="Developers new to a project can get up to speed more quickly, as they can rely on established conventions and defaults, rather than having to learn every detail of the application's configuration."
    />

    <SectionTitle>Examples</SectionTitle>

    <ListItem
      itemLabel="Naming conventions: "
      itemDescription="Naming conventions for files and directories, such as using models for storing database models and views for storing user interface templates."
    />

    <ListItem
      itemLabel="Default settings: "
      itemDescription="Default settings and configurations, such as using port 80 for HTTP traffic or a specific format for date and time representations."
    />

    <ListItem
      itemLabel="Code generators: "
      itemDescription="Code generators and scaffolding tools that automatically create code based on common conventions and defaults."
    />

    <Paragraph>
      Overall, convention over configuration is a powerful principle that can simplify application
      development, improve consistency, and increase productivity. By following established
      conventions and defaults, developers can focus on writing code, rather than spending time
      configuring the application.
    </Paragraph>
  </>
);

export default ConventionOverConfiguration;
