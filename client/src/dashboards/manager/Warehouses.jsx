import React from 'react';
import { mockWarehouses } from '../../services/mockManagerService';

export default function Warehouses() {
  return (
    <div style={{ background: '#111827', borderRadius: '12px', padding: '24px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Micro-Warehousing Network</h2>
      
      <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #1F2937' }}>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Warehouse ID</th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Location</th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Capacity</th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Availability</th>
          </tr>
        </thead>
        <tbody>
          {mockWarehouses.map((wh, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #1F2937' }}>
              <td style={{ padding: '16px 8px', fontWeight: '500' }}>{wh.id}</td>
              <td style={{ padding: '16px 8px' }}>{wh.location}</td>
              <td style={{ padding: '16px 8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    flex: 1, 
                    height: '8px', 
                    background: '#1F2937', 
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ 
                      width: \\%\, 
                      height: '100%', 
                      background: wh.capacityPct > 90 ? '#EF4444' : wh.capacityPct > 70 ? '#FACC15' : '#22C55E'
                    }}></div>
                  </div>
                  <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{wh.capacityPct}%</span>
                </div>
              </td>
              <td style={{ padding: '16px 8px' }}>
                <span style={{ 
                  padding: '4px 12px', 
                  borderRadius: '12px', 
                  background: wh.available ? '#22C55E' : '#EF4444', 
                  color: '#000', 
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {wh.available ? 'Available' : 'Full'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
