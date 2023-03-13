import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { CVResumeContent } from '@data/PageContent';

export default function Algorithms() {
  return (
    <TabTemplate
      tabList={CVResumeContent}
      pageTitle="Murat Umutlu"
      pageSummary="Software developer with +10 years of experience, including 5 years of specialized experience in Front-end Development utilizing technologies such as Micro Frontend, TypeScript, React, Nextjs and Redux"
    />
  );
}
