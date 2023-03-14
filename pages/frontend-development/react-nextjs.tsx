import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function ReactErrorHandling() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="Nextjs Tips & Tricks"
      pageSummary="Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
    />
  );
}
