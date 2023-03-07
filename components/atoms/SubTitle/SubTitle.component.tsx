import React from 'react';
import { Title } from '@mantine/core';

interface subTitleProps {
  children: React.ReactNode | React.ReactNode[] | string;
}

export default function SubTitle({ children }: subTitleProps) {
  return (
    <Title
      order={2}
      size="h2"
      sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      weight={900}
      align="left"
      pl="sm"
      mb="sm"
      mt="lg"
    >
      {children}
    </Title>
  );
}
