import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [notified, setNotified] = useState(false);

  const handleEnforcement = () => {
    setNotified(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f0f2f5', minHeight: '100vh' }}>
      <header style={{ marginBottom: '30px', borderBottom: '3px solid #27ae60', display: 'inline-block', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '2.5em', margin: 0 }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#7f8c8d', fontWeight: 'bold' }}>Sovereign Compliance & Enforcement Division</p>
      </header>
      
      <div style={{ maxWidth: '850px', margin: '0 auto', display: 'grid', gridTemplateColumns: notified ? '1fr 1fr' : '11fr', gap: '20px' }}>
        
        {/* Main Alert Card */}
        <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', textAlign: 'left' }}>
          <h2 style={{ color: '#e74c3c' }}>🚨 CRITICAL ALERT</h2>
          <p><strong>Region:</strong> Nairobi North Sector (Zone A-12)</p>
          <p><strong>Anomaly:</strong> +6.0% Unsanctioned Structural Growth</p>
          <hr />
          {!notified ? (
            <button 
              onClick={handleEnforcement}
              style={{ width: '100%', background: '#c0392b', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', fontSize: '1.1em', cursor: 'pointer', fontWeight: 'bold' }}>
              📜 Issue Legal Stop Order
            </button>
          ) : (
            <div style={{ background: '#27ae60', color: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
              ✅ STOP ORDER DISPATCHED
            </div>
          )}
        </div>

        {/* Forensic Vault (Appears after Enforcement) */}
        {notified && (
          <div style={{ background: '#2c3e50', color: '#ecf0f1', padding: '30px', borderRadius: '15px', textAlign: 'left', fontSize: '0.9em' }}>
            <h3 style={{ color: '#f1c40f', marginTop: 0 }}>🛡️ Forensic Evidence Vault</h3>
            <p><strong>Audit ID:</strong> KAGUA-2026-X99</p>
            <p><strong>Digital Signature:</strong> <code style={{ color: '#3498db' }}>sha256:8f43ac...</code></p>
            <hr style={{ borderColor: '#444' }} />
            <p><strong>Stakeholder Alerts:</strong></p>
            <ul>
              <li>NCA Enforcement ✅</li>
              <li>Nairobi County Planning ✅</li>
              <li>Lending Partner (KCB) ✅</li>
            </ul>
            <p style={{ background: '#34495e', padding: '10px', borderRadius: '5px', fontSize: '0.8em' }}>
              This record is immutable and stored in the Sovereign Data Perimeter.
            </p>
          </div>
        )}
      </div>

      <footer style={{ marginTop: '50px', color: '#95a5a6', fontSize: '0.85em' }}>
        <p>Principal Architect: Dan Alwende | Venture Strategy: Building Safety & Fiscal Integrity</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
