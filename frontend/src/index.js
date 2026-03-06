import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (search.trim().toUpperCase() === 'AF-HOUSING-001') {
      setError('');
      setResult({
        id: "AF-HOUSING-001",
        date: "March 7, 2026",
        ingestion: { asset: "S2A_37MBU_2026", payload: "207.9 MiB", infra: "Terraform/AWS" },
        regulatory: { nca: "NCA-99283-B ✅", nema: "Licensed ✅", county: "Approved ✅" },
        spatial: { alignment: "99.58%", drift: "0.42% [OK]", growth: "+6.0%" },
        forensics: { hash: "sha256:8f43ac7b9e1152a...", risk: "2.4% Stable" },
        fintech: { amount: "KES 10,000,000.00" }
      });
    } else {
      setResult(null);
      setError('❌ Project ID not found in National Registry.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="main-container" style={{ padding: '20px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f0f4f7', minHeight: '100vh' }}>
      
      {/* CSS for Print Optimization */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .main-container { background: white !important; padding: 0 !important; }
          .certificate-border { border: 2px solid #27ae60 !important; padding: 40px !important; margin: 0 !important; }
          body { -webkit-print-color-adjust: exact; }
        }
      `}</style>

      {/* SEARCH INTERFACE - HIDDEN DURING PRINT */}
      <header className="no-print" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0, fontSize: '2.5em' }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#27ae60', fontWeight: 'bold' }}>National Sovereign Compliance Portal</p>
      </header>

      <div className="no-print" style={{ maxWidth: '800px', margin: '0 auto 40px auto', display: 'flex', gap: '10px' }}>
        <input 
          placeholder="Enter Project ID (e.g. AF-HOUSING-001)..." 
          style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} style={{ padding: '15px 30px', background: '#2c3e50', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
          VERIFY PROJECT
        </button>
      </div>

      {error && <p className="no-print" style={{ textAlign: 'center', color: '#c0392b' }}>{error}</p>}

      {/* THE CERTIFICATE CONTENT */}
      {result && (
        <div className="certificate-border" style={{ maxWidth: '1000px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <div style={{ textAlign: 'center', borderBottom: '2px solid #27ae60', paddingBottom: '20px', marginBottom: '30px' }}>
            <h2 style={{ margin: 0, color: '#27ae60' }}>HATI YA UKAGUZI (CERTIFICATE OF INTEGRITY)</h2>
            <p style={{ margin: '5px 0' }}>Issued by: **Kagua Mjengo na AI Sovereign Systems**</p>
            <p style={{ fontSize: '0.8em', color: '#7f8c8d' }}>Date: {result.date} | Certificate ID: {result.forensics.hash.substring(0, 12).toUpperCase()}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div>
              <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>🏢 Project Identity</h4>
              <p><strong>Project ID:</strong> {result.id}</p>
              <p><strong>NCA Reg:</strong> {result.regulatory.nca}</p>
              <p><strong>NEMA EIA:</strong> {result.regulatory.nema}</p>
            </div>
            <div>
              <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>🛰️ Orbital Audit Data</h4>
              <p><strong>Structural Drift:</strong> {result.spatial.drift}</p>
              <p><strong>BIM Alignment:</strong> {result.spatial.alignment}</p>
              <p><strong>Forensic Hash:</strong> {result.forensics.hash.substring(0, 24)}...</p>
            </div>
          </div>

          <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '10px', border: '1px solid #ddd' }}>
            <h4 style={{ marginTop: 0 }}>📜 Executive Compliance Verdict</h4>
            <p style={{ margin: 0 }}>This building has been verified via **Satellite Deterministic Proof**. No critical structural anomalies detected. This project is cleared for **Milestone Disbursement** of **{result.fintech.amount}**.</p>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ fontSize: '0.7em', color: '#7f8c8d' }}>
              <p>Principal Architect: **Dan Alwende**</p>
              <p>Digital Signature Verified via AWS Sovereign Cloud</p>
            </div>
            {/* ACTION BUTTONS - HIDDEN DURING PRINT */}
            <div className="no-print">
              <button onClick={handlePrint} style={{ background: '#34495e', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginRight: '10px' }}>
                📜 PRINT CERTIFICATE
              </button>
              <button style={{ background: '#27ae60', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
                💰 EXECUTE RTGS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
