import React from 'react';

import { ThemeIcon, Text, Grid, Box, Card } from '@mantine/core';

import ContactData from '../../../data/ContactData';
import PersonalData from '../../../data/PersonalData';

import useStyles from './ContactDetails.style';

type ContactIconVariant = 'white' | 'gradient';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = 'gradient',
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === 'gradient' ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size="1.5rem" />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size="1.5rem" />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

export default function ContactDetails() {
  const { text } = PersonalData;

  return (
    <Grid ml="xs" mr="xs" mb="xl">
      <Grid.Col xs={12} sm={8}>
        <Text align="justify" size={20} mr="md">
          {text}
        </Text>
      </Grid.Col>
      <Grid.Col xs={12} sm={4}>
        <Card
          shadow="sm"
          sx={(theme) => ({
            padding: theme.spacing.sm,
            borderRadius: theme.radius.md,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            marginBottom: theme.spacing.sm,
            border: `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.gray[9] : theme.colors.gray[1]
            }`,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          })}
        >
          {ContactData.map((contact, index) => (
            <ContactIcon
              key={index}
              title={contact.title}
              description={contact.description}
              icon={contact.icon}
            />
          ))}
        </Card>
      </Grid.Col>
    </Grid>
  );
}
