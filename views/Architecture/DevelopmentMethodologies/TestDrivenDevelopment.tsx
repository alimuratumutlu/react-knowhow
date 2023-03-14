import { Paragraph } from '@components';

const TestDrivenDevelopment = (
  <>
    <Paragraph>
      Test Driven Development (TDD) is a software development methodology that emphasizes writing
      automated tests before writing the code. It was first introduced by Kent Beck in the late
      1990s.
    </Paragraph>
    <Paragraph>
      In TDD, the process begins with writing a failing test case that defines the desired
      functionality. The developer then writes the code necessary to pass the test case, and once
      the test case passes, the code is refactored and improved. This process is repeated for each
      new piece of functionality, with a focus on ensuring that all code is thoroughly tested and
      that the tests are automated.
    </Paragraph>
    <Paragraph>
      TDD emphasizes a high degree of test coverage, with a focus on ensuring that all code is
      thoroughly tested and that the tests are automated. It includes techniques for creating and
      maintaining automated tests, as well as for identifying and addressing issues and bugs
      quickly.
    </Paragraph>
    <Paragraph>
      TDD is often used in conjunction with other methodologies, such as Agile or Extreme
      Programming (XP), and can be adapted to suit the specific needs of a team or organization. It
      is particularly well-suited for projects with a significant focus on quality and reliability,
      or for projects where the requirements may change frequently. However, it may not be suitable
      for all projects, as it can be challenging to implement in some situations and may require a
      significant investment in time and resources.
    </Paragraph>
  </>
);

export default TestDrivenDevelopment;
