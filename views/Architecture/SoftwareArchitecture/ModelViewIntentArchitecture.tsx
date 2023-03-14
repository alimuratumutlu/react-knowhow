import { ListItem, Paragraph } from '@components';

const ModelViewIntentArchitecture = (
  <>
    <Paragraph>
      Model-View-Intent (MVI) architecture is a relatively new approach to building software systems
      that is gaining popularity, especially in mobile app development. MVI is an architectural
      pattern that is similar to Model-View-ViewModel (MVVM) and Model-View-Presenter (MVP)
      architectures but places a stronger emphasis on unidirectional data flow and separation of
      concerns.
    </Paragraph>

    <Paragraph>
      In MVI architecture, the application is divided into three main components:
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
      itemLabel="Intent: "
      itemDescription="The intent acts as an intermediary between the view and the model. It represents the user's intention to interact with the system and translates that intention into actions that can be taken by the model."
    />

    <Paragraph>Some important aspects of MVI architecture include:</Paragraph>

    <ListItem
      itemLabel="Unidirectional data flow: "
      itemDescription="MVI architecture emphasizes unidirectional data flow, where data flows in one direction from the model to the view and user actions flow in the opposite direction from the view to the model via the intent."
    />

    <ListItem
      itemLabel="Separation of concerns: "
      itemDescription="MVI separates the application into distinct components, each with its own set of responsibilities, making it easier to manage and maintain."
    />

    <ListItem
      itemLabel="Testability: "
      itemDescription="MVI places a strong emphasis on testability, making it easier to write unit tests for each component of the system."
    />

    <ListItem
      itemLabel="Flexibility: "
      itemDescription="MVI architecture allows for a wide range of applications, from simple websites to complex enterprise systems."
    />

    <ListItem
      itemLabel="Maintainability: "
      itemDescription="MVI architecture is designed to be modular and maintainable, making it easier to add new features, fix bugs, or update the system."
    />

    <Paragraph>
      Overall, MVI architecture is a flexible and testable approach to building software systems,
      with a focus on separation of concerns, modularity, maintainability, and unidirectional data
      flow. It is well-suited for a wide range of applications, particularly those that require a
      high degree of testability and maintainability.
    </Paragraph>
  </>
);

export default ModelViewIntentArchitecture;
