import React from 'react';
import { Aside, MantineNumberSize } from '@mantine/core';
import { ContactDetails } from '@components';

import useStyles from './Aside.styles';

interface asideProps {
  hiddenBreakpoint: MantineNumberSize;
}

export default function CustomAside({ hiddenBreakpoint }: asideProps) {
  const { classes } = useStyles();

  return (
    <Aside
      p="md"
      hiddenBreakpoint={hiddenBreakpoint}
      width={{ sm: 200, lg: 300 }}
      className={classes.AsideContainer}
    >
      <ContactDetails />
    </Aside>
  );
}
