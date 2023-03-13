import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  HeaderContainer: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  link: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[8],
    fontSize: 16,
    fontWeight: 500,
    marginLeft: 10,
    marginRight: 10,
    cursor: 'pointer',

    [theme.fn.smallerThan('md')]: {
      fontSize: 9,
    },
  },
}));
