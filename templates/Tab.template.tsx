import React, { useState } from 'react';
import { Tabs, Title, createStyles, Stack, useMantineTheme } from '@mantine/core';
import { PageTitle, Paragraph } from '@components';
import { IconNotes } from '@tabler/icons-react';

import useIsLandscape from '@hooks/useIsLandscape';

const useStyles = createStyles((theme) => ({
  tabsWrapper: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    '@media (orientation: portrait)': {
      flexDirection: 'column-reverse',
    },
  },
  activeTab: {
    marginBottom: 7,
    marginRight: 7,
    color: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[9],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[4],
    border: '2px solid #dee2e6',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[1],
    },
  },
  passiveTab: {
    marginBottom: 7,
    marginRight: 7,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[6],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[1],
    border: '2px solid #dee2e6',
    borderRadius: 4,

    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  tabPanel: {
    height: '100%',

    '@media (orientation: landscape)': {
      paddingRight: 0,
    },
  },
}));

interface tabTemplateProps {
  tabList: {
    value: string;
    label: string;
    content: JSX.Element;
  }[];
  pageTitle?: string;
  pageSummary: string;
  noTabTitle?: boolean;
}

export default function TabTemplate({
  tabList,
  pageTitle,
  pageSummary,
  noTabTitle,
}: tabTemplateProps) {
  const { classes } = useStyles();
  const [activeTab, setActiveTab] = useState<string | null>(tabList[0].value);
  const theme = useMantineTheme();
  const isLandscape: boolean = useIsLandscape();

  return (
    <div
      style={{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        height: '100%',
      }}
    >
      <Stack ml="xl">
        <PageTitle>{pageTitle}</PageTitle>
        <Paragraph>{pageSummary}</Paragraph>
      </Stack>
      <Tabs
        value={activeTab}
        onTabChange={setActiveTab}
        className={classes.tabsWrapper}
        orientation={isLandscape ? 'horizontal' : 'vertical'}
      >
        {tabList.map((tab: any) => (
          <Tabs.Panel
            key={tab.value}
            value={tab.value}
            pl="xl"
            pr="xl"
            className={classes.tabPanel}
          >
            {!noTabTitle && (
              <Title
                size="h1"
                mb="lg"
                color={theme.colors.gray[6]}
                style={{ borderTop: '2px solid #dcdcdc', paddingTop: 20 }}
              >
                {tab.label}
              </Title>
            )}

            {tab.content}
          </Tabs.Panel>
        ))}
        <Tabs.List style={{ paddingLeft: 20, borderBottom: 0 }}>
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
      </Tabs>
    </div>
  );
}
