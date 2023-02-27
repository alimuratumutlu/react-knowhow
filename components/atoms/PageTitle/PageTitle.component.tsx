import React from 'react';
import { Title } from '@mantine/core';

import useStyles from './PageTitle.styles';

interface PageTitleProps {
  text: string;
}

export default function PageTitle({ text }: PageTitleProps) {
  const { classes } = useStyles();

  return (
    <Title
      order={2}
      size="h1"
      sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      weight={900}
      align="left"
      className={classes.title}
    >
      {text}
    </Title>
  );
}
