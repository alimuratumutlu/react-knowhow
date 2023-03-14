import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactCookiesTokens() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="Cookie & Token Handling with React"
      pageSummary="React Cookie & Token Handling is a way of handling cookies and tokens in your React application. It is a way of making sure that your React application can handle cookies and tokens."
    />
  );
}
