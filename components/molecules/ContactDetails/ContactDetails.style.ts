import { createStyles } from '@mantine/core';

type ContactIconVariant = 'white' | 'gradient';

interface ContactIconStyles {
  variant: ContactIconVariant;
}

export default createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
    marginBottom: theme.spacing.lg,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[9],
  },

  description: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[9],
  },
}));
