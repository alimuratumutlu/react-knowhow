import React from 'react';
import { Title } from '@mantine/core';

import useStyles from './PageTitle.styles';

interface pageTitleProps {
  children: React.ReactNode;
}

export default function PageTitle({ children }: pageTitleProps) {
  const { classes } = useStyles();

  return (
    <Title
      order={2}
      size="h1"
      sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      weight={900}
      align="left"
      className={classes.title}
      pr="sm"
    >
      {children}
    </Title>
  );
}
