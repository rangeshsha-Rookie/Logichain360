import React from 'react';

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0F172A', color: '#F9FAFB' }}>
      <aside style={{ width: '280px', background: '#0B1220', padding: '16px' }}>
        <h2>LogiChain360</h2>
        <ul>
          <li>Overview</li>
          <li>Blockchain</li>
          <li>Sustainability</li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '24px' }}>
        {children}
      </main>
    </div>
  );
}
