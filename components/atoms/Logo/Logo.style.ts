import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 42,
    fontWeight: 800,
    letterSpacing: -2,
    paddingRight: 20,
    cursor: 'pointer',

    [theme.fn.smallerThan('md')]: {
      fontSize: 30,
    },
  },
}));
