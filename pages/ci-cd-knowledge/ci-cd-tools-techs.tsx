import React from 'react';

import Paragraph from '../../components/atoms/Paragraph/Paragraph.component';
import SubTitle from '../../components/atoms/SubTitle/SubTitle.component';

import PostTemplate from '../../templates/Post.template';
import ListItem from '../../components/molecules/ListItem/ListItem.component';

export default function CICDToolsTechs() {
  return (
    <PostTemplate title="CI/CD Tools & Techs">
      <Paragraph>
        CI/CD stands for Continuous Integration/Continuous Delivery. CI/CD is a software development
        practice that emphasizes automation, collaboration, and rapid feedback. CI/CD is designed to
        ensure that code is delivered quickly and reliably, with high quality and without errors. In
        this article, we&apos;ll cover the most important aspects of CI/CD tools and technologies,
        including:
      </Paragraph>
      <ListItem itemDescription="💂🏼 CI/CD Basics" />
      <ListItem itemDescription="💂🏼 CI/CD Workflow" />
      <ListItem itemDescription="💂🏼 CI/CD Tools and Technologies" />
      <ListItem itemDescription="💂🏼 Best Practices for CI/CD" />
      <SubTitle>CI/CD Basics</SubTitle>
      <Paragraph>
        CI/CD is a software development practice that emphasizes automation, collaboration, and
        rapid feedback. CI/CD is designed to ensure that code is delivered quickly and reliably,
        with high quality and without errors.
      </Paragraph>
      <Paragraph>CI/CD involves several key practices, including:</Paragraph>
      <ListItem
        itemLabel="🧐 Continuous Integration: "
        itemDescription="Continuous Integration involves the automatic building and testing of code whenever changes are made to the code repository."
      />
      <ListItem
        itemLabel="🧐 Continuous Delivery: "
        itemDescription="Continuous Delivery involves the automatic deployment of code to production whenever changes are made to the code repository."
      />
      <ListItem
        itemLabel="🧐 Automated Testing: "
        itemDescription="Automated Testing involves the automatic testing of code using tools such as unit testing and integration testing."
      />
      <ListItem
        itemLabel="🧐 Continuous Monitoring: "
        itemDescription="Continuous Monitoring involves the automatic monitoring of code in production to detect errors and issues."
      />
      <SubTitle>CI/CD Workflow</SubTitle>
      <Paragraph>The CI/CD workflow consists of several stages, including:</Paragraph>
      <ListItem itemDescription="🚀 Code changes are made to the code repository." />
      <ListItem itemDescription="🚀 The code changes are automatically built and tested." />
      <ListItem itemDescription="🚀 If the code changes pass the automated tests, they are automatically deployed to a staging environment." />
      <ListItem itemDescription="🚀 The code changes are tested in the staging environment." />
      <ListItem itemDescription="🚀 If the code changes pass the staging tests, they are automatically deployed to production." />

      <SubTitle>CI/CD Tools and Technologies</SubTitle>
      <Paragraph>There are several CI/CD tools and technologies available, including:</Paragraph>
      <ListItem
        itemLabel="💼 Jenkins: "
        itemDescription="Open-source automation server that can be used for Continuous Integration,
          Continuous Delivery, and Continuous Deployment."
      />
      <ListItem
        itemLabel="💼 GitLab: "
        itemDescription="Web-based Git repository manager that provides Continuous Integration, Continuous Delivery, and Continuous Deployment."
      />
      <ListItem
        itemLabel="💼 Bamboo: "
        itemDescription="Atlassian product that provides Continuous Integration and Continuous Delivery."
      />
      <ListItem
        itemLabel="💼 TeamCity: "
        itemDescription="JetBrains product that provides Continuous Integration and Continuous Delivery."
      />
      <ListItem
        itemLabel="💼 Spinnaker: "
        itemDescription="Open-source Continuous Delivery platform."
      />
      <ListItem
        itemLabel="💼 Octopus Deploy: "
        itemDescription="Continuous Delivery and Release Management platform."
      />
      <ListItem
        itemLabel="💼 Travis CI: "
        itemDescription="Hosted Continuous Integration service."
      />
      <ListItem
        itemLabel="💼 CircleCI: "
        itemDescription="Continuous Integration and Continuous Deployment platform."
      />

      <SubTitle>Best Practices for CI/CD</SubTitle>
      <Paragraph>Here are some best practices for CI/CD:</Paragraph>
      <SubTitle>Automation</SubTitle>
      <Paragraph>
        Automation is a critical aspect of CI/CD. You should automate as much of the CI/CD process
        as possible to ensure that code is delivered quickly and reliably.
      </Paragraph>
      <SubTitle>Collaboration</SubTitle>
      <Paragraph>
        Collaboration is important for ensuring that code is developed and deployed smoothly. You
        should encourage collaboration between developers, operations, and other stakeholders.
      </Paragraph>
      <SubTitle>Testing</SubTitle>
      <Paragraph>
        Testing is essential for ensuring the quality and functionality of your code. You should
        test your code thoroughly using tools such as unit testing and integration testing.
      </Paragraph>
    </PostTemplate>
  );
}
