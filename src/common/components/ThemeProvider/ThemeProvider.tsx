import React from 'react';

interface ThemeProviderProps {
  theme: 'light' | 'dark';
  children: React.ReactNode;
}

export default function ThemeProvider({
  theme = 'dark',
  children,
}: ThemeProviderProps) {
  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        fontFamily: 'Roboto, Arial, sans-serif',
        fontSize: '16px',
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </div>
  );
}
