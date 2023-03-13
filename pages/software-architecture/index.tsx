import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { SoftwareArchitectureContent } from '@data/PageContent';

export default function Algorithms() {
  return (
    <TabTemplate
      tabList={SoftwareArchitectureContent}
      pageTitle="Software Architecture"
      pageSummary="Software architecture is the process of designing and developing the overall structure of a software system. It involves making critical decisions that affect the performance, scalability, and maintainability of the system. The success of software architecture depends on the quality of the architecture decisions made during the design and development process."
    />
  );
}
