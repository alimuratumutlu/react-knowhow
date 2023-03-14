import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactPerformanceOptimization() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="React Performance Optimization"
      pageSummary="React Performance Optimization is a way of optimizing your React application. It is a way of making your React application faster and more responsive."
    />
  );
}
