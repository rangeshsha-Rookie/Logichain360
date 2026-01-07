import React from 'react';
import { mockNotifications } from '../../services/mockManagerService';

export default function Notifications() {
  return (
    <div style={{ background: '#111827', borderRadius: '12px', padding: '24px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Recent Notifications</h2>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {mockNotifications.map((note) => (
          <li key={note.id} style={{ 
            padding: '16px',
            marginBottom: '8px',
            background: '#0F172A',
            borderRadius: '8px',
            borderLeft: \4px solid \\
          }}>
            <div style={{ fontSize: '14px', marginBottom: '4px' }}>{note.message}</div>
            <div style={{ fontSize: '12px', color: '#9CA3AF' }}>{note.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
