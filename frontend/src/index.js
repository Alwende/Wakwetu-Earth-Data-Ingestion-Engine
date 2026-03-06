import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [showLegal, setShowLegal] = useState(true);

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f0f4f7', minHeight: '100vh' }}>
      
      {/* HEADER: VENTURE IDENTITY */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: 0, fontSize: '2.5em', color: '#2c3e50' }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ margin: '5px 0', fontWeight: 'bold', color: '#27ae60' }}>The Sovereign One-Stop-Shop for Construction Governance</p>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
        
        {/* MODULE 1: INFRASTRUCTURE & INGESTION (Project 11 Baseline) */}
        <div style={{ background: 'white', padding: '15px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '4px solid #7f8c8d' }}>
          <h5 style={{ marginTop: 0, color: '#7f8c8d' }}>📡 ORBITAL INGESTION</h5>
          <p style={{ fontSize: '0.85em' }}><strong>Asset:</strong> S2A_37MBU_2026</p>
          <p style={{ fontSize: '0.85em' }}><strong>Payload:</strong> 207.9 MiB GeoTIFF</p>
          <p style={{ fontSize: '0.85em' }}><strong>Infra:</strong> Terraform / AWS Athena</p>
        </div>

        {/* MODULE 2: REGULATORY ENFORCEMENT (NCA, NEMA, COUNTY) */}
        <div style={{ background: '#fff', padding: '15px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '4px solid #e67e22' }}>
          <h5 style={{ marginTop: 0, color: '#d35400' }}>📜 REGULATORY STATUS</h5>
          <p style={{ fontSize: '0.85em' }}><strong>NCA Reg:</strong> NCA-99283-B ✅</p>
          <p style={{ fontSize: '0.85em' }}><strong>NEMA EIA:</strong> Licensed ✅</p>
          <p style={{ fontSize: '0.85em' }}><strong>County Permit:</strong> NCC/PLN/001 ✅</p>
          <p style={{ fontSize: '0.85em', color: '#27ae60', fontWeight: 'bold' }}>LEGAL TO CONSTRUCT</p>
        </div>

        {/* MODULE 3: SPATIAL INTELLIGENCE (BIM & DRIFT) */}
        <div style={{ background: 'white', padding: '15px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '4px solid #3498db' }}>
          <h5 style={{ marginTop: 0, color: '#2980b9' }}>📐 SPATIAL SYNC</h5>
          <p style={{ fontSize: '0.85em' }}><strong>BIM Alignment:</strong> 99.58%</p>
          <p style={{ fontSize: '0.85em' }}><strong>Structural Drift:</strong> 0.42% [OK]</p>
          <p style={{ fontSize: '0.85em' }}><strong>7-Day Growth:</strong> +6.0%</p>
        </div>

        {/* MODULE 4: RISK & FORENSICS (THE SHIELD) */}
        <div style={{ background: '#2c3e50', color: 'white', padding: '15px', borderRadius: '10px' }}>
          <h5 style={{ marginTop: 0, color: '#f1c40f' }}>🛡️ FORENSIC VAULT</h5>
          <p style={{ fontSize: '0.75em' }}><strong>Audit Hash:</strong> sha256:8f43ac...</p>
          <p style={{ fontSize: '0.75em' }}><strong>Risk (30-Day):</strong> 2.4% Stable</p>
          <div style={{ background: '#c0392b', padding: '5px', borderRadius: '4px', textAlign: 'center', fontSize: '0.8em', marginTop: '5px' }}>
             📜 Hati ya Ukaguzi Issued
          </div>
        </div>

        {/* FINTECH & MILESTONE (FULL WIDTH) */}
        <div style={{ gridColumn: '1 / span 4', background: 'white', padding: '20px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: '10px solid #27ae60' }}>
          <div>
            <h4 style={{ margin: 0, color: '#27ae60' }}>💰 AUTOMATED ESCROW DISBURSEMENT</h4>
            <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Authorized Payout: <strong>KES 10,000,000.00</strong> | Basis: 100% Regulatory & Spatial Compliance</p>
          </div>
          <button style={{ background: '#2c3e50', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
            EXECUTE RTGS
          </button>
        </div>
      </div>

      <footer style={{ marginTop: '30px', textAlign: 'center', color: '#7f8c8d', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
        <p><strong>Principal Architect: Dan Alwende</strong> | Kagua Mjengo na AI: The Industrial Standard for Urban Integrity</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
