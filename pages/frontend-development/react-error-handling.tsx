import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactErrorHandling() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="React Error Handling"
      pageSummary="React Error Boundries are a way of handling errors in React. They are a way of catching errors in the React component tree and displaying a fallback UI instead of the component tree that crashed. "
    />
  );
}
