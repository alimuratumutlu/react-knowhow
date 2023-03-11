import { Navbar, ScrollArea } from '@mantine/core';
import { LinksGroup } from '@components';

import Routes from '@data/Routes';
import useStyles from './Navbar.styles';

interface navbarNestedProps {
  opened: boolean;
}

export default function CustomNavbar({ opened }: navbarNestedProps) {
  const { classes } = useStyles();

  const links = Routes.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar hidden={!opened} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
