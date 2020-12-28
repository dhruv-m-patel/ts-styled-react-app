import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  error: theme.palette.error.main,
}));

export default function Error({ message }) {
  const classes = useStyles();
  return <Typography className={classes.error}>{message}</Typography>;
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
