import { ListItem, Paragraph } from '@components';

const PublishSubscribeArchitecture = (
  <>
    <Paragraph>
      Publish-Subscribe architecture, also known as Pub/Sub architecture, is an architectural
      pattern used in distributed systems where messages are exchanged between publishers and
      subscribers. In this architecture, publishers produce messages to a particular topic or
      channel and the subscribers receive messages on the topic of their interest. The main goal of
      this architecture is to provide a flexible and scalable system where producers can send
      messages to a large number of subscribers without having to know about them explicitly.
    </Paragraph>
    <Paragraph>The Pub/Sub architecture has the following key components:</Paragraph>

    <ListItem
      itemLabel="Topic: "
      itemDescription="A topic is a channel or a category to which messages are published. Subscribers can subscribe to a topic to receive messages published to that topic."
    />
    <ListItem
      itemLabel="Publisher: "
      itemDescription="A publisher is a component that produces messages and sends them to a particular topic or channel. It is responsible for creating the message and publishing it to the system."
    />
    <ListItem
      itemLabel="Subscriber: "
      itemDescription="A subscriber is a component that receives messages from a particular topic or channel. It subscribes to a topic or channel and receives all messages published to that topic."
    />
    <ListItem
      itemLabel="Broker: "
      itemDescription="A broker is a component that manages the flow of messages between publishers and subscribers. It receives messages from publishers and distributes them to all the subscribers that have subscribed to the topic."
    />

    <Paragraph>Some important aspects of Pub/Sub architecture include:</Paragraph>

    <ListItem
      itemLabel="Decoupling: "
      itemDescription="The Pub/Sub architecture decouples the producers and consumers, which makes the system more flexible and scalable."
    />
    <ListItem
      itemLabel="Scalability: "
      itemDescription="The Pub/Sub architecture is highly scalable as it can handle large numbers of producers and consumers without any changes to the system."
    />
    <ListItem
      itemLabel="Flexibility: "
      itemDescription="The Pub/Sub architecture is flexible as it allows producers and consumers to be added or removed from the system dynamically."
    />
    <ListItem
      itemLabel="Reliability: "
      itemDescription="The Pub/Sub architecture provides high reliability as messages are stored until they are delivered to the subscribers, which ensures that messages are not lost due to network failures or other issues."
    />

    <Paragraph>
      Overall, the Pub/Sub architecture is a flexible and scalable approach to building distributed
      systems, with a focus on decoupling, scalability, flexibility, and reliability. It is
      well-suited for applications that involve high volumes of data, such as real-time data
      processing, streaming, and event-driven systems.
    </Paragraph>
  </>
);

export default PublishSubscribeArchitecture;
