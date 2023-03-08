import { Navbar, Group, Text, ScrollArea } from '@mantine/core';
import { UserButton } from '../../molecules/UserButton/UserButton.component';
import { LinksGroup } from '../../molecules/LinksGroup/LinksGroup.component';
import { ColorSchemeToggle } from '../../molecules/ColorSchemeToggle/ColorSchemeToggle';

import Routes from '../../../data/Routes';

import useStyles from './Navbar.styles';

export function NavbarNested() {
  const { classes } = useStyles();

  const links = Routes.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section>
        <Group className={classes.header} position="apart">
          <Text inherit variant="gradient" component="span" className={classes.logo}>
            Muum Dev.
          </Text>
          <ColorSchemeToggle />
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://pbs.twimg.com/profile_images/1615697459614781441/HdLAhn-1_400x400.jpg"
          name="Murat Umutlu"
          email="murat@muum.dev"
        />
      </Navbar.Section>
    </Navbar>
  );
}
