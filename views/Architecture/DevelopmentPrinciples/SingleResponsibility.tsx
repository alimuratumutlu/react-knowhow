import { Paragraph } from '@components';

const SingleResponsibility = (
  <>
    <Paragraph>
      The Single Responsibility Principle (SRP) is a design principle in software engineering that
      states that a class or module should have only one responsibility or reason to change. This
      principle is often used as a guideline for writing more maintainable, modular, and scalable
      software.
    </Paragraph>
    <Paragraph>
      The idea behind SRP is that by separating responsibilities into different classes or modules,
      each component can be more focused and easier to understand, modify, and test. By ensuring
      that each component has only one responsibility, changes or updates to that responsibility
      will not affect other parts of the system, making it easier to maintain and modify over time.
    </Paragraph>
    <Paragraph>
      For example, consider a class that is responsible for both managing a user&apos;s account
      information and handling email notifications. By applying SRP, this class could be split into
      two separate classes, one for managing user accounts and one for handling email notifications.
      This separation of concerns makes each class easier to understand and modify, and reduces the
      risk of errors or bugs when making changes.
    </Paragraph>
    <Paragraph>
      Overall, SRP is an important principle for building high-quality software that is easy to
      maintain and modify over time. By ensuring that each component of a system has only one
      responsibility, developers can build systems that are more modular, maintainable, and
      scalable, and that can be adapted to changing requirements and environments over time.
    </Paragraph>
  </>
);

export default SingleResponsibility;
