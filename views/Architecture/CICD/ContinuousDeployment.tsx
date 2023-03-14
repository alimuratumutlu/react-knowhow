import { ListItem, Paragraph, SectionTitle } from '@components';

const ContinuousDeployment = (
  <>
    <Paragraph>
      Continuous Deployment is a software development practice that emphasizes the automatic
      deployment of code changes to production. Continuous Deployment is designed to ensure that
      code changes are delivered quickly and reliably, with high quality and without errors.
    </Paragraph>

    <Paragraph>
      In this article, we&apos;ll cover the most important aspects of continuous deployment,
      including:
    </Paragraph>

    <ListItem itemDescription="Continuous Deployment Basics" />
    <ListItem itemDescription="Continuous Deployment Workflow" />
    <ListItem itemDescription="Continuous Deployment Tools" />

    <SectionTitle>Continuous Deployment Basics</SectionTitle>

    <Paragraph>
      Continuous Deployment involves the automatic deployment of code changes to production.
      Continuous Deployment is designed to ensure that code changes are delivered quickly and
      reliably, with high quality and without errors.
    </Paragraph>

    <Paragraph>Continuous Deployment involves several key practices, including:</Paragraph>

    <ListItem
      itemLabel="Continuous Integration: "
      itemDescription="Continuous Integration involves the automatic building and testing of code whenever changes are made to the code repository."
    />

    <ListItem
      itemLabel="Continuous Delivery: "
      itemDescription="Continuous Delivery involves the automatic deployment of code to a staging environment whenever changes are made to the code repository."
    />

    <ListItem
      itemLabel="Continuous Deployment: "
      itemDescription="Continuous Deployment involves the automatic deployment of code to production whenever changes are made to the code repository."
    />

    <SectionTitle>Continuous Deployment Workflow</SectionTitle>

    <Paragraph>The Continuous Deployment workflow consists of several stages, including:</Paragraph>

    <ListItem itemLabel="1. " itemDescription="Code changes are made to the code repository." />

    <ListItem
      itemLabel="2. "
      itemDescription="The code changes are automatically built and tested."
    />

    <ListItem
      itemLabel="3. "
      itemDescription="If the code changes pass the automated tests, they are automatically deployed to a staging environment."
    />

    <ListItem
      itemLabel="4. "
      itemDescription="The code changes are tested in the staging environment."
    />

    <ListItem
      itemLabel="5. "
      itemDescription="If the code changes pass the staging tests, they are automatically deployed to production."
    />

    <SectionTitle>Continuous Deployment Tools</SectionTitle>

    <Paragraph>There are several Continuous Deployment tools available, including:</Paragraph>

    <ListItem
      itemLabel="Jenkins: "
      itemDescription="
Jenkins is an open-source automation server that can be used for Continuous Integration, Continuous Delivery, and Continuous Deployment.
"
    />

    <ListItem
      itemLabel="GitLab: "
      itemDescription="
GitLab is a web-based Git repository manager that provides Continuous Integration, Continuous Delivery, and Continuous Deployment.
"
    />

    <ListItem
      itemLabel="Travis CI: "
      itemDescription="
Travis CI is a hosted Continuous Integration service that provides support for a variety of programming languages and frameworks.
"
    />

    <ListItem
      itemLabel="CircleCI: "
      itemDescription="
CircleCI is a Continuous Integration and Continuous Deployment platform that supports a variety of programming languages and frameworks.
"
    />
  </>
);
export default ContinuousDeployment;
