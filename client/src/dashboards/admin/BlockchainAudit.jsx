import React from 'react';

export default function BlockchainAudit() {
  const records = [
    { shipmentId: 'LC-2040', txHash: '0xabc123...', status: 'Settled', timestamp: '12:42 PM' }
  ];

  return (
    <div style={{ background: '#111827', borderRadius: '12px', padding: '16px' }}>
      <h2>Blockchain Audit</h2>
      <table style={{ width: '100%', fontSize: '14px' }}>
        <thead>
          <tr>
            <th>Shipment</th>
            <th>Tx Hash</th>
            <th>Status</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td>{r.shipmentId}</td>
              <td style={{ color: '#60A5FA' }}>{r.txHash}</td>
              <td>{r.status}</td>
              <td>{r.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
