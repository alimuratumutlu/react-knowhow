import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function CSSTripsTricks() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="Responsive Design (CSS)"
      pageSummary="Responsive Design is a way of designing your website so that it looks good on all devices. It is a way of making sure that your website looks good on mobile, tablet, and desktop."
    />
  );
}
