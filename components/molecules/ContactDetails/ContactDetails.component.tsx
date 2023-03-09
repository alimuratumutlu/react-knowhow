import React from 'react';

import { createStyles, ThemeIcon, Text, Grid, Box, Card } from '@mantine/core';

import ContactData from '../../../data/ContactData';
import PersonalData from '../../../data/PersonalData';

type ContactIconVariant = 'white' | 'gradient';

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
    marginBottom: theme.spacing.lg,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  title: {
    color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[9],
  },
}));

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
    <Grid ml="sm" mr="sm" mb="xl">
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
            marginLeft: theme.spacing.sm,
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
