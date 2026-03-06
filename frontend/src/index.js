import React from 'react';
import ReactDOM from 'react-dom/client';

const ComplianceSentinel = ({ audit }) => (
  <div style={{ background: audit.compliance_status === 'CRITICAL_NON_COMPLIANCE' ? '#ffdada' : '#d4edda', padding: '20px', borderRadius: '12px', border: '2px solid', borderColor: audit.compliance_status === 'CRITICAL_NON_COMPLIANCE' ? '#e74c3c' : '#27ae60', marginTop: '20px' }}>
    <h2 style={{ color: '#2c3e50', margin: '0 0 10px 0' }}>🛑 {audit.compliance_status.replace('_', ' ')}</h2>
    <div style={{ textAlign: 'left' }}>
      <p><strong>Region:</strong> {audit.region}</p>
      <p><strong>Growth Delta (7-Day):</strong> +{(audit.temporal_delta * 100).toFixed(1)}%</p>
      <p><strong>Verification:</strong> {audit.recommendation}</p>
      <p style={{ fontSize: '0.8em', marginTop: '10px' }}><em>Revenue Class: {audit.revenue_tier}</em></p>
    </div>
  </div>
);

const App = () => {
  const auditData = {
    region: "Nairobi North Sector",
    temporal_delta: 0.06,
    compliance_status: "CRITICAL_NON_COMPLIANCE",
    recommendation: "Immediate Inspection Required - Unsanctioned Foundation Detected",
    revenue_tier: "B2G_GOVERNANCE_SIGNAL"
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '5px' }}>🇰🇪 Kukagua AI: Sovereign Compliance</h1>
        <p style={{ color: '#7f8c8d' }}>Venture Lead: Dan Alwende | Built for Nairobi Urban Resilience</p>
      </header>
      
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <ComplianceSentinel audit={auditData} />
        
        <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
          <h4>Principal Architect’s Technical Proof</h4>
          <p style={{ fontSize: '0.9em' }}>Targeting the Kenyan building collapse crisis via serverless <strong>Temporal Change Detection</strong> and <strong>Permit-to-Pixel</strong> verification.</p>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
