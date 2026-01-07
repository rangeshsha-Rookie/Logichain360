import React, { useState } from 'react';

export default function CreateShipment({ onSuccess }) {
  const [form, setForm] = useState({ pickup: '', drop: '', weight: '' });
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      alert(\✅ Shipment created: \ → \\);
      setLoading(false);
      if (onSuccess) onSuccess();
    }, 800);
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: '#111827', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600' }}>Create New Shipment</h2>
      
      <div>
        <label style={{ display: 'block', fontSize: '14px', color: '#9CA3AF', marginBottom: '8px' }}>
          Pickup Location
        </label>
        <input
          type="text"
          value={form.pickup}
          onChange={(e) => setForm({ ...form, pickup: e.target.value })}
          placeholder="e.g., Pune"
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            background: '#0F172A',
            border: '1px solid #1F2937',
            color: '#F9FAFB',
            fontSize: '14px'
          }}
          required
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '14px', color: '#9CA3AF', marginBottom: '8px' }}>
          Drop Location
        </label>
        <input
          type="text"
          value={form.drop}
          onChange={(e) => setForm({ ...form, drop: e.target.value })}
          placeholder="e.g., Nashik"
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            background: '#0F172A',
            border: '1px solid #1F2937',
            color: '#F9FAFB',
            fontSize: '14px'
          }}
          required
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '14px', color: '#9CA3AF', marginBottom: '8px' }}>
          Weight (kg)
        </label>
        <input
          type="number"
          value={form.weight}
          onChange={(e) => setForm({ ...form, weight: e.target.value })}
          placeholder="e.g., 1200"
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            background: '#0F172A',
            border: '1px solid #1F2937',
            color: '#F9FAFB',
            fontSize: '14px'
          }}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          height: '48px',
          padding: '0 24px',
          background: loading ? '#6B7280' : '#22C55E',
          color: '#000',
          borderRadius: '8px',
          border: 'none',
          fontSize: '14px',
          fontWeight: '600',
          cursor: loading ? 'not-allowed' : 'pointer',
          width: 'fit-content'
        }}
      >
        {loading ? 'Creating...' : 'Create Shipment'}
      </button>
    </form>
  );
}
