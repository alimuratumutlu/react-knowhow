import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function APIIntegration() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="API Integration"
      pageSummary="API integration is the process of connecting your application to a third-party API. This allows your application to access data from the third-party API and use it to enhance your application."
    />
  );
}
