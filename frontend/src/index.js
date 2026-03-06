import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [isEnforced, setIsEnforced] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f4f7f9', minHeight: '100vh' }}>
      
      {/* HEADER SECTION */}
      <header style={{ marginBottom: '20px', borderBottom: '4px solid #27ae60', display: 'inline-block', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '2.2em', margin: 0 }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#34495e', fontWeight: 'bold', margin: '5px 0' }}>National Sovereign Compliance & Fiscal Sentinel</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', fontSize: '0.8em' }}>
           <span style={{ background: '#27ae60', color: 'white', padding: '2px 8px', borderRadius: '4px' }}>🟢 SYSTEM LIVE</span>
           <span style={{ background: '#2c3e50', color: 'white', padding: '2px 8px', borderRadius: '4px' }}>📡 INGESTION ACTIVE</span>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
        
        {/* COLUMN 1: INGESTION & DISCOVERY (Restored Project 11 Basics) */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'left', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderTop: '4px solid #7f8c8d' }}>
          <h4 style={{ color: '#7f8c8d', margin: '0 0 10px 0' }}>📂 Ingestion & Discovery</h4>
          <p><strong>Verified Asset:</strong> <code>S2A_37MBU_20170119</code></p>
          <p><strong>Payload:</strong> 207.9 MiB GeoTIFF</p>
          <p><strong>Infrastructure:</strong> Terraform (us-east-1)</p>
          <p><strong>Discovery:</strong> Athena SQL Indexing [OK]</p>
          <div style={{ fontSize: '0.8em', background: '#f8f9fa', padding: '8px', borderRadius: '4px' }}>
            Data sourced from Sentinel-2 Regional Hub.
          </div>
        </div>

        {/* COLUMN 2: BIM & TEMPORAL ANALYSIS */}
        <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'left', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderTop: '4px solid #3498db' }}>
          <h4 style={{ color: '#2980b9', margin: '0 0 10px 0' }}>📐 Spatial Intelligence</h4>
          <p><strong>BIM Sync:</strong> <span style={{ color: '#27ae60' }}>100% Alignment</span></p>
          <p><strong>Structural Drift:</strong> 0.42% (Optimal)</p>
          <p><strong>Urban Density Index:</strong> 0.74</p>
          <p><strong>Vegetation Cover:</strong> 22%</p>
          <p><strong>Growth Delta:</strong> +6.0% (7-Day)</p>
        </div>

        {/* COLUMN 3: FORENSICS & LEGAL */}
        <div style={{ background: '#2c3e50', color: 'white', padding: '20px', borderRadius: '12px', textAlign: 'left', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <h4 style={{ color: '#f1c40f', margin: '0 0 10px 0' }}>🛡️ Forensic Evidence Vault</h4>
          <p style={{ fontSize: '0.85em' }}><strong>Audit ID:</strong> KAGUA-2026-X99</p>
          <p style={{ fontSize: '0.85em' }}><strong>Signature:</strong> <code>sha256:8f43ac...</code></p>
          {!isEnforced ? (
            <button onClick={() => setIsEnforced(true)} style={{ width: '100%', padding: '8px', background: '#e74c3c', border: 'none', color: 'white', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
              Issue Legal Stop Order
            </button>
          ) : (
            <div style={{ background: '#27ae60', padding: '8px', borderRadius: '5px', textAlign: 'center', marginTop: '10px' }}>
              📜 STOP ORDER ARCHIVED
            </div>
          )}
          <p style={{ fontSize: '0.7em', marginTop: '10px', color: '#bdc3c7' }}>Authority: National Construction Authority (NCA) Verified</p>
        </div>

        {/* BOTTOM ROW: FINTECH & ESCROW (Spans full width) */}
        <div style={{ gridColumn: '1 / span 3', background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'left', borderLeft: '10px solid #27ae60', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ color: '#27ae60', margin: '0 0 5px 0' }}>💰 Automated Milestone Payment</h3>
            <p style={{ margin: 0 }}>Milestone: <strong>Foundation Slab Cast</strong> | Authorized: <strong>KES 10,000,000.00</strong></p>
            <p style={{ fontSize: '0.8em', color: '#7f8c8d' }}>Triggered by 100% BIM-Satellite Alignment verification.</p>
          </div>
          <button style={{ background: '#2c3e50', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', fontSize: '1em', cursor: 'pointer', fontWeight: 'bold' }}>
            Execute Transfer
          </button>
        </div>
      </div>

      <footer style={{ marginTop: '30px', padding: '20px', borderTop: '1px solid #dee2e6' }}>
        <p style={{ fontWeight: 'bold', margin: 0 }}>Principal Architect: Dan Alwende</p>
        <p style={{ color: '#7f8c8d', fontSize: '0.8em' }}>Kagua Mjengo na AI | Solving Construction Integrity at Orbital Scale</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
