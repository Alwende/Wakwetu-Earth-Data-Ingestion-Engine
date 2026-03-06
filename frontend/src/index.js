import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [isEnforced, setIsEnforced] = useState(true);

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f0f2f5', minHeight: '100vh' }}>
      
      {/* GLOBAL COMMAND HEADER */}
      <header style={{ marginBottom: '20px', borderBottom: '5px solid #27ae60', display: 'inline-block', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '2.4em', margin: 0 }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#34495e', fontWeight: 'bold' }}>Sovereign Structural Integrity & Predictive Risk Platform</p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '10px' }}>
           <span style={{ border: '1px solid #27ae60', color: '#27ae60', padding: '2px 10px', borderRadius: '20px', fontSize: '0.8em' }}>📡 LIVE ORBITAL FEED</span>
           <span style={{ border: '1px solid #2c3e50', color: '#2c3e50', padding: '2px 10px', borderRadius: '20px', fontSize: '0.8em' }}>🛡️ FORENSIC LOGGING ACTIVE</span>
        </div>
      </header>

      <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
        
        {/* DATA SOURCE & INFRA */}
        <div style={{ background: 'white', padding: '15px', borderRadius: '12px', textAlign: 'left', borderTop: '4px solid #7f8c8d' }}>
          <h5 style={{ margin: '0 0 10px 0', color: '#7f8c8d' }}>📂 INGESTION</h5>
          <p style={{ fontSize: '0.9em' }}><strong>Asset:</strong> S2A_37MBU</p>
          <p style={{ fontSize: '0.9em' }}><strong>Payload:</strong> 207.9 MiB</p>
          <p style={{ fontSize: '0.9em' }}><strong>Infra:</strong> Terraform (AWS)</p>
        </div>

        {/* SPATIAL & BIM SYNC */}
        <div style={{ background: 'white', padding: '15px', borderRadius: '12px', textAlign: 'left', borderTop: '4px solid #3498db' }}>
          <h5 style={{ margin: '0 0 10px 0', color: '#2980b9' }}>📐 BIM SYNC</h5>
          <p style={{ fontSize: '0.9em' }}><strong>Drift:</strong> 0.42% [OK]</p>
          <p style={{ fontSize: '0.9em' }}><strong>Growth:</strong> +6.0%</p>
          <p style={{ fontSize: '0.9em' }}><strong>Density:</strong> 0.74 Index</p>
        </div>

        {/* PREDICTIVE RISK (NEW) */}
        <div style={{ background: '#fff9db', padding: '15px', borderRadius: '12px', textAlign: 'left', borderTop: '4px solid #f1c40f' }}>
          <h5 style={{ margin: '0 0 10px 0', color: '#f39c12' }}>🔮 RISK FORECAST</h5>
          <p style={{ fontSize: '0.9em' }}><strong>30-Day Failure:</strong> 2.4%</p>
          <p style={{ fontSize: '0.9em' }}><strong>Velocity:</strong> STABLE</p>
          <p style={{ fontSize: '0.9em', color: '#27ae60', fontWeight: 'bold' }}>TREND: NON-CRITICAL</p>
        </div>

        {/* FORENSICS & LEGAL */}
        <div style={{ background: '#2c3e50', color: 'white', padding: '15px', borderRadius: '12px', textAlign: 'left' }}>
          <h5 style={{ margin: '0 0 10px 0', color: '#f1c40f' }}>🛡️ FORENSICS</h5>
          <p style={{ fontSize: '0.8em' }}><strong>ID:</strong> KAGUA-2026-X99</p>
          <div style={{ background: '#27ae60', padding: '5px', borderRadius: '4px', textAlign: 'center', fontSize: '0.8em', marginTop: '10px' }}>
             📜 STOP ORDER ARCHIVED
          </div>
        </div>

        {/* FINTECH EXECUTION BAR (Full Width) */}
        <div style={{ gridColumn: '1 / span 4', background: 'white', padding: '20px', borderRadius: '15px', textAlign: 'left', borderLeft: '10px solid #27ae60', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <div>
            <h3 style={{ color: '#27ae60', margin: 0 }}>💰 MILESTONE AUTHORIZATION</h3>
            <p style={{ margin: '5px 0' }}>Foundation Phase: <strong>KES 10,000,000.00</strong> approved based on 0.42% drift precision.</p>
          </div>
          <button style={{ background: '#2c3e50', color: 'white', border: 'none', padding: '12px 35px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            EXECUTE RTGS
          </button>
        </div>
      </div>

      <footer style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid #dee2e6' }}>
        <p style={{ fontWeight: 'bold', margin: 0 }}>Principal Architect: Dan Alwende</p>
        <p style={{ color: '#7f8c8d', fontSize: '0.8em' }}>Venture Intelligence: Solving Construction Integrity at Orbital Scale</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
