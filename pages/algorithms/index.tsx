import React, { useState } from 'react';
import { Tabs, Title, createStyles } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

import {
  DataStructures,
  DynamicProgramming,
  GraphAlgorithms,
  SortingAlgorithms,
  OptimizationAlgorithms,
  SearchingAlgorithms,
} from '@sections';

const useStyles = createStyles((theme) => ({
  activeTab: {
    marginBottom: 7,
    marginRight: 7,
    color: theme.colors.gray[1],
    backgroundColor: theme.colors.blue[1],
    border: '2px solid #dee2e6',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: theme.colors.blue[1],
    },
  },
  passiveTab: {
    marginBottom: 7,
    marginRight: 7,
    backgroundColor: '#fff',
    borderTop: '1px solid #dee2e6',
    borderLeft: '1px solid #dee2e6',
    borderRight: '1px solid #dee2e6',
    borderBottom: '1px solid #dee2e6',
    borderRadius: 4,

    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  tabPanel: {
    height: '100vh',
    borderTop: '1px solid #fff',
  },
}));

export default function Algorithms() {
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState<string | null>('first');

  const tabList = [
    {
      value: 'DataStructures',
      icon: <IconPhoto size="0.8rem" />,
      label: 'Data Structures',
      content: DataStructures,
    },
    {
      value: 'sorting',
      icon: <IconMessageCircle size="0.8rem" />,
      label: 'Sorting Algorithms',
      content: SortingAlgorithms,
    },
    {
      value: 'searching',
      icon: <IconSettings size="0.8rem" />,
      label: 'Searching Algorithms',
      content: SearchingAlgorithms,
    },
    {
      value: 'graph',
      icon: <IconSettings size="0.8rem" />,
      label: 'Graph Algorithms',
      content: GraphAlgorithms,
    },
    {
      value: 'dynamic',
      icon: <IconSettings size="0.8rem" />,
      label: 'Dynamic Programming',
      content: DynamicProgramming,
    },
    {
      value: 'optimization',
      icon: <IconSettings size="0.8rem" />,
      label: 'Optimization Algorithms',
      content: OptimizationAlgorithms,
    },
  ];

  return (
    <>
      <Tabs value={activeTab} onTabChange={setActiveTab} style={{ width: '100%', paddingTop: 20 }}>
        <Tabs.List style={{ width: '100%', paddingLeft: 20, borderBottom: 0 }}>
          {tabList.map((tab) => (
            <Tabs.Tab
              value={tab.value}
              icon={tab.icon}
              className={activeTab === tab.value ? classes.activeTab : classes.passiveTab}
            >
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {tabList.map((tab) => (
          <Tabs.Panel value={tab.value} pt="xl" pl="xl" pr="xl" className={classes.tabPanel}>
            <Title size="h1">{tab.label}</Title>
            {tab.content}
          </Tabs.Panel>
        ))}
      </Tabs>
    </>
  );
}
