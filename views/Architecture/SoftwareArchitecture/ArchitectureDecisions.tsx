import { Paragraph, SectionTitle } from '@components';

const ArchitectureDecisions = (
  <>
    <Paragraph>
      Software architecture is the process of designing and developing the overall structure of a
      software system. It involves making critical decisions that affect the performance,
      scalability, and maintainability of the system. The success of software architecture depends
      on the quality of the architecture decisions made during the design and development process.
      When making architecture decisions for software architecture, the following key factors should
      be considered:
    </Paragraph>

    <SectionTitle>1. Functional Requirements</SectionTitle>
    <Paragraph>
      Functional requirements describe the features and capabilities that a software system must
      provide to meet the needs of its users. Architecture decisions should align with the
      functional requirements of the system. The architecture should be designed to meet the
      specific functional requirements of the system while providing scalability and
      maintainability.
    </Paragraph>

    <SectionTitle>2. Non-Functional Requirements</SectionTitle>
    <Paragraph>
      Non-functional requirements describe the qualities that a software system must possess, such
      as performance, scalability, security, and maintainability. Architecture decisions should
      align with the non-functional requirements of the system. The architecture should be designed
      to meet the specific non-functional requirements of the system while providing scalability and
      maintainability.
    </Paragraph>

    <SectionTitle>3. Technology Stack</SectionTitle>
    <Paragraph>
      The technology stack is the set of technologies that are used to develop the software system.
      Architecture decisions should take into account the capabilities and limitations of the
      technology stack. The architecture should be designed to leverage the strengths of the
      technology stack while mitigating its limitations.
    </Paragraph>

    <SectionTitle>4. Team Capabilities</SectionTitle>
    <Paragraph>
      The capabilities of the development team should be taken into account when making architecture
      decisions. The architecture should be designed to leverage the strengths of the development
      team while providing opportunities for growth and development.
    </Paragraph>

    <SectionTitle>5. Cost and Schedule</SectionTitle>
    <Paragraph>
      The cost and schedule of the software development project should be taken into account when
      making architecture decisions. The architecture should be designed to meet the budget and
      schedule constraints of the project while providing scalability and maintainability.
    </Paragraph>
  </>
);

export default ArchitectureDecisions;
