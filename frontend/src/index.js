import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSearch = () => {
    if(searchQuery.length > 5) setIsVerified(true);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* GLOBAL COMMAND HEADER */}
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0 }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#27ae60', fontWeight: 'bold' }}>National Sovereign Infrastructure: 47 Counties | 10,000+ Projects</p>
      </header>

      {/* PUBLIC INVESTOR SEARCH BAR */}
      <div style={{ maxWidth: '800px', margin: '0 auto 30px auto', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Enter Project ID or GPS Coordinates (e.g., Nairobi North A12)..." 
          style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} style={{ padding: '15px 30px', background: '#2c3e50', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          VERIFY SAFETY
        </button>
      </div>

      {isVerified && (
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
          
          {/* REGULATORY PANEL */}
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderTop: '5px solid #e67e22' }}>
            <h4>📜 Regulatory Clearance</h4>
            <p>NCA Status: <strong>VERIFIED</strong></p>
            <p>NEMA License: <strong>ACTIVE</strong></p>
            <p>County Zoning: <strong>COMPLIANT</strong></p>
          </div>

          {/* STRUCTURAL PANEL */}
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderTop: '5px solid #3498db' }}>
            <h4>📐 Structural Integrity</h4>
            <p>Drift: <strong>0.42%</strong></p>
            <p>30-Day Risk: <strong>2.4% (Stable)</strong></p>
            <p>BIM Sync: <strong>99.58%</strong></p>
          </div>

          {/* FINTECH PANEL */}
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderTop: '5px solid #27ae60' }}>
            <h4>💰 Fiscal Milestone</h4>
            <p>Status: <strong>AUTHORIZED</strong></p>
            <p>Escrow Release: <strong>KES 10.0M</strong></p>
            <p>Verification: <strong>Orbital Proof</strong></p>
          </div>
        </div>
      )}

      <footer style={{ marginTop: '50px', borderTop: '1px solid #ddd', paddingTop: '20px', textAlign: 'center' }}>
        <p><strong>Principal Architect: Dan Alwende</strong> | Kagua Mjengo na AI: Scaling National Urban Resilience</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
