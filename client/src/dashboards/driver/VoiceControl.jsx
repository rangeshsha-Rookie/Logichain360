import React, { useState } from 'react';

export default function VoiceControl() {
  const [listening, setListening] = useState(false);
  const [lastCommand, setLastCommand] = useState(null);

  const handleVoiceCommand = () => {
    setListening(true);
    setTimeout(() => {
      setListening(false);
      setLastCommand('डिलिव्हरी पूर्ण (Delivery Complete)');
    }, 2000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
        Voice Commands
      </h2>

      <button
        onClick={handleVoiceCommand}
        style={{
          width: '100%',
          height: '120px',
          borderRadius: '20px',
          background: listening ? '#FACC15' : '#1F2937',
          border: listening ? '3px solid #FACC15' : '2px solid #374151',
          color: listening ? '#000' : '#F9FAFB',
          fontSize: '48px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {listening ? '🎙️' : '🎤'}
      </button>

      {lastCommand && (
        <div style={{ 
          marginTop: '20px', 
          padding: '16px', 
          background: '#111827', 
          borderRadius: '12px' 
        }}>
          <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
            LAST COMMAND
          </div>
          <div style={{ fontSize: '16px', fontWeight: '600' }}>
            {lastCommand}
          </div>
        </div>
      )}

      <div style={{ marginTop: '24px', fontSize: '14px', color: '#9CA3AF' }}>
        <p style={{ marginBottom: '12px' }}>Supported commands:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>"डिलिव्हरी पूर्ण" → Confirm delivery</li>
          <li>"मार्ग बदला" → Re-optimize route</li>
          <li>"स्थिती दाखवा" → Show status</li>
        </ul>
      </div>
    </div>
  );
}
