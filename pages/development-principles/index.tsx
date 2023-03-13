import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { DevelopmentPrinciplesContent } from '@data/PageContent';

export default function Algorithms() {
  return (
    <TabTemplate
      tabList={DevelopmentPrinciplesContent}
      pageTitle="Development Principles"
      pageSummary="Development principles refer to a set of guidelines, best practices, and values that software developers and development teams follow during the software development lifecycle. These principles help ensure that software development is organized, efficient, and effective, and that the resulting software is of high quality, maintainable, and extensible."
    />
  );
}
