import React from 'react';
import { Title } from '@mantine/core';
import useStyles from './SubTitle.styles';

interface subTitleProps {
  children: React.ReactNode | React.ReactNode[] | string;
}

export default function SubTitle({ children }: subTitleProps) {
  const { classes } = useStyles();

  return (
    <Title
      order={2}
      size="h2"
      sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      align="left"
      pl="sm"
      mb="md"
      mt="xl"
      className={classes.title}
    >
      {children}
    </Title>
  );
}
