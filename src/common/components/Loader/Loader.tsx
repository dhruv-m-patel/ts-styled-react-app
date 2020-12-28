import React from 'react';
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

interface LoaderComponentProps {
  message: string;
  children?: React.ReactNode;
  className: string;
}

export default function Loader({
  message,
  children,
  className,
  ...props
}: LoaderComponentProps) {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.centered, className)} {...props}>
      <CircularProgress />
      {!!message && <Typography variant="caption">{message}</Typography>}
      {children}
    </Box>
  );
}
