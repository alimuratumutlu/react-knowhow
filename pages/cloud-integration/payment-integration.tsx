import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { PaymentIntegrationContent } from '@data/PageContent';

export default function DatabaseIntegration() {
  return (
    <TabTemplate
      tabList={PaymentIntegrationContent}
      pageTitle="Payment Integration"
      pageSummary="Cloud Database Integration is the process of connecting your application to a third-party database. This allows your application to access data from the third-party database and use it to enhance your application."
    />
  );
}
