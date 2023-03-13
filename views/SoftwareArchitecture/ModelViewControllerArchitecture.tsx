import { ListItem, Paragraph } from '@components';

const ModelViewControllerArchitecture = (
  <>
    <Paragraph>
      Model-View-Controller (MVC) architecture is an approach to building software systems that
      separates the application into three main components: the model, the view, and the controller.
      This approach is widely used in web and mobile application development.
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
      itemLabel="Controller: "
      itemDescription="The controller acts as an intermediary between the model and the view. It receives input from the user via the view, processes that input by invoking appropriate methods on the model, and updates the view with the results."
    />

    <Paragraph>Some important aspects of MVC architecture include:</Paragraph>

    <ListItem
      itemLabel="Separation of concerns: "
      itemDescription="MVC separates the application into distinct components, each with its own set of responsibilities, making it easier to manage and maintain."
    />
    <ListItem
      itemLabel="Reusability: "
      itemDescription="Components can be reused in different configurations, making it easier to build new systems from existing components."
    />
    <ListItem
      itemLabel="Scalability: "
      itemDescription="MVC architecture can be highly scalable, as components can be added or removed dynamically to handle changes in the workload."
    />
    <ListItem
      itemLabel="Flexibility: "
      itemDescription="MVC architecture allows for a wide range of applications, from simple websites to complex enterprise systems."
    />
    <ListItem
      itemLabel="Maintainability: "
      itemDescription="MVC architecture is designed to be modular and maintainable, making it easier to add new features, fix bugs, or update the system."
    />

    <Paragraph>
      Overall, MVC architecture is a widely used approach to building software systems, with a focus
      on separation of concerns, modularity, and maintainability. It is well-suited for a wide range
      of applications, from simple websites to complex enterprise systems, and is particularly
      well-suited for web and mobile applications.
    </Paragraph>
  </>
);

export default ModelViewControllerArchitecture;
