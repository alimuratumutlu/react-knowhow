import React, { useState } from 'react';
import { Tabs, Title, createStyles, Stack, useMantineTheme } from '@mantine/core';
import { PageTitle, Paragraph } from '@components';
import { IconNotes } from '@tabler/icons-react';

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
    borderTop: '1px solid #fff',
  },
}));

interface tabTemplateProps {
  tabList: {
    value: string;
    label: string;
    content: JSX.Element;
  }[];
  pageTitle: string;
  pageSummary: string;
}

export default function TabTemplate({ tabList, pageTitle, pageSummary }: tabTemplateProps) {
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState<string | null>(tabList[0].value);
  const theme = useMantineTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      }}
    >
      <Stack ml="xl">
        <PageTitle>{pageTitle}</PageTitle>
        <Paragraph>{pageSummary}</Paragraph>
      </Stack>
      <Tabs value={activeTab} onTabChange={setActiveTab} style={{ width: '100%', paddingTop: 20 }}>
        <Tabs.List style={{ width: '100%', paddingLeft: 20, borderBottom: 0 }}>
          {tabList.map((tab: any) => (
            <Tabs.Tab
              key={tab.value}
              value={tab.value}
              icon={<IconNotes size="0.8rem" />}
              className={activeTab === tab.value ? classes.activeTab : classes.passiveTab}
            >
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {tabList.map((tab: any) => (
          <Tabs.Panel
            key={tab.value}
            value={tab.value}
            pt="xl"
            pl="xl"
            pr="xl"
            className={classes.tabPanel}
          >
            <Title size="h1" mb="lg">
              {tab.label}
            </Title>
            {tab.content}
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  );
}
