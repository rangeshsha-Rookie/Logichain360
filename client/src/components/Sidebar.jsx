import React from 'react';

export default function Sidebar({ role = 'admin' }) {
  const menus = {
    admin: ['Overview', 'Live Fleet', 'Blockchain', 'Sustainability', 'Users'],
    manager: ['Overview', 'Shipments', 'Optimize Routes', 'Warehouses', 'Notifications'],
    driver: ['Today', 'Navigation', 'Deliveries', 'Earnings']
  };

  return (
    <aside style={{ width: '280px', background: '#0B1220', padding: '24px', height: '100vh' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px', color: '#F9FAFB' }}>
        LogiChain360
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {menus[role]?.map((item, i) => (
          <li key={i} style={{ 
            padding: '12px 16px', 
            marginBottom: '8px',
            borderRadius: '8px',
            color: '#9CA3AF',
            cursor: 'pointer',
            fontSize: '14px'
          }}>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
