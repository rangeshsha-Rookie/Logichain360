import React from 'react';

export default function StatusBadge({ status }) {
  const statusMap = {
    'on-track': { bg: '#22C55E', text: 'On Track' },
    'in-transit': { bg: '#22C55E', text: 'In Transit' },
    'at-risk': { bg: '#FACC15', text: 'At Risk' },
    'delayed': { bg: '#EF4444', text: 'Delayed' },
    'pending': { bg: '#9CA3AF', text: 'Pending' },
    'delivered': { bg: '#10B981', text: 'Delivered' },
    'settled': { bg: '#22C55E', text: 'Settled' }
  };
  
  const statusInfo = statusMap[status?.toLowerCase().replace(' ', '-')] || { bg: '#9CA3AF', text: status };
  
  return (
    <span style={{
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '12px',
      background: statusInfo.bg,
      color: '#000',
      fontSize: '12px',
      fontWeight: '600'
    }}>
      {statusInfo.text}
    </span>
  );
}
