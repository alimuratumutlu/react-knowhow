import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  summary: {
    display: 'flex',
    fontSize: 16,
    textAlign: 'justify',
    marginTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    borderBottom: `1px solid ${theme.colors.gray[2]}`,

    '&:first-letter': {
      fontSize: '200%',
      float: 'left',
      paddingRight: 10,
    },
  },
}));
