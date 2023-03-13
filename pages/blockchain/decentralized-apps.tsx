import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function DecentralizedApps() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="Decentralized Apps"
      pageSummary="A decentralized application (dApp) is an application that runs on a decentralized network of computers. A dApp is a type of peer-to-peer (P2P) network, where users can interact with the application without the need for a central server."
    />
  );
}
