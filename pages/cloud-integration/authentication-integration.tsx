import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { AuthenticationIntegrationContent } from '@data/PageContent';

export default function DatabaseIntegration() {
  return (
    <TabTemplate
      tabList={AuthenticationIntegrationContent}
      pageTitle="Authentication Integration"
      pageSummary="Cloud Database Integration is the process of connecting your application to a third-party database. This allows your application to access data from the third-party database and use it to enhance your application."
    />
  );
}
