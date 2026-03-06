import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f8f9fa', minHeight: '100vh' }}>
      <header style={{ marginBottom: '30px', borderBottom: '4px solid #27ae60', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '2.5em', margin: 0 }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#34495e', fontWeight: 'bold' }}>Sovereign Compliance & Automated Escrow</p>
      </header>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px' }}>
        
        {/* Physical Audit Card */}
        <div style={{ background: 'white', padding: '25px', borderRadius: '15px', textAlign: 'left', borderLeft: '10px solid #27ae60', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3>🛰️ Orbital Verification</h3>
          <p><strong>Region:</strong> Nairobi Metropolitan Zone A12</p>
          <p><strong>BIM Sync:</strong> <span style={{ color: '#27ae60', fontWeight: 'bold' }}>100% ALIGNMENT</span></p>
          <p><strong>As-Built Delta:</strong> 0.42% (Within Tolerance)</p>
          <div style={{ padding: '10px', background: '#d4edda', color: '#155724', borderRadius: '5px', fontSize: '0.9em' }}>
            Verification complete. No structural drift detected.
          </div>
        </div>

        {/* Fiscal Milestone Card */}
        <div style={{ background: 'white', padding: '25px', borderRadius: '15px', textAlign: 'left', borderLeft: '10px solid #3498db', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3>💰 Milestone Payment</h3>
          <p><strong>Status:</strong> <span style={{ color: '#2980b9', fontWeight: 'bold' }}>AUTHORIZED</span></p>
          <p><strong>Release Amount:</strong> KES 10,000,000.00</p>
          <p><strong>Recipient:</strong> Lead Contractor (Nairobi)</p>
          <button style={{ width: '100%', background: '#2c3e50', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', marginTop: '10px' }}>
             Execute Bank Transfer (M-Pesa/RTGS)
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '15px', maxWidth: '1000px', margin: '30px auto', border: '1px solid #dee2e6' }}>
        <h4>Principal Architect's Venture Proof</h4>
        <p style={{ fontSize: '0.9em' }}>
          By decoupling payment from manual inspection and anchoring it to <strong>Satellite Deterministic Proof</strong>, we eliminate project delays and financial fraud in construction delivery.
        </p>
      </div>

      <footer style={{ marginTop: '50px', color: '#95a5a6' }}>
        <p>Principal Architect: Dan Alwende | Venture: Kagua Mjengo na AI</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
