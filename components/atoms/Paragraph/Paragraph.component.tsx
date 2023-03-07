import React from 'react';
import { Text } from '@mantine/core';

interface paragraphProps {
  children: React.ReactNode | React.ReactNode[] | string;
}

export default function Paragraph({ children }: paragraphProps) {
  return (
    <Text color="gray.7" align="justify" size="lg" mb="xl" pl="sm" pr="sm">
      {children}
    </Text>
  );
}
