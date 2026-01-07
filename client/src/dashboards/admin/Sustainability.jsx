import React from 'react';

export default function Sustainability() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
          Sustainability Dashboard
        </h2>
        <p style={{ fontSize: '14px', color: '#9CA3AF' }}>
          Environmental impact measurement and optimization suggestions
        </p>
      </div>

      {/* Charts Row */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ 
          background: '#111827', 
          height: '260px', 
          flex: 1,
          minWidth: '300px',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '16px', color: '#9CA3AF', marginBottom: '12px' }}>
            📉 CO₂ Emissions Over Time
          </span>
          <span style={{ fontSize: '48px', fontWeight: '600', color: '#22C55E' }}>↓ 18%</span>
          <span style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '8px' }}>vs last month</span>
        </div>

        <div style={{ 
          background: '#111827', 
          height: '260px', 
          flex: 1,
          minWidth: '300px',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '16px', color: '#9CA3AF', marginBottom: '12px' }}>
            📊 Avg CO₂ per Delivery
          </span>
          <span style={{ fontSize: '48px', fontWeight: '600' }}>4.2 kg</span>
          <span style={{ fontSize: '12px', color: '#22C55E', marginTop: '8px' }}>15% below target</span>
        </div>
      </div>

      {/* AI Suggestions */}
      <div style={{ background: '#0B1220', padding: '20px', borderRadius: '12px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>
          🌱 AI-Generated Suggestions
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ 
            padding: '12px 0', 
            borderBottom: '1px solid #1F2937',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ color: '#22C55E', fontSize: '18px' }}>✓</span>
            <span style={{ fontSize: '14px', color: '#E5E7EB' }}>
              Shift 3 deliveries to micro-warehouse MH-Pune to reduce distance by 45 km
            </span>
          </li>
          <li style={{ 
            padding: '12px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ color: '#22C55E', fontSize: '18px' }}>✓</span>
            <span style={{ fontSize: '14px', color: '#E5E7EB' }}>
              Route B optimization can save 12% fuel — apply to 5 pending shipments
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
