import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactAuthentication() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="React Authentication"
      pageSummary="React Authentication is a way of authenticating users in your React application. It is a way of making sure that only authorized users can access your React application."
    />
  );
}
