import { ListItem, Paragraph } from '@components';

const RepositoryBasedArchitecture = (
  <>
    <Paragraph>
      Repository-based architecture is an architectural pattern that separates the persistence and
      retrieval of data from the rest of the application&apos;s logic. In this pattern, a repository
      acts as a mediator between the data source and the application logic. The repository is
      responsible for managing the data access, including querying, filtering, sorting, and
      retrieving data from the data source.
    </Paragraph>

    <Paragraph>The key components of repository-based architecture include:</Paragraph>

    <ListItem
      itemLabel="Entities: "
      itemDescription="The objects that represent the data being managed by the application."
    />

    <ListItem
      itemLabel="Repository interface: "
      itemDescription="An abstract interface that defines the operations that can be performed on the data, such as adding, deleting, updating, and querying."
    />

    <ListItem
      itemLabel="Concrete repository implementation: "
      itemDescription="The actual implementation of the repository interface that provides the specific implementation of the data access logic."
    />

    <ListItem
      itemLabel="Data source: "
      itemDescription="The underlying data storage system, such as a database, file system, or cloud storage."
    />

    <Paragraph>
      Some common technologies and frameworks used in repository-based architecture include:
    </Paragraph>

    <ListItem
      itemLabel="Object-Relational Mapping (ORM) frameworks: "
      itemDescription="A set of libraries or tools that provide a mapping between the database and the application entities."
    />

    <ListItem
      itemLabel="Hibernate: "
      itemDescription="A popular Java-based ORM framework that provides an easy-to-use interface for managing database operations."
    />

    <ListItem
      itemLabel="Entity Framework: "
      itemDescription="A Microsoft .NET-based ORM framework that provides a similar interface to Hibernate."
    />

    <ListItem
      itemLabel="Spring Data: "
      itemDescription="A framework for building repository-based architectures in Java that provides a set of reusable components and tools for managing data access."
    />

    <Paragraph>
      Overall, repository-based architecture is a useful pattern for building software systems that
      need to manage and manipulate large volumes of data. By separating the data access logic from
      the application logic, repository-based architecture can make it easier to maintain and modify
      the application over time.
    </Paragraph>
  </>
);

export default RepositoryBasedArchitecture;
