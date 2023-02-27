import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  description: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.5,
    fontStyle: 'italic',
  },
}));
