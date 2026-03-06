import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);
  const [view, setView] = useState('LANDING');

  const handleSearch = (id) => {
    const targetId = (id || search).toUpperCase();
    
    // REALITY ENGINE: Dynamic data generation based on the Project ID
    // This simulates the "Decision Making" data a Governor actually needs.
    const projectDatabase = {
      "KASARANI-B12": {
        id: "KASARANI-B12",
        status: "CEASE_AND_DESIST",
        drift: "4.82% [CRITICAL]",
        risk: "88% Failure Probability",
        payout: "KES 0.00 (FROZEN)",
        nca: "REVOKED",
        color: "#c0392b"
      },
      "PARKLANDS-A01": {
        id: "PARKLANDS-A01",
        status: "APPROVED",
        drift: "0.42% [OPTIMAL]",
        risk: "1.2% Stable",
        payout: "KES 15,400,000.00",
        nca: "VALID",
        color: "#27ae60"
      }
    };

    const data = projectDatabase[targetId] || {
      id: targetId,
      status: "INSPECTION_REQUIRED",
      drift: "UNKNOWN",
      risk: "UNRATED",
      payout: "PENDING VERIFICATION",
      nca: "PENDING",
      color: "#f39c12"
    };

    setResult({
      ...data,
      date: new Date().toLocaleDateString(),
      ingestion: { asset: "S2A_37MBU_2026", payload: "207.9 MiB" },
      forensics: { hash: "sha256:" + Math.random().toString(16).slice(2) }
    });
    setView('DASHBOARD');
  };

  return (
    <div className="main-container" style={{ padding: '20px', fontFamily: 'Segoe UI, sans-serif', background: '#f4f7f9', minHeight: '100vh' }}>
      <style>{`
        @media print { .no-print { display: none !important; } .cert-mode { border: 2px solid #27ae60; padding: 40px; } }
      `}</style>

      <header className="no-print" style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '3px solid #27ae60' }}>
        <h1>🏗️ Kagua Mjengo na AI</h1>
        <p>Principal Architect: Dan Alwende | National Sovereign Infrastructure</p>
        <div style={{ margin: '10px' }}>
          <button onClick={() => setView('LANDING')}>Search Portal</button>
          <button onClick={() => handleSearch("KASARANI-B12")} style={{ marginLeft: '10px' }}>Simulate Critical Risk</button>
        </div>
      </header>

      {view === 'LANDING' && (
        <div className="no-print" style={{ maxWidth: '500px', margin: '100px auto', textAlign: 'center' }}>
          <input 
            placeholder="Search Project ID (e.g., KASARANI-B12)..." 
            style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => handleSearch()} style={{ marginTop: '10px', width: '100%', padding: '15px', background: '#2c3e50', color: 'white' }}>VERIFY INTEGRITY</button>
        </div>
      )}

      {view === 'DASHBOARD' && result && (
        <div className="cert-mode" style={{ maxWidth: '1000px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '15px', borderLeft: `10px solid ${result.color}` }}>
          <div style={{ textAlign: 'center', borderBottom: '2px solid #eee', paddingBottom: '20px' }}>
            <h2 style={{ color: result.color }}>HATI YA UKAGUZI: {result.status}</h2>
            <p>Project Identity: **{result.id}** | Date: {result.date}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
            <div>
              <h4>🛰️ Structural Audit</h4>
              <p>Drift Velocity: **{result.drift}**</p>
              <p>Risk Horizon: **{result.risk}**</p>
            </div>
            <div>
              <h4>📜 Legal Standing</h4>
              <p>NCA Registration: **{result.nca}**</p>
              <p>Audit Signature: **{result.forensics.hash.substring(0, 12)}**</p>
            </div>
          </div>

          <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', border: '1px solid #ddd' }}>
            <h4>💰 Fiscal Authorization</h4>
            <p>The system has **{result.status === 'APPROVED' ? 'AUTHORIZED' : 'BLOCKED'}** the disbursement of **{result.payout}** based on satellite structural proofs.</p>
            <div className="no-print" style={{ marginTop: '10px' }}>
              <button onClick={() => window.print()} style={{ background: '#2c3e50', color: 'white', padding: '10px 20px' }}>PRINT OFFICIAL REPORT</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
