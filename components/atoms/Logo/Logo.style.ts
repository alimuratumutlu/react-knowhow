import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 30,
    fontWeight: 800,
    letterSpacing: -2,
    paddingRight: 20,
    cursor: 'pointer',

    [theme.fn.smallerThan('md')]: {
      fontSize: 15,
    },
  },
}));
