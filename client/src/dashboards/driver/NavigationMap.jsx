import React from 'react';

export default function NavigationMap() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', background: '#374151' }}>
      {/* Map Placeholder */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#9CA3AF',
        fontSize: '16px',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <span style={{ fontSize: '48px' }}>🗺️</span>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: '600' }}>MAP VIEW</div>
          <div style={{ fontSize: '14px' }}>Live GPS Route Tracking</div>
        </div>
      </div>

      {/* Live Indicator */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'rgba(17, 24, 39, 0.9)',
        padding: '8px 16px',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backdropFilter: 'blur(10px)'
      }}>
        <span style={{ 
          width: '8px', 
          height: '8px', 
          borderRadius: '50%', 
          background: '#22C55E',
          animation: 'pulse 2s infinite'
        }}></span>
        <span style={{ fontSize: '12px', fontWeight: '600' }}>LIVE GPS</span>
      </div>

      {/* Floating Bottom Card */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: '380px',
        background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
      }}>
        <div style={{ fontSize: '12px', color: '#9CA3AF' }}>NEXT STOP</div>
        <div style={{ fontSize: '20px', fontWeight: '700' }}>MH-Nashik Warehouse</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#9CA3AF' }}>ETA</div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#FACC15' }}>18 mins</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '11px', color: '#9CA3AF' }}>DISTANCE</div>
            <div style={{ fontSize: '16px', fontWeight: '600' }}>12.4 km</div>
          </div>
        </div>
      </div>
    </div>
  );
}
