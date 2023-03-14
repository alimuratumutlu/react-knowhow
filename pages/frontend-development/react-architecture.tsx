import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactArchitecture() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="React Architecture"
      pageSummary="React Component Architecture is a way of structuring your React components. It is a way of organizing your components in a way that makes them easy to maintain and reuse."
    />
  );
}
