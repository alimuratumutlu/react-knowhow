import React from 'react';
import { Text, useMantineTheme } from '@mantine/core';

interface paragraphProps {
  children?: React.ReactNode | React.ReactNode[] | string;
}

export default function Paragraph({ children }: paragraphProps) {
  const theme = useMantineTheme();

  return (
    <Text
      color={theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[7]}
      align="justify"
      size="lg"
      mb="md"
      pr="sm"
    >
      {children}
    </Text>
  );
}
