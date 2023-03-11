import React from 'react';
import { Box } from '@mantine/core';
import ContactData from '@data/ContactData';
import ContactIcon from '@components/molecules/ContactIcon/ContactIcon.component';

import useStyles from './ContactDetails.style';

export default function ContactDetails() {
  const { classes } = useStyles();

  return (
    <Box
      className={classes.ContactDetailsContainer}
      sx={(theme) => ({
        marginTop: theme.spacing.sm,
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
    </Box>
  );
}
