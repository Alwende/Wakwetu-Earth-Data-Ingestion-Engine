import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    // Simulating a search for an Affordable Housing project
    setResult({
      id: "AF-HOUSING-001",
      location: "Nairobi - Parklands",
      nca: "NCA-2026-99",
      nema: "NEMA/EIA/5521",
      safety: "99.58% Compliance",
      risk: "2.4% (Stable)",
      escrow: "Authorized (KES 10M)"
    });
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f8f9fa', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ margin: 0, fontSize: '2.5em' }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#27ae60', fontWeight: 'bold' }}>National Sovereign Compliance: 47 Counties | 10,000+ Projects</p>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto 40px auto', display: 'flex', gap: '10px' }}>
        <input 
          placeholder="Enter Project ID (e.g. AF-HOUSING-001)..." 
          style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} style={{ padding: '15px 30px', background: '#2c3e50', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
          VERIFY PROJECT
        </button>
      </div>

      {result && (
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderTop: '5px solid #e67e22' }}>
            <h5 style={{ margin: '0 0 10px 0', color: '#d35400' }}>📜 REGULATORY</h5>
            <p style={{ fontSize: '0.85em' }}>NCA: {result.nca} ✅</p>
            <p style={{ fontSize: '0.85em' }}>NEMA: {result.nema} ✅</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderTop: '5px solid #3498db' }}>
            <h5 style={{ margin: '0 0 10px 0', color: '#2980b9' }}>📐 STRUCTURAL</h5>
            <p style={{ fontSize: '0.85em' }}>BIM Sync: {result.safety}</p>
            <p style={{ fontSize: '0.85em' }}>Risk: {result.risk}</p>
          </div>
          <div style={{ background: '#2c3e50', color: 'white', padding: '20px', borderRadius: '12px' }}>
            <h5 style={{ margin: '0 0 10px 0', color: '#f1c40f' }}>🛡️ FORENSICS</h5>
            <p style={{ fontSize: '0.8em' }}>ID: KAGUA-2026-X99</p>
            <div style={{ background: '#27ae60', padding: '4px', borderRadius: '4px', textAlign: 'center', fontSize: '0.8em', marginTop: '10px' }}>
              📜 STOP ORDER ARCHIVED
            </div>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', borderTop: '5px solid #27ae60' }}>
            <h5 style={{ margin: '0 0 10px 0', color: '#27ae60' }}>💰 FINTECH</h5>
            <p style={{ fontSize: '0.85em' }}>Escrow: {result.escrow}</p>
            <button style={{ background: '#2c3e50', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8em', marginTop: '5px' }}>
              EXECUTE TRANSFER
            </button>
          </div>
        </div>
      )}

      <footer style={{ marginTop: '50px', textAlign: 'center', color: '#7f8c8d' }}>
        <p><strong>Principal Architect: Dan Alwende</strong> | Kagua Mjengo na AI: The Industrial Standard for Urban Integrity</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
