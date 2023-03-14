import { useState } from 'react';
import { Group, MediaQuery, Navbar, ScrollArea } from '@mantine/core';
import { LinksGroup, Logo } from '@components';

import Routes from '@data/Routes';
import useStyles from './Navbar.styles';

interface navbarNestedProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

export default function CustomNavbar({ opened, setOpened }: navbarNestedProps) {
  const [active, setActive] = useState<string | null>(null);
  const { classes } = useStyles();

  const handleItemClick = (link: string) => {
    setActive(link);
    setTimeout(() => {
      setOpened(!opened);
    }, 500);
  };

  const links = Routes.map((item) => (
    <LinksGroup
      initiallyOpened
      {...item}
      key={item.label}
      active={active}
      handleItemClick={handleItemClick}
    />
  ));

  return (
    <Navbar hidden={!opened} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Navbar.Section>
          <Group position="apart">
            <Logo brand="Murat Umutlu" />
          </Group>
        </Navbar.Section>
      </MediaQuery>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
