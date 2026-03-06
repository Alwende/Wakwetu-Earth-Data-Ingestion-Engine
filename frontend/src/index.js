import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);

  const runAudit = () => {
    const id = search.toUpperCase();
    
    // Decision-making logic to reflect real data variance
    let data;
    if (id === "KASARANI") {
      data = { status: "CRITICAL: ILLEGAL", drift: "+29.17%", payout: "KES 0.00", color: "#c0392b", nca: "REVOKED" };
    } else if (id === "PARKLANDS") {
      data = { status: "COMPLIANT", drift: "-0.20%", payout: "KES 47,904,000.00", color: "#27ae60", nca: "VALID" };
    } else {
      data = { status: "ILLEGAL / NO PERMIT", drift: "N/A", payout: "KES 0.00", color: "#c0392b", nca: "NOT FOUND" };
    }

    setResult({ id, ...data });
  };

  return (
    <div style={{ padding: '40px', background: '#f4f7f9', minHeight: '100vh', fontFamily: 'Segoe UI' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0 }}>🏗️ Kagua Mjengo na AI</h1>
        <p>National Sovereign Sentinel | Principal Architect: Dan Alwende</p>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto 40px auto', display: 'flex' }}>
        <input 
          placeholder="Enter Zone (e.g., KASARANI or PARKLANDS)..." 
          style={{ flex: 1, padding: '15px', borderRadius: '8px 0 0 8px', border: '1px solid #ddd' }}
          onChange={e => setSearch(e.target.value)}
        />
        <button 
          onClick={runAudit}
          style={{ padding: '15px', background: '#2c3e50', color: 'white', border: 'none', borderRadius: '0 8px 8px 0', cursor: 'pointer', fontWeight: 'bold' }}
        >RUN AUDIT</button>
      </div>

      {result && (
        <div style={{ maxWidth: '900px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '15px', borderLeft: `15px solid ${result.color}`, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: result.color, margin: 0 }}>{result.status}</h2>
          <hr style={{ margin: '20px 0' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
             <div>
                <p><strong>Project ID:</strong> {result.id}</p>
                <p><strong>Structural Drift:</strong> {result.drift}</p>
                <p><strong>NCA Registration:</strong> {result.nca}</p>
             </div>
             <div style={{ textAlign: 'right', background: '#f8f9fa', padding: '15px', borderRadius: '10px' }}>
                <h4 style={{ margin: 0 }}>Authorized Disbursement</h4>
                <p style={{ fontSize: '1.8em', fontWeight: 'bold', margin: '10px 0' }}>{result.payout}</p>
                <button onClick={() => window.print()} style={{ background: '#34495e', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>📜 PRINT HATI YA UKAGUZI</button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
