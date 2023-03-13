import { ListItem, Paragraph } from '@components';

const ModelViewPresenterArchitecture = (
  <>
    <Paragraph>
      Model-View-Presenter (MVP) architecture is an approach to building software systems that is
      similar to Model-View-Controller (MVC) architecture but places a stronger emphasis on
      separation of concerns and testability.
    </Paragraph>
    <Paragraph>
      In MVP architecture, the application is divided into three main components:
    </Paragraph>

    <ListItem
      itemLabel="Model: "
      itemDescription="The model represents the data and the business logic of the application. It encapsulates the state and behavior of the application's data and provides methods for accessing and manipulating that data."
    />

    <ListItem
      itemLabel="View: "
      itemDescription="The view represents the user interface of the application. It displays the data to the user and allows the user to interact with the data. The view is responsible for presenting the data to the user in a meaningful and intuitive way."
    />

    <ListItem
      itemLabel="Presenter: "
      itemDescription="The presenter acts as an intermediary between the model and the view. It receives input from the user via the view, processes that input by invoking appropriate methods on the model, and updates the view with the results."
    />

    <Paragraph>Some important aspects of MVP architecture include:</Paragraph>

    <ListItem
      itemLabel="Separation of concerns: "
      itemDescription="MVP separates the application into distinct components, each with its own set of responsibilities, making it easier to manage and maintain."
    />

    <ListItem
      itemLabel="Testability: "
      itemDescription="MVP places a strong emphasis on testability, making it easier to write unit tests for each component of the system."
    />

    <ListItem
      itemLabel="Flexibility: "
      itemDescription="MVP architecture allows for a wide range of applications, from simple websites to complex enterprise systems."
    />

    <ListItem
      itemLabel="Maintainability: "
      itemDescription="MVP architecture is designed to be modular and maintainable, making it easier to add new features, fix bugs, or update the system."
    />

    <ListItem
      itemLabel="Scalability: "
      itemDescription="MVP architecture can be highly scalable, as components can be added or removed dynamically to handle changes in the workload."
    />

    <Paragraph>
      Overall, MVP architecture is a flexible and testable approach to building software systems,
      with a focus on separation of concerns, modularity, maintainability, and scalability. It is
      well-suited for a wide range of applications, particularly those that require a high degree of
      testability and maintainability.
    </Paragraph>
  </>
);

export default ModelViewPresenterArchitecture;
