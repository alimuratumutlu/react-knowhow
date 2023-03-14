import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactStorybook() {
  return <TabTemplate tabList={GeneralContent} pageTitle="React & Storybook" pageSummary="" />;
}
