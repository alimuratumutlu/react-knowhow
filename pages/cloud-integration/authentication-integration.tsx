import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { AuthenticationIntegrationContent } from '@data/PageContent';

export default function DatabaseIntegration() {
  return (
    <TabTemplate
      tabList={AuthenticationIntegrationContent}
      pageTitle="Authentication Integration"
      pageSummary="Cloud authentication services provide a centralized and secure way to manage user authentication and authorization for cloud-based applications. They typically offer features such as user sign-up and sign-in, multi-factor authentication, social identity provider integration, user profile management, and access control. By integrating an application with a cloud authentication service, developers can offload the responsibility of managing user authentication and authorization to the service, and focus on developing the core features of their application. Cloud authentication services also provide additional security features, such as secure storage of user credentials and token-based authentication, which can help to prevent security breaches."
    />
  );
}
