import React from 'react';
import { Center, Header, Text, MediaQuery, Burger, useMantineTheme } from '@mantine/core';
import { Logo } from '@components';

import useStyles from './Header.styles';

interface headerDefaultProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

const pageList = [
  {
    name: 'CV RESUME',
    link: '/murat-umutlu',
  },
  {
    name: 'Algorithms',
    link: '/algorithms',
  },
  {
    name: 'Architecture',
    link: '/architecture',
  },
  {
    name: 'Authentication',
    link: '/authentication',
  },
  {
    name: 'Blockchain',
    link: '/blockchain',
  },
  {
    name: 'CI / CD',
    link: '/ci-cd',
  },
  {
    name: 'Cloud',
    link: '/cloud',
  },
  {
    name: 'Databases',
    link: '/databases',
  },
  {
    name: 'Front End',
    link: '/front-end',
  },
];

export function HeaderDefault({ opened, setOpened }: headerDefaultProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Header height={{ base: 50, md: 70 }} p="md" className={classes.HeaderContainer}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>{' '}
        <Logo brand="Muum Development" />
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Center>
            {pageList.map((page) => (
              <Text key={page.name} className={classes.link}>
                {page.name}
              </Text>
            ))}
          </Center>
        </MediaQuery>
      </div>
    </Header>
  );
}
