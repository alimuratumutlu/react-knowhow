import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function BlockchainSecurity() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="Blockchain Security & Privacy"
      pageSummary="Blockchain is a distributed database that maintains a continuously growing list of ordered records called blocks. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. By design, a blockchain is resistant to modification of the data."
    />
  );
}
