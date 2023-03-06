import { Button } from '@mantine/core';
import { IconHash } from '@tabler/icons-react';

interface ButtonCopyProps {
  text: string;
  color?: string;
}

export default function TechStackButton({ text, color = 'indigo.5' }: ButtonCopyProps) {
  return (
    <Button
      color={color}
      variant="light"
      leftIcon={<IconHash size="0.8rem" stroke={1.5} />}
      radius="md"
      size="xs"
      mr="sm"
      mb="sm"
      styles={{
        root: { paddingLeft: 8, height: 32 },
        leftIcon: { marginRight: 2 },
      }}
    >
      {text}
    </Button>
  );
}
