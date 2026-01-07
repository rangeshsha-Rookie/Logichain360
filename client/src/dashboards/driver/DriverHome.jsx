import React from 'react';

export default function DriverHome() {
  const shipment = {
    id: 'LC-2040',
    from: 'Pune',
    to: 'Nashik',
    status: 'In Transit',
    eta: '2h 15m'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}>
      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div>
          <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Driver Dashboard</div>
          <div style={{ fontSize: '18px', fontWeight: '600' }}>Today's Delivery</div>
        </div>
        <span style={{ 
          width: '12px', 
          height: '12px', 
          borderRadius: '50%', 
          background: '#22C55E',
          boxShadow: '0 0 8px #22C55E'
        }}></span>
      </div>

      {/* Active Delivery Card */}
      <div style={{ 
        background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)', 
        borderRadius: '20px', 
        padding: '24px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}>
        <div style={{ fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.5px' }}>
          SHIPMENT ID
        </div>
        <div style={{ fontSize: '16px', fontWeight: '600', color: '#60A5FA' }}>
          {shipment.id}
        </div>
        
        <div style={{ height: '1px', background: '#374151', margin: '8px 0' }}></div>
        
        <div style={{ fontSize: '24px', fontWeight: '700', lineHeight: '1.2' }}>
          {shipment.from}
          <span style={{ margin: '0 12px', color: '#22C55E' }}>→</span>
          {shipment.to}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#9CA3AF' }}>ETA</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#FACC15' }}>{shipment.eta}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '11px', color: '#9CA3AF' }}>STATUS</div>
            <div style={{ 
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '12px',
              background: '#22C55E',
              color: '#000',
              fontSize: '13px',
              fontWeight: '700',
              marginTop: '4px'
            }}>
              {shipment.status}
            </div>
          </div>
        </div>
      </div>

      {/* Primary CTA */}
      <button style={{
        height: '64px',
        borderRadius: '16px',
        background: '#22C55E',
        color: '#000',
        fontWeight: '700',
        fontSize: '18px',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(34, 197, 94, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px'
      }}>
        <span style={{ fontSize: '24px' }}>🚀</span>
        START NAVIGATION
      </button>

      {/* Secondary CTA */}
      <button style={{
        height: '56px',
        borderRadius: '14px',
        background: '#1F2937',
        color: '#F9FAFB',
        fontSize: '16px',
        fontWeight: '600',
        border: '1px solid #374151',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px'
      }}>
        <span style={{ fontSize: '20px' }}>🎤</span>
        VOICE COMMAND (हिंदी/मराठी)
      </button>
    </div>
  );
}
