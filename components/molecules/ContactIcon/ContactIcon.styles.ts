import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
    marginBottom: theme.spacing.lg,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundColor: theme.colors.pink[6],
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[9],
  },

  description: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[9],
  },
}));
