import React from 'react';
import { Title } from '@mantine/core';

interface PageTitleProps {
  text: string;
}

export default function PageTitle({ text }: PageTitleProps) {
  return (
    <Title
      order={2}
      size="h1"
      sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      weight={900}
      align="left"
    >
      {text}
    </Title>
  );
}
