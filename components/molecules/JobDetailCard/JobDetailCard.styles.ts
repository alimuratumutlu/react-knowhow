import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    height: 'auto',
    marginBottom: theme.spacing.xl,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.gray[9] : theme.colors.gray[1]
    }`,
  },

  title: {
    fontWeight: 600,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));
