import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactStateManagement() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="React State Management"
      pageSummary="React State Management is a way of managing the state of your React application. It is a way of managing the data that your React application uses."
    />
  );
}
