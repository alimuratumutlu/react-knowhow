import { ListItem, Paragraph } from '@components';

const ModelViewAdapterArchitecture = (
  <>
    <Paragraph>
      Model-View-Adapter (MVA) is an architectural pattern used in the design of software
      applications that separates the business logic (model) from the user interface (view) and the
      user input (adapter). MVA is based on the Model-View-Controller (MVC) pattern, but replaces
      the controller with an adapter.
    </Paragraph>

    <Paragraph>In MVA, the three main components are:</Paragraph>

    <ListItem
      itemLabel="Model: "
      itemDescription="This component contains the business logic and data of the application."
    />

    <ListItem
      itemLabel="View: "
      itemDescription="This component provides the user interface for the application and displays the data from the model."
    />

    <ListItem
      itemLabel="Adapter: "
      itemDescription="This component serves as a mediator between the model and the view, and handles user input and events."
    />

    <Paragraph>The key benefits of MVA include:</Paragraph>

    <ListItem
      itemLabel="Separation of concerns: "
      itemDescription="MVA separates the concerns of data management, presentation, and user input, making it easier to maintain and modify the application over time."
    />

    <ListItem
      itemLabel="Testability: "
      itemDescription="MVA makes it easier to test the application, as each component can be tested separately."
    />

    <ListItem
      itemLabel="Reusability: "
      itemDescription="MVA promotes the reuse of components, as the same model and adapter can be used with different views."
    />

    <Paragraph>Some common technologies and frameworks used in MVA include:</Paragraph>

    <ListItem
      itemLabel="Android Architecture Components: "
      itemDescription="A set of libraries that provide a framework for building Android apps using MVA."
    />

    <ListItem
      itemLabel="AngularJS: "
      itemDescription="A JavaScript-based framework for building web applications that uses MVA."
    />

    <ListItem
      itemLabel="Xamarin: "
      itemDescription="A cross-platform development framework that uses MVA to build mobile and desktop apps."
    />

    <Paragraph>
      Overall, MVA is a useful pattern for building software applications that require a separation
      of concerns between the data, the presentation, and the user input. By separating these
      concerns, MVA makes it easier to maintain, modify, and test the application over time.
    </Paragraph>
  </>
);

export default ModelViewAdapterArchitecture;
