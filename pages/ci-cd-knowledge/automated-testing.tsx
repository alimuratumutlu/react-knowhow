import React from 'react';

import { ListItem, Paragraph, SectionTitle } from '@components';
import PostTemplate from '@templates/Post.template';

export default function AutomatedTesting() {
  return (
    <PostTemplate title="Automated Testing">
      <Paragraph>
        Automated testing is a software testing technique that involves the use of tools and scripts
        to automate the testing process. Automated testing is designed to reduce the time and effort
        required for software testing and to increase the accuracy and reliability of the testing
        process.
      </Paragraph>
      <Paragraph>
        In this article, we&apos;ll cover the most important aspects of automated testing,
        including:
      </Paragraph>
      <ListItem itemDescription="🥷🏼 Automated Testing Basics" />
      <ListItem itemDescription="🥷🏼 Automated Testing Types" />
      <ListItem itemDescription="🥷🏼 Automated Testing Tools" />

      <SectionTitle>Automated Testing Basics</SectionTitle>
      <Paragraph>
        Automated testing involves the use of tools and scripts to automate the testing process.
        Automated testing is designed to reduce the time and effort required for software testing
        and to increase the accuracy and reliability of the testing process.
      </Paragraph>
      <Paragraph>Automated testing involves several key practices, including:</Paragraph>
      <ListItem
        itemLabel="🥸 Test Automation: "
        itemDescription="Involves the use of tools and scripts to automate the testing process."
      />
      <ListItem
        itemLabel="🥸 Test Frameworks: "
        itemDescription="Provide a structure for organizing and running automated tests.."
      />
      <ListItem
        itemLabel="🥸 Test Suites: "
        itemDescription="Collections of automated tests that are designed to test specific aspects of the software."
      />
      <ListItem
        itemLabel="🥸 Test Cases: "
        itemDescription="Individual automated tests that are designed to test specific"
      />
      <ListItem
        itemLabel="🥸 Test Data: "
        itemDescription="Used by automated tests to test the software."
      />
      <ListItem
        itemLabel="🥸 Test Environments: "
        itemDescription="Used by automated tests to test the software."
      />

      <SectionTitle>Types of Automated Testing</SectionTitle>
      <ListItem
        itemLabel="🍓 Unit Testing: "
        itemDescription="Unit Testing involves the testing of individual software components or modules."
      />
      <ListItem
        itemLabel="🍓 Integration Testing: "
        itemDescription="Integration Testing involves the testing of the interactions between different software components or modules."
      />
      <ListItem
        itemLabel="🍓 Functional Testing: "
        itemDescription="Functional Testing involves the testing of the functionality of the software."
      />
      <ListItem
        itemLabel="🍓 Performance Testing: "
        itemDescription="Performance Testing involves the testing of the performance and scalability of the software."
      />
      <ListItem
        itemLabel="🍓 Security Testing: "
        itemDescription="Security Testing involves the testing of the security and vulnerabilities of the software."
      />

      <SectionTitle>Automated Testing Tools</SectionTitle>
      <ListItem
        itemLabel="📺 Selenium: "
        itemDescription="Selenium is a popular testing tool for web applications."
      />
      <ListItem
        itemLabel="📺 Appium: "
        itemDescription="Appium is a testing tool for mobile applications."
      />
      <ListItem
        itemLabel="📺 JUnit: "
        itemDescription="JUnit is a testing framework for Java applications."
      />
      <ListItem
        itemLabel="📺 Pytest: "
        itemDescription="Pytest is a testing framework for Python applications."
      />
      <ListItem
        itemLabel="📺 Mocha: "
        itemDescription="Mocha is a testing framework for JavaScript applications."
      />
    </PostTemplate>
  );
}
