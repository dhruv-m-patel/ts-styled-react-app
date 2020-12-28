import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { AcUnitRounded, BrightnessHigh, Brightness4 } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  appToolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h1': {
      fontSize: '2rem',
      fontWeight: '400',
    },
  },
}));

export default function Navbar({
  hasSwitchedToDarkMode,
  onDarkModeTriggerClick,
}) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.appToolBar}>
        <Typography variant="h1">
          <AcUnitRounded />
          &nbsp; Styled React App
        </Typography>
        <Button variant="text" onClick={onDarkModeTriggerClick}>
          {hasSwitchedToDarkMode ? <BrightnessHigh /> : <Brightness4 />}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  hasSwitchedToDarkMode: PropTypes.bool,
  onDarkModeTriggerClick: PropTypes.func,
};

Navbar.defaultProps = {
  hasSwitchedToDarkMode: false,
  onDarkModeTriggerClick: () => {},
};
