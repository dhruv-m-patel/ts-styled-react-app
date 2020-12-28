import React, { useState, useCallback, useEffect } from 'react';
import store from 'store';
import { CssBaseline, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '../Navbar';
import PageContext from '../../context/PageContext';

const DEFAULT_HELMET_TITLE = 'styled-react-app';
const DEFAULT_HELMET_DESCRIPTION =
  'A universal react app with styled-components and redux support';

interface PageComponentProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function Page({
  title,
  description,
  children,
}: PageComponentProps) {
  const [hasSwitchedToDarkMode, setHasSwitchedToDarkMode] = useState<boolean>(
    false
  );

  const switchToDarkMode = useCallback(() => {
    setHasSwitchedToDarkMode(!hasSwitchedToDarkMode);
    store.set('enableDarkMode', !hasSwitchedToDarkMode);
  }, [hasSwitchedToDarkMode]);

  // Set dark mode initially based on whether user prefers it using os preferences or previously turned it on
  useEffect(() => {
    if (hasSwitchedToDarkMode === undefined) {
      let shouldSetDarkModeInitially = false;
      const darkModeSetting = store.get('enableDarkMode');
      if (darkModeSetting === undefined && typeof window !== 'undefined') {
        shouldSetDarkModeInitially =
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches;
      } else {
        shouldSetDarkModeInitially = darkModeSetting;
      }

      setHasSwitchedToDarkMode(shouldSetDarkModeInitially);
      store.set('enableDarkMode', shouldSetDarkModeInitially);
    }
  }, [hasSwitchedToDarkMode]);

  const currentThemeType = hasSwitchedToDarkMode ? 'dark' : 'light';
  const theme = createMuiTheme({
    palette: {
      type: currentThemeType,
    },
  });

  return (
    <PageContext.Provider value={{ theme: currentThemeType }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HelmetProvider>
          <Helmet>
            <title>{title || DEFAULT_HELMET_TITLE}</title>
            <meta
              name="description"
              content={description || DEFAULT_HELMET_DESCRIPTION}
            />
          </Helmet>
          <Navbar
            onDarkModeTriggerClick={switchToDarkMode}
            hasSwitchedToDarkMode={hasSwitchedToDarkMode}
          />
          <br />
          <Container maxWidth="lg">{children}</Container>
        </HelmetProvider>
      </ThemeProvider>
    </PageContext.Provider>
  );
}
