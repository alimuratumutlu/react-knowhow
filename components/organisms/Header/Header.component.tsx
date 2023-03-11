import React from 'react';
import { Group, Header, Text, MediaQuery, Burger, useMantineTheme } from '@mantine/core';

import Logo from '../../atoms/Logo/Logo.component';

import useStyles from './Header.styles';

interface headerDefaultProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

const pageList = [
  {
    name: 'Murat Umutlu',
    link: '/murat-umutlu',
  },
  {
    name: 'Algorithms',
    link: '/algorithms',
  },
  {
    name: 'Data Structures',
    link: '/data-structures',
  },
  {
    name: 'Architecture',
    link: '/architecture',
  },
  {
    name: 'CI / CD Knowledge',
    link: '/ci-cd-knowledge',
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
  {
    name: 'Blockchain',
    link: '/blockchain',
  },
  {
    name: 'Security',
    link: '/security',
  },
];

export function HeaderDefault({ opened, setOpened }: headerDefaultProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Logo brand="Muum Dev." />
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Group>
            {!opened &&
              pageList.map((page) => (
                <Text key={page.name} className={classes.link}>
                  {page.name}
                </Text>
              ))}
          </Group>
        </MediaQuery>
      </div>
    </Header>
  );
}
