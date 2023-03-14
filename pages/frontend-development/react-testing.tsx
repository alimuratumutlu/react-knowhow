import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactTesting() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="React Testing"
      pageSummary="React Testing is a way of testing your React application. It is a way of making sure that your React application works as expected."
    />
  );
}
