import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  HeaderContainer: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  link: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 14,
    fontWeight: 500,
    marginLeft: 10,
    marginRight: 10,
    cursor: 'pointer',
    borderBottom: '2px solid ',
    paddingBottom: 5,

    [theme.fn.smallerThan('md')]: {
      fontSize: 9,
    },
  },
}));
