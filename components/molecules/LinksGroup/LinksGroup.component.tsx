/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton } from '@mantine/core';
import { TablerIcon, IconChevronLeft, IconChevronRight } from '@tabler/icons';
import Link from 'next/link';

import useStyles from './LinksGroup.styles';

interface linksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: { label: string; link: string }[];
  active: string | null;
  setActive: (link: string) => void;
}

export default function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  link,
  links,
  active,
  setActive,
}: linksGroupProps) {
  const { classes, theme, cx } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;

  const items = (hasLinks ? links : []).map((item) => (
    <Link
      key={item.link}
      href={item.link}
      className={cx(classes.link, { [classes.linkActive]: item.link === active })}
      passHref
      onClick={() => setActive(item.link)}
    >
      <Text>{item.label}</Text>
    </Link>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">
              {link ? (
                <Link href={link} className={classes.singleLink} passHref>
                  <Text>{label}</Text>
                </Link>
              ) : (
                label
              )}
            </Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
