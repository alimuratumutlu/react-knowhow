import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function CloudDeployment() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="Cloud Deployment"
      pageSummary="Cloud Deployment is the process of deploying your application to a cloud platform. This allows your application to be hosted on a cloud platform and accessed by users from anywhere in the world."
    />
  );
}
