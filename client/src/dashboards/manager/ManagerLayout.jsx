import React from 'react';
import Sidebar from '../../components/Sidebar';

export default function ManagerLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0F172A', color: '#F9FAFB' }}>
      <Sidebar role="manager" />
      <main style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
        <header style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #1F2937' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '600' }}>Manager Dashboard</h1>
          <p style={{ fontSize: '14px', color: '#9CA3AF', marginTop: '4px' }}>
            Operational Control — Make decisions, optimize routes, assign drivers
          </p>
        </header>
        {children}
      </main>
    </div>
  );
}
