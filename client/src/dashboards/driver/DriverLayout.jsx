import React from 'react';

export default function DriverLayout({ children }) {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0F172A', 
      color: '#F9FAFB', 
      maxWidth: '428px', 
      margin: '0 auto',
      boxShadow: '0 0 40px rgba(0,0,0,0.5)'
    }}>
      {children}
    </div>
  );
}
