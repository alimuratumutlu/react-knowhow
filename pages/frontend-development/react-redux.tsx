import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactRedux() {
  return <TabTemplate tabList={GeneralContent} pageTitle="React & Redux" pageSummary="" />;
}
