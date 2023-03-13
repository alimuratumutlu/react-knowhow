import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { AlgorithmsContent } from '@data/PageContent';

export default function Algorithms() {
  return (
    <TabTemplate
      tabList={AlgorithmsContent}
      pageTitle="Algorithms"
      pageSummary="Algorithm is a set of instructions that a computer can follow to solve a particular problem or accomplish a specific task. These instructions are typically written in a programming language and can be thought of as a step-by-step procedure for performing a computation."
    />
  );
}
