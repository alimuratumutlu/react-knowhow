import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactZustand() {
  return <TabTemplate tabList={GeneralContent} pageTitle="React & Zustand" pageSummary="" />;
}
