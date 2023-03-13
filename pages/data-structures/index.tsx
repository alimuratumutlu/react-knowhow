import React from 'react';

import TabTemplate from '@templates/Tab.template';
import { DataStructuresContent } from '@data/PageContent';

export default function Algorithms() {
  return (
    <TabTemplate
      tabList={DataStructuresContent}
      pageTitle="Data Structures"
      pageSummary="Data structures are a fundamental concept in computer science and programming. They provide a way to organize and store data in a way that makes it easier to access, manipulate, and process. There are many different types of data structures, each with its own strengths and weaknesses, and each designed to solve specific problems.  In general, a data structure is a way of organizing and storing data so that it can be accessed and used efficiently. The choice of data structure depends on the specific problem that needs to be solved, as well as the constraints and requirements of the system.
  "
    />
  );
}
