import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function WebAccessibility() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="Web Accessibility"
      pageSummary="Web Accessibility is a way of making your web application accessible to all users. It is a way of making sure that your web application is accessible to all users regardless of their ability."
    />
  );
}
