import React, { useState } from 'react';
import { mockSummary, mockShipments } from '../../services/mockManagerService';
import StatusBadge from '../../components/StatusBadge';

function KpiCard({ label, value }) {
  return (
    <div style={{ background: '#111827', padding: '20px', borderRadius: '12px', minWidth: '220px' }}>
      <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '8px' }}>{label}</div>
      <div style={{ fontSize: '28px', fontWeight: '600' }}>{value}</div>
    </div>
  );
}

export default function ManagerHome() {
  const [shipments] = useState(mockShipments);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* KPI Row */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <KpiCard label="Pending Jobs" value={mockSummary.pending} />
        <KpiCard label="Active Vehicles" value={mockSummary.vehicles} />
        <KpiCard label="Delays %" value={mockSummary.delaysPct} />
      </div>

      {/* Shipments Table */}
      <div style={{ background: '#111827', borderRadius: '12px', padding: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Today's Shipments</h2>
        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1F2937' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>ID</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Route</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Status</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>ETA</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Driver</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((s) => (
              <tr key={s.id} style={{ borderBottom: '1px solid #1F2937' }}>
                <td style={{ padding: '16px 8px', fontWeight: '500' }}>{s.trackingId}</td>
                <td style={{ padding: '16px 8px' }}>{s.pickup.city} → {s.drop.city}</td>
                <td style={{ padding: '16px 8px' }}>
                  <StatusBadge status={s.status} />
                </td>
                <td style={{ padding: '16px 8px', color: '#9CA3AF' }}>{s.eta}</td>
                <td style={{ padding: '16px 8px' }}>{s.driver?.name || 'Unassigned'}</td>
                <td style={{ padding: '16px 8px' }}>
                  <button style={{ 
                    marginRight: '8px', 
                    color: '#22C55E', 
                    background: 'transparent', 
                    border: 'none', 
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}>
                    Optimize
                  </button>
                  <button style={{ 
                    color: '#60A5FA', 
                    background: 'transparent', 
                    border: 'none', 
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}>
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
