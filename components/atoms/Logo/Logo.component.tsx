import React from 'react';
import { Stack, Text } from '@mantine/core';
import Link from 'next/link';

import useStyles from './Logo.style';

interface logoProps {
  brand: string;
}

export default function Logo({ brand }: logoProps) {
  const { classes } = useStyles();

  return (
    <Link href="/" passHref className={classes.link}>
      <Stack style={{ width: 300 }}>
        <Text inherit variant="gradient" component="span" className={classes.logo}>
          {brand}
        </Text>
      </Stack>
    </Link>
  );
}
