import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  link: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 14,
    fontWeight: 500,
    marginRight: 5,
    cursor: 'pointer',

    [theme.fn.smallerThan('md')]: {
      fontSize: 9,
    },
  },
}));
