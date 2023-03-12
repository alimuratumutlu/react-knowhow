import React from 'react';
import { Title } from '@mantine/core';
import useStyles from './SectionTitle.styles';

interface SectionTitleProps {
  children: React.ReactNode | React.ReactNode[] | string;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  const { classes } = useStyles();

  return (
    <Title
      order={2}
      size="h2"
      sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      align="left"
      mb="md"
      mt="xl"
      className={classes.title}
    >
      {children}
    </Title>
  );
}
