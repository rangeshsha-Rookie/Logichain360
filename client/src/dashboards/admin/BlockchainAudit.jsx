import React from 'react';
import { mockAudit } from '../../services/mockManagerService';
import StatusBadge from '../../components/StatusBadge';

export default function BlockchainAudit() {
  return (
    <div style={{ background: '#111827', borderRadius: '12px', padding: '24px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
          Blockchain Audit Trail
        </h2>
        <p style={{ fontSize: '14px', color: '#9CA3AF' }}>
          Zero-trust verification — All transactions are immutable and publicly verifiable
        </p>
      </div>

      <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #1F2937' }}>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Shipment ID</th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Transaction Hash</th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Time</th>
            <th style={{ textAlign: 'left', padding: '12px 8px', color: '#9CA3AF', fontWeight: '500' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {mockAudit.map((record, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #1F2937' }}>
              <td style={{ padding: '16px 8px', fontWeight: '500' }}>{record.shipmentId}</td>
              <td style={{ padding: '16px 8px', fontFamily: 'monospace', color: '#60A5FA', fontSize: '12px' }}>
                {record.txHash}
              </td>
              <td style={{ padding: '16px 8px' }}>
                <StatusBadge status={record.status} />
              </td>
              <td style={{ padding: '16px 8px', color: '#9CA3AF' }}>{record.timestamp}</td>
              <td style={{ padding: '16px 8px' }}>
                <a 
                  href={record.explorerUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#60A5FA', textDecoration: 'none', fontSize: '12px' }}
                >
                  View on Explorer →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
