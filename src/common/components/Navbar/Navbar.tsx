import React, { MouseEvent } from 'react';

export interface NavbarComponentProps {
  hasSwitchedToDarkMode: boolean;
  onDarkModeTriggerClick: (event: MouseEvent<HTMLElement>) => void;
}

export default function Navbar({
  hasSwitchedToDarkMode = false,
  onDarkModeTriggerClick,
}: NavbarComponentProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1rem',
        padding: '10px',
      }}
    >
      <div>
        <h1>Typescript Styled React App</h1>
      </div>
      <div>
        <button onClick={onDarkModeTriggerClick}>
          {hasSwitchedToDarkMode
            ? 'Switch to Light Theme'
            : 'Switch to Dark Theme'}
        </button>
      </div>
    </div>
  );
}
