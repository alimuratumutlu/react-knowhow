import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function CICDTechs() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="CI/CD Techniques"
      pageSummary="Continuous integration (CI) and continuous delivery (CD) are software development practices that require developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early."
    />
  );
}
