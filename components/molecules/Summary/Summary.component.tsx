import React from 'react';
import PersonalData from '@data/PersonalData';

import useStyles from './Summary.styles';

export default function Summary() {
  const { classes } = useStyles();
  const { summary } = PersonalData;

  return <p className={classes.summary}>{summary}</p>;
}
