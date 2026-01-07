import React, { useState } from 'react';

export default function ProofOfDelivery() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      alert('✅ Delivery confirmed! Blockchain transaction initiated.');
    }, 500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px', minHeight: '100vh' }}>
      <div>
        <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Proof of Delivery</h1>
        <p style={{ fontSize: '14px', color: '#9CA3AF' }}>
          Capture proof and confirm delivery completion
        </p>
      </div>

      {/* Capture Photo */}
      <div style={{
        height: '88px',
        background: '#111827',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '0 20px',
        border: '2px dashed #374151',
        cursor: 'pointer'
      }}>
        <span style={{ fontSize: '32px' }}>📷</span>
        <div>
          <div style={{ fontSize: '16px', fontWeight: '600' }}>Capture Photo</div>
          <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Tap to take delivery photo</div>
        </div>
      </div>

      {/* Customer Signature */}
      <div style={{
        height: '88px',
        background: '#111827',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '0 20px',
        border: '2px dashed #374151',
        cursor: 'pointer'
      }}>
        <span style={{ fontSize: '32px' }}>✍️</span>
        <div>
          <div style={{ fontSize: '16px', fontWeight: '600' }}>Customer Signature</div>
          <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Digital signature capture</div>
        </div>
      </div>

      {/* Blockchain Info */}
      <div style={{ 
        background: '#0B1220', 
        padding: '16px', 
        borderRadius: '12px',
        border: '1px solid #1F2937'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <span style={{ fontSize: '20px' }}>🔐</span>
          <span style={{ fontSize: '14px', fontWeight: '600' }}>Blockchain Verification</span>
        </div>
        <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: '1.5' }}>
          A cryptographic hash will be generated from your proof and recorded on the Polygon blockchain for immutable verification.
        </p>
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleSubmit}
        disabled={submitted}
        style={{
          height: '64px',
          borderRadius: '16px',
          background: submitted ? '#6B7280' : '#22C55E',
          color: '#000',
          fontWeight: '700',
          fontSize: '18px',
          border: 'none',
          cursor: submitted ? 'not-allowed' : 'pointer',
          marginTop: 'auto',
          boxShadow: submitted ? 'none' : '0 4px 16px rgba(34, 197, 94, 0.3)'
        }}
      >
        {submitted ? '✓ DELIVERY CONFIRMED' : '✓ CONFIRM DELIVERY'}
      </button>
    </div>
  );
}
