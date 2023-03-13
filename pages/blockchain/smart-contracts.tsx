import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function SmartContracts() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="Smart Contracts"
      pageSummary="A smart contract is a computer protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract. Smart contracts allow the performance of credible transactions without third parties. These transactions are trackable and irreversible."
    />
  );
}
