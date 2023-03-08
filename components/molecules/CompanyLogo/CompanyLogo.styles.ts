import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  image: {
    transition: 'transform 500ms ease',
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.1)',
  },

  overlay: {
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .05) 30%)',
  },
}));
