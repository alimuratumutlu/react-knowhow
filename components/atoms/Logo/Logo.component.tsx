import React from 'react';
import { Stack, Text } from '@mantine/core';

import useStyles from './Logo.style';

interface logoProps {
  brand: string;
}

export default function Logo({ brand }: logoProps) {
  const { classes } = useStyles();

  return (
    <Stack style={{ width: 300 }}>
      <Text inherit variant="gradient" component="span" className={classes.logo}>
        {brand}
      </Text>
    </Stack>
  );
}
