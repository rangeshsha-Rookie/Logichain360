import React, { useState } from 'react';
import { mockOptimizeResult } from '../../services/mockManagerService';

export default function OptimizeRoute() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function runOptimization() {
    setLoading(true);
    setTimeout(() => {
      setResult(mockOptimizeResult);
      setLoading(false);
    }, 1500); // Simulate API call
  }

  return (
    <div style={{ background: '#111827', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>AI Route Optimization</h2>
        <p style={{ fontSize: '14px', color: '#9CA3AF' }}>
          Use Google OR-Tools to optimize delivery routes based on distance, time, and CO₂ impact
        </p>
      </div>

      <button
        onClick={runOptimization}
        disabled={loading}
        style={{
          height: '56px',
          padding: '0 32px',
          background: loading ? '#6B7280' : '#22C55E',
          color: '#000',
          borderRadius: '12px',
          border: 'none',
          fontSize: '16px',
          fontWeight: '600',
          cursor: loading ? 'not-allowed' : 'pointer',
          width: 'fit-content'
        }}
      >
        {loading ? '⏳ Optimizing...' : '🚀 OPTIMIZE ROUTE'}
      </button>

      {result && (
        <div style={{ background: '#0F172A', padding: '24px', borderRadius: '12px', display: 'flex', gap: '32px' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>Total Distance</div>
            <div style={{ fontSize: '24px', fontWeight: '600' }}>{result.distancekm} km</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>Estimated Time</div>
            <div style={{ fontSize: '24px', fontWeight: '600' }}>{result.etaminutes} mins</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>CO₂ Impact</div>
            <div style={{ fontSize: '24px', fontWeight: '600', color: '#22C55E' }}>{result.co2kg} kg</div>
            <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '4px' }}>{result.co2source}</div>
          </div>
        </div>
      )}
    </div>
  );
}
