import React from 'react';
import { mockSummary } from '../../services/mockManagerService';

function KPICard({ label, value, unit = '' }) {
  return (
    <div style={{ background: '#111827', padding: '20px', borderRadius: '12px', minWidth: '240px' }}>
      <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '8px' }}>{label}</div>
      <div style={{ fontSize: '32px', fontWeight: '600', color: '#F9FAFB' }}>
        {value}{unit}
      </div>
    </div>
  );
}

export default function AdminHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* KPI Row */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <KPICard label="Active Shipments" value={mockSummary.pending} />
        <KPICard label="Revenue Today" value={\₹\\} />
        <KPICard label="Delays" value={mockSummary.delaysPct} unit="%" />
        <KPICard label="CO₂ Emissions" value={mockSummary.co2KgToday} unit=" kg" />
      </div>

      {/* Live Fleet Map */}
      <div style={{ 
        background: '#111827', 
        borderRadius: '16px', 
        padding: '24px', 
        height: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute',
          top: '16px',
          left: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            background: '#22C55E' 
          }}></span>
          <span style={{ fontSize: '12px', fontWeight: '600' }}>LIVE</span>
          <span style={{ fontSize: '12px', color: '#9CA3AF' }}>Fleet Tracking</span>
        </div>
        <span style={{ fontSize: '18px', color: '#6B7280' }}>
          🗺️ Live Fleet Map — GPS Real-time Tracking
        </span>
      </div>
    </div>
  );
}
