import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  CircularProgress,
  Typography,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  centered: {
    textAlign: 'center',
  },
}));

export default function Loader({ message, children, className, ...props }) {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.centered, className)} {...props}>
      <CircularProgress />
      {!!message && <Typography variant="caption">{message}</Typography>}
      {children}
    </Box>
  );
}

Loader.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Loader.defaultProps = {
  message: undefined,
  className: undefined,
  children: undefined,
};
