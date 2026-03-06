import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    // REALITY CHECK: Validating the Project ID
    if (search.trim().toUpperCase() === 'AF-HOUSING-001') {
      setError('');
      setResult({
        id: "AF-HOUSING-001",
        ingestion: { asset: "S2A_37MBU_2026", payload: "207.9 MiB", infra: "Terraform/AWS" },
        regulatory: { nca: "NCA-99283-B ✅", nema: "Licensed ✅", county: "Approved ✅" },
        spatial: { alignment: "99.58%", drift: "0.42% [OK]", growth: "+6.0%" },
        forensics: { hash: "sha256:8f43ac...", risk: "2.4% Stable" },
        fintech: { amount: "KES 10,000,000.00" }
      });
    } else {
      setResult(null);
      setError('❌ Project ID not found in National Registry. Please verify the ID.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f0f4f7', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0, fontSize: '2.5em' }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#27ae60', fontWeight: 'bold' }}>National Sovereign Compliance: 47 Counties | 10,000+ Projects</p>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto 10px auto', display: 'flex', gap: '10px' }}>
        <input 
          placeholder="Enter Project ID (e.g. AF-HOUSING-001)..." 
          style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1.1em' }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} style={{ padding: '15px 30px', background: '#2c3e50', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
          VERIFY PROJECT
        </button>
      </div>
      
      {error && <p style={{ textAlign: 'center', color: '#c0392b', fontWeight: 'bold' }}>{error}</p>}

      {result && (
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '30px' }}>
          <div style={{ background: 'white', padding: '15px', borderRadius: '10px', borderTop: '4px solid #7f8c8d' }}>
            <h5 style={{ marginTop: 0, color: '#7f8c8d' }}>📡 INGESTION</h5>
            <p style={{ fontSize: '0.85em' }}><strong>Asset:</strong> {result.ingestion.asset}</p>
            <p style={{ fontSize: '0.85em' }}><strong>Payload:</strong> {result.ingestion.payload}</p>
          </div>
          <div style={{ background: 'white', padding: '15px', borderRadius: '10px', borderTop: '4px solid #e67e22' }}>
            <h5 style={{ marginTop: 0, color: '#d35400' }}>📜 REGULATORY</h5>
            <p style={{ fontSize: '0.85em' }}><strong>NCA:</strong> {result.regulatory.nca}</p>
            <p style={{ fontSize: '0.85em' }}><strong>NEMA:</strong> {result.regulatory.nema}</p>
          </div>
          <div style={{ background: 'white', padding: '15px', borderRadius: '10px', borderTop: '4px solid #3498db' }}>
            <h5 style={{ marginTop: 0, color: '#2980b9' }}>📐 SPATIAL SYNC</h5>
            <p style={{ fontSize: '0.85em' }}><strong>BIM Sync:</strong> {result.spatial.alignment}</p>
            <p style={{ fontSize: '0.85em' }}><strong>Drift:</strong> {result.spatial.drift}</p>
          </div>
          <div style={{ background: '#2c3e50', color: 'white', padding: '15px', borderRadius: '10px' }}>
            <h5 style={{ marginTop: 0, color: '#f1c40f' }}>🛡️ FORENSICS</h5>
            <p style={{ fontSize: '0.75em' }}><strong>Hash:</strong> {result.forensics.hash}</p>
            <div style={{ background: '#c0392b', padding: '4px', borderRadius: '4px', textAlign: 'center', fontSize: '0.7em', marginTop: '10px' }}>📜 Hati ya Ukaguzi Issued</div>
          </div>
          <div style={{ gridColumn: '1 / span 4', background: 'white', padding: '20px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: '10px solid #27ae60' }}>
            <div>
              <h4 style={{ margin: 0, color: '#27ae60' }}>💰 AUTOMATED ESCROW DISBURSEMENT</h4>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Authorized Payout: <strong>{result.fintech.amount}</strong></p>
            </div>
            <div>
              <button style={{ background: '#2c3e50', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginRight: '10px' }}>EXECUTE RTGS</button>
              <button style={{ background: '#34495e', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>📜 PRINT CERTIFICATE</button>
            </div>
          </div>
        </div>
      )}
      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#7f8c8d', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
        <p><strong>Principal Architect: Dan Alwende</strong> | Kagua Mjengo na AI: Scaling National Urban Resilience</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
