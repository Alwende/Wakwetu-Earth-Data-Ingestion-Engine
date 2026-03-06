import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [notified, setNotified] = useState(false);

  const auditData = {
    region: "Nairobi North Sector",
    temporal_delta: 0.06,
    compliance_status: "CRITICAL_NON_COMPLIANCE",
    recommendation: "Immediate Inspection Required - Unsanctioned Foundation Detected",
    revenue_tier: "B2G_GOVERNANCE_SIGNAL"
  };

  const handleEnforcement = () => {
    setNotified(true);
    console.log("Hati ya Ukaguzi Issued. Notifying NCA Enforcement Division...");
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f4f7f6', minHeight: '100vh' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '5px' }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#7f8c8d' }}>Venture Lead: Dan Alwende | Sovereign Compliance & Enforcement</p>
      </header>
      
      <div style={{ maxWidth: '750px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
        <div style={{ background: '#ffdada', padding: '20px', borderRadius: '12px', border: '2px solid #e74c3c' }}>
          <h2 style={{ color: '#c0392b', margin: '0 0 10px 0' }}>🚨 CRITICAL NON-COMPLIANCE</h2>
          <p><strong>Nairobi North Sector:</strong> Unsanctioned Growth Detected (+6.0%)</p>
          <p style={{ fontSize: '0.9em' }}>Historical Baseline: Feb 2026 | Current: Mar 2026</p>
        </div>

        <div style={{ marginTop: '30px' }}>
          {!notified ? (
            <button 
              onClick={handleEnforcement}
              style={{ background: '#2c3e50', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', fontSize: '1em', cursor: 'pointer', fontWeight: 'bold' }}>
              📜 Generate Hati ya Ukaguzi (Digital Audit)
            </button>
          ) : (
            <div style={{ background: '#27ae60', color: 'white', padding: '15px', borderRadius: '8px', fontWeight: 'bold' }}>
              ✅ STOP ORDER ISSUED: Notice Sent to NCA & KCB Risk Division
            </div>
          )}
        </div>

        <div style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid #eee', textAlign: 'left' }}>
          <h4>Venture Economics (B2G/B2B)</h4>
          <ul>
            <li><strong>Subscription:</strong> Nairobi County Compliance Sentinel</li>
            <li><strong>Transaction:</strong> Automated Audit-as-a-Service per Site</li>
            <li><strong>Risk Mitigation:</strong> Loan-to-Value (LTV) Verification for Financial Partners</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
