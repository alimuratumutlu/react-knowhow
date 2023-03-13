import { ListItem, Paragraph } from '@components';

const ModelViewWhateverArchitecture = (
  <>
    <Paragraph>
      Model-View-Whatever (MVW) architecture is a general term used to refer to a family of
      architectural patterns that share some similarities with Model-View-Controller (MVC),
      Model-View-Presenter (MVP), and Model-View-ViewModel (MVVM) architectures, but have some
      differences in their implementation and use.
    </Paragraph>
    <Paragraph>
      The &quot;Whatever&quot; in MVW can refer to a number of things, such as Controller,
      Presenter, or something else, depending on the specific pattern being used.
    </Paragraph>
    <Paragraph>Some examples of MVW patterns include:</Paragraph>

    <ListItem
      itemLabel="Model-View-Controller (MVC): "
      itemDescription="MVC is a widely used MVW pattern that separates the application into three main components: the model, the view, and the controller. The controller acts as an intermediary between the model and the view, and is responsible for handling user input, processing requests, and updating the model and view accordingly."
    />

    <ListItem
      itemLabel="Model-View-Presenter (MVP): "
      itemDescription="MVP is an MVW pattern that separates the application into three main components: the model, the view, and the presenter. The presenter acts as an intermediary between the model and the view, and is responsible for handling user input, processing requests, and updating the model and view accordingly."
    />

    <ListItem
      itemLabel="Model-View-Adapter (MVA): "
      itemDescription="MVA is an MVW pattern that is similar to MVP, but uses an adapter to communicate between the view and the presenter, rather than direct communication."
    />

    <ListItem
      itemLabel="Model-View-ViewModel (MVVM): "
      itemDescription="MVVM is an MVW pattern that separates the application into three main components: the model, the view, and the ViewModel. The ViewModel acts as an intermediary between the model and the view, and provides data and behavior that the view can bind to, allowing the view to update automatically when the data changes."
    />

    <Paragraph>Some important aspects of MVP architecture include:</Paragraph>

    <Paragraph>
      Overall, MVW architecture is a flexible and versatile approach to building software systems,
      with a focus on separation of concerns, modularity, maintainability, and flexibility. It is
      well-suited for a wide range of applications, from simple websites to complex enterprise
      systems.
    </Paragraph>
  </>
);

export default ModelViewWhateverArchitecture;
