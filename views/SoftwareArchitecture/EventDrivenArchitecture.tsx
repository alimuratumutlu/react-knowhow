import { ListItem, Paragraph, SectionTitle } from '@components';

const EventDrivenArchitecture = (
  <>
    <Paragraph>
      {' '}
      Event-driven architecture (EDA) is an architectural style that is used to build software
      systems that respond to events, such as user interactions, system events, or external events.
      EDA is based on the idea that software systems should be reactive and respond to events in
      real-time. Here are the key components of event-driven architecture:
    </Paragraph>

    <SectionTitle>1. Events</SectionTitle>
    <Paragraph>
      Events are the driving force behind event-driven architecture. Events can be user
      interactions, system events, or external events. Events can trigger actions in software
      systems, which enables them to respond to changes in real-time.
    </Paragraph>
    <SectionTitle>2. Event Broker</SectionTitle>
    <Paragraph>
      An event broker is a component that manages the communication between components in an
      event-driven architecture. The event broker receives events and forwards them to the
      appropriate components. The event broker decouples components and enables them to communicate
      without knowing about each other.
    </Paragraph>

    <SectionTitle>3. Event Handlers</SectionTitle>
    <Paragraph>
      Event handlers are the components that handle events in an event-driven architecture. Event
      handlers receive events from the event broker and perform actions based on the events they
      receive. Event handlers are decoupled from other components and can be easily replaced or
      upgraded.
    </Paragraph>

    <SectionTitle>4. Event Streams</SectionTitle>
    <Paragraph>
      Event streams are the channels through which events are communicated in an event-driven
      architecture. Event streams are used to transmit events from the event broker to event
      handlers. Event streams are scalable and can handle high volumes of events.
    </Paragraph>

    <SectionTitle>5. Event Sourcing</SectionTitle>
    <Paragraph>
      Event sourcing is a technique that is used to capture and store events in an event-driven
      architecture. Event sourcing ensures that all changes to a system are captured as events,
      which enables systems to be easily audited and provides a historical record of system changes.
    </Paragraph>

    <SectionTitle>Benefits of Event-Driven Architecture</SectionTitle>
    <Paragraph>Here are some benefits of event-driven architecture:</Paragraph>

    <ListItem
      itemLabel="🍀 Reusability: "
      itemDescription="Event-driven architecture is reusable and can be used to build multiple software systems."
    />
    <ListItem
      itemLabel="🍀 Scalability: "
      itemDescription="Event-driven architecture is scalable and can handle high volumes of events."
    />
    <ListItem
      itemLabel="🍀 Flexibility: "
      itemDescription="Event-driven architecture is flexible and can respond to changes in real-time."
    />
    <ListItem
      itemLabel="🍀 Decoupling: "
      itemDescription="Event-driven architecture decouples components and enables them to communicate without knowing about each other."
    />
    <ListItem
      itemLabel="🍀 Modularity: "
      itemDescription="Event-driven architecture is modular and enables components to be easily replaced or upgraded."
    />
    <ListItem
      itemLabel="🍀 Resilience: "
      itemDescription="Event-driven architecture is resilient and can recover from failures quickly."
    />
  </>
);

export default EventDrivenArchitecture;
