import React, { useState } from 'react';
import { Tabs, createStyles } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  activeTab: {
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

function TabPage() {
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState<string | null>('first');

  const tabList = [
    { value: 'first', icon: <IconPhoto size="0.8rem" />, label: 'Gallery' },
    { value: 'messages', icon: <IconMessageCircle size="0.8rem" />, label: 'Messages' },
    { value: 'settings', icon: <IconSettings size="0.8rem" />, label: 'Settings' },
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
        <Tabs.Panel value="first" pt="xl" pl="xl" pr="xl" className={classes.tabPanel}>
          Gallery tab content
        </Tabs.Panel>

        <Tabs.Panel value="messages" pt="xl" pl="xl" pr="xl" className={classes.tabPanel}>
          Messages tab content
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xl" pl="xl" pr="xl" className={classes.tabPanel}>
          Settings tab content
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
export default TabPage;
