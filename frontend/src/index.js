import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [isEnforced, setIsEnforced] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '30px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f0f4f8', minHeight: '100vh' }}>
      <header style={{ marginBottom: '30px', borderBottom: '4px solid #27ae60', display: 'inline-block', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '2.5em', margin: 0 }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#34495e', fontWeight: 'bold' }}>National Sovereign Compliance & Fiscal Sentinel</p>
      </header>

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        {/* TIER 1: PHYSICAL & BIM SYNC */}
        <div style={{ background: 'white', padding: '25px', borderRadius: '15px', textAlign: 'left', borderTop: '5px solid #3498db', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#2980b9' }}>📐 BIM-to-Orbital Sync</h3>
          <p><strong>Region:</strong> Nairobi Metropolitan Zone A12</p>
          <p><strong>Physical Footprint:</strong> 1,200.5 m²</p>
          <p><strong>Structural Drift:</strong> <span style={{ color: '#27ae60' }}>0.42% (Optimal)</span></p>
          <p><strong>Historical Delta (7-Day):</strong> +6.0% Growth</p>
          <div style={{ padding: '10px', background: '#d4edda', borderRadius: '5px', fontSize: '0.85em' }}>
            Verification: As-Built aligns with Architectural Intent.
          </div>
        </div>

        {/* TIER 2: LEGAL & FORENSIC VAULT */}
        <div style={{ background: '#2c3e50', color: 'white', padding: '25px', borderRadius: '15px', textAlign: 'left', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#f1c40f' }}>🛡️ Forensic Evidence Vault</h3>
          <p><strong>Audit ID:</strong> KAGUA-2026-X99</p>
          <p><strong>Digital Signature:</strong> <code style={{ color: '#3498db' }}>sha256:8f43ac...</code></p>
          <p><strong>Authority:</strong> National Construction Authority (NCA) Verified</p>
          {!isEnforced ? (
            <button onClick={() => setIsEnforced(true)} style={{ width: '100%', padding: '10px', background: '#e74c3c', border: 'none', color: 'white', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
              Generate Hati ya Ukaguzi
            </button>
          ) : (
            <div style={{ background: '#27ae60', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
              📜 STOP ORDER ISSUED & ARCHIVED
            </div>
          )}
        </div>

        {/* TIER 3: FINTECH & ESCROW (Spans both columns) */}
        <div style={{ gridColumn: '1 / span 2', background: 'white', padding: '30px', borderRadius: '15px', textAlign: 'left', borderLeft: '10px solid #27ae60', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#27ae60', margin: 0 }}>💰 Automated Milestone Payment</h3>
              <p style={{ margin: '5px 0' }}>Milestone: <strong>Foundation Slab Cast</strong></p>
              <p><strong>Authorized Release:</strong> <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>KES 10,000,000.00</span></p>
            </div>
            <button style={{ background: '#2c3e50', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '8px', fontSize: '1em', cursor: 'pointer', fontWeight: 'bold' }}>
              Execute Transfer
            </button>
          </div>
          <p style={{ fontSize: '0.8em', color: '#7f8c8d', borderTop: '1px solid #eee', paddingTop: '10px' }}>
            Logic: Release triggered by 100% BIM-Satellite Alignment verification.
          </p>
        </div>
      </div>

      <footer style={{ marginTop: '40px', padding: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>Principal Architect: Dan Alwende</p>
        <p style={{ color: '#7f8c8d', fontSize: '0.9em' }}>Venture Architecture: Kagua Mjengo na AI | Solving Construction Integrity at Orbital Scale</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
