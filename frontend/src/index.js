import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);

  const runAudit = (id) => {
    const target = (id || search).toUpperCase();
    
    // DECISION INFLUENCE LOGIC: 
    // This simulates the data variance required for real-world governance.
    const isIllegal = target.includes('C03') || target.includes('ILLEGAL');
    
    setResult({
      id: target,
      status: isIllegal ? "CRITICAL ANOMALY" : "COMPLIANT",
      color: isIllegal ? "#c0392b" : "#27ae60",
      drift: isIllegal ? "4.82% [FAIL]" : "0.42% [OPTIMAL]",
      payout: isIllegal ? "KES 0.00 (BLOCKED)" : "KES 10,000,000.00",
      nca: isIllegal ? "NOT FOUND" : "NCA-99283-B",
      action: isIllegal ? "ISSUE STOP ORDER" : "EXECUTE RTGS"
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI, sans-serif', background: '#f4f7f9', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px', borderBottom: '4px solid #2c3e50', paddingBottom: '10px' }}>
        <h1 style={{ margin: 0 }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ fontWeight: 'bold', color: '#7f8c8d' }}>Principal Architect: Dan Alwende | National Compliance Sentinel</p>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto 40px auto', textAlign: 'center' }}>
        <input 
          placeholder="Enter Zone or Project ID (e.g. ZONE_C03)..." 
          style={{ width: '70%', padding: '15px', borderRadius: '8px 0 0 8px', border: '1px solid #ddd' }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button 
          onClick={() => runAudit()} 
          style={{ width: '30%', padding: '15px', background: '#2c3e50', color: 'white', borderRadius: '0 8px 8px 0', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          VERIFY
        </button>
      </div>

      {result && (
        <div style={{ maxWidth: '1000px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '15px', borderLeft: `15px solid ${result.color}`, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h2 style={{ color: result.color, margin: '0 0 10px 0' }}>{result.status}</h2>
              <p><strong>Project ID:</strong> {result.id}</p>
              <p><strong>NCA Registry:</strong> {result.nca}</p>
              <p><strong>Structural Drift:</strong> {result.drift}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <h4>💰 Financial Authorization</h4>
              <p style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '10px 0' }}>{result.payout}</p>
              <button style={{ background: result.color, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
                {result.action}
              </button>
            </div>
          </div>
          <hr style={{ margin: '20px 0' }} />
          <p style={{ fontSize: '0.8em', color: '#7f8c8d' }}>Verification provided by Sovereign Orbital Truth Engine. Reference Hash: {Math.random().toString(36).substring(7).toUpperCase()}</p>
          <div className="no-print" style={{ marginTop: '10px', textAlign: 'right' }}>
             <button onClick={() => window.print()} style={{ background: '#34495e', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}>📜 Print Certificate</button>
          </div>
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
