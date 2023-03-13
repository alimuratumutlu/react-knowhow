import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { DevelopmentMethodologiesContent } from '@data/PageContent';

export default function Algorithms() {
  return (
    <TabTemplate
      tabList={DevelopmentMethodologiesContent}
      pageTitle="Development Methodologies"
      pageSummary="Development methodologies are structured approaches or frameworks that provide guidelines, principles, and best practices for software development teams to follow during the software development life cycle (SDLC). Development methodologies aim to ensure that software development is organized, efficient, and effective by providing a set of rules and practices to guide the development team through the process."
    />
  );
}
