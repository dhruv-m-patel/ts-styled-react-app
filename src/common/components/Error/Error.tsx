import React from 'react';

interface ErrorComponentProps {
  message: string;
}

export default function Error({ message }: ErrorComponentProps) {
  return (
    <div
      style={{
        color: 'red',
        backgroundColor: '#ddd',
        padding: '5px',
        margin: '1rem',
      }}
    >
      {message}
    </div>
  );
}
