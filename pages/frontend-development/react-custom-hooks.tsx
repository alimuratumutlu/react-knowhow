import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactCustomHooks() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="React Custom Hooks"
      pageSummary="Custom React Hooks are a way of creating your own React Hooks. They are a way of creating your own reusable logic that can be used in multiple components."
    />
  );
}
