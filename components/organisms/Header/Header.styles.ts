import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  link: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 15,
    fontWeight: 400,
    marginRight: 10,

    [theme.fn.smallerThan('md')]: {
      fontSize: 9,
    },
  },
}));
