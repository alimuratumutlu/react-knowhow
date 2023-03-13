import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { SoftwarePatternsContent } from '@data/PageContent';

export default function Algorithms() {
  return (
    <TabTemplate
      tabList={SoftwarePatternsContent}
      pageTitle="Software Patterns"
      pageSummary="Software development design patterns are proven solutions to common problems that arise during the development process. Design patterns provide developers with a set of best practices and guidelines for designing and implementing software systems that are modular, maintainable, and scalable. There are many different types of design patterns, each with its own strengths and weaknesses, and each designed to solve specific problems.  In general, a design pattern is a proven solution to a common problem that can be applied to a wide variety of situations. The choice of design pattern depends on the specific problem that needs to be solved, as well as the constraints and requirements of the system."
    />
  );
}
