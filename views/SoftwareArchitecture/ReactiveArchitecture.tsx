import { ListItem, Paragraph } from '@components';

const ReactiveArchitecture = (
  <>
    <Paragraph>
      Reactive architecture is an approach to building software systems that is designed to handle
      high volumes of data and traffic, with a focus on responsiveness, elasticity, and resilience.
      Reactive systems are able to react quickly to changing conditions and are able to scale up or
      down dynamically in response to changes in traffic or load.
    </Paragraph>

    <Paragraph>Reactive architecture is based on a number of key principles:</Paragraph>

    <ListItem
      itemLabel="Responsive: "
      itemDescription="Reactive systems respond quickly to user inputs and changes in conditions, providing real-time feedback and updates."
    />

    <ListItem
      itemLabel="Elastic: "
      itemDescription="Reactive systems are able to scale up or down dynamically in response to changes in traffic or load."
    />

    <ListItem
      itemLabel="Resilient: "
      itemDescription="Reactive systems are designed to be fault-tolerant and to recover quickly from failures, without affecting the overall performance of the system."
    />

    <ListItem
      itemLabel="Message-driven: "
      itemDescription="Reactive systems use asynchronous message passing to communicate between components, which allows them to handle high volumes of data and traffic."
    />

    <ListItem
      itemLabel="Event-driven: "
      itemDescription="Reactive systems are based on events, which are used to trigger actions and updates within the system."
    />

    <Paragraph>
      Some common technologies and frameworks used in reactive architecture include:
    </Paragraph>

    <ListItem
      itemLabel="Reactive Streams: "
      itemDescription="A specification for asynchronous, non-blocking stream processing of data with back-pressure."
    />

    <ListItem
      itemLabel="Akka: "
      itemDescription="A toolkit and runtime for building highly concurrent, distributed, and fault-tolerant systems."
    />

    <ListItem
      itemLabel="Spring Boot: "
      itemDescription="A popular Java-based framework for building web applications, with built-in support for reactive programming."
    />

    <ListItem
      itemLabel="Vert.x: "
      itemDescription="A lightweight and modular toolkit for building reactive applications on the JVM."
    />

    <ListItem
      itemLabel="RxJava: "
      itemDescription="A Java implementation of the ReactiveX library for composing asynchronous and event-based programs."
    />

    <ListItem
      itemLabel="RxJS: "
      itemDescription="A JavaScript implementation of the ReactiveX library for composing asynchronous and event-based programs."
    />

    <ListItem
      itemLabel="RxSwift: "
      itemDescription="A Swift implementation of the ReactiveX library for composing asynchronous and event-based programs."
    />

    <ListItem
      itemLabel="Rx.NET: "
      itemDescription="A .NET implementation of the ReactiveX library for composing asynchronous and event-based programs."
    />

    <ListItem
      itemLabel="ReactiveX: "
      itemDescription="A library for composing asynchronous and event-based programs, with support for multiple programming languages."
    />

    <Paragraph>
      Overall, reactive architecture is a powerful approach to building software systems that are
      able to handle high volumes of data and traffic, while providing a high degree of
      responsiveness, elasticity, and resilience. It is well-suited for applications that require
      real-time feedback and updates, such as streaming, event-driven, and IoT applications.
    </Paragraph>
  </>
);

export default ReactiveArchitecture;
