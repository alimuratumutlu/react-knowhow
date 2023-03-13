import { Paragraph, SectionTitle } from '@components';

const ConcurrencyPatterns = (
  <>
    <Paragraph>
      Concurrency patterns are design patterns that focus on managing concurrent access to shared
      resources in a software system. These patterns provide solutions to common problems that arise
      when multiple threads or processes access the same data or resources simultaneously. By using
      concurrency patterns, developers can build systems that are more reliable, efficient, and
      scalable. Some commonly used concurrency patterns include:
    </Paragraph>

    <SectionTitle>Mutex Pattern</SectionTitle>
    <Paragraph>
      This pattern provides a way to synchronize access to shared resources, by using a lock or
      mutex to ensure that only one thread can access the resource at a time.
    </Paragraph>

    <SectionTitle>Read-Write Lock Pattern</SectionTitle>

    <Paragraph>
      This pattern allows multiple threads to read a shared resource simultaneously, but only one
      thread to write to the resource at a time.
    </Paragraph>

    <SectionTitle>Thread Pool Pattern</SectionTitle>
    <Paragraph>
      This pattern allows a fixed number of threads to be created and reused, to handle incoming
      requests or tasks.
    </Paragraph>
    <Paragraph>
      Monitor pattern: This pattern provides a way to ensure that only one thread can access a
      shared resource at a time, by using a monitor or condition variable to block other threads
      from accessing the resource.
    </Paragraph>

    <SectionTitle>Producer-Consumer pattern</SectionTitle>
    <Paragraph>
      This pattern provides a way to coordinate the processing of tasks between multiple threads, by
      using a queue to store tasks and separate threads to produce or consume tasks from the queue.
    </Paragraph>

    <SectionTitle>Actor pattern</SectionTitle>
    <Paragraph>
      This pattern models concurrent processes as independent actors that communicate with each
      other through message passing, rather than shared memory or data.
    </Paragraph>

    <Paragraph>
      Overall, concurrency patterns provide a set of guidelines and best practices for managing
      concurrent access to shared resources in a software system. By using these patterns,
      developers can build systems that are more reliable, efficient, and scalable, and that can
      handle high levels of concurrency and load.
    </Paragraph>
  </>
);

export default ConcurrencyPatterns;
