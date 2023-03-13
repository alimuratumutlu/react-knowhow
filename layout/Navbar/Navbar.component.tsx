import { useState } from 'react';
import { MediaQuery, Navbar, ScrollArea } from '@mantine/core';
import { LinksGroup, Logo } from '@components';

import Routes from '@data/Routes';
import useStyles from './Navbar.styles';

interface navbarNestedProps {
  opened: boolean;
}

export default function CustomNavbar({ opened }: navbarNestedProps) {
  const [active, setActive] = useState<string | null>(null);

  const { classes } = useStyles();

  const links = Routes.map((item) => (
    <LinksGroup {...item} key={item.label} active={active} setActive={setActive} />
  ));

  return (
    <Navbar hidden={!opened} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Logo brand="Murat Umutlu" />
      </MediaQuery>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
