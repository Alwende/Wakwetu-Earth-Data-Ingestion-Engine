import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);
  const [view, setView] = useState('LANDING'); // LANDING, DASHBOARD, MAP

  const handleSearch = (id) => {
    const targetId = id || search;
    // Real-world logic: Search can handle any ID, here we mock a multi-project response
    setResult({
      id: targetId.toUpperCase() || "NRT-ZONE-B12",
      location: "Nairobi North",
      ingestion: { asset: "S2A_37MBU_2026", payload: "207.9 MiB", infra: "Terraform/AWS" },
      regulatory: { nca: "NCA-99283-B ✅", nema: "Licensed ✅", county: "Approved ✅" },
      spatial: { alignment: "99.58%", drift: "0.42% [OK]", growth: "+6.0%" },
      forensics: { hash: "sha256:8f43ac7b9e1152a...", risk: "2.4% Stable" },
      fintech: { milestone: "Foundation Slab", amount: "KES 10,000,000.00" }
    });
    setView('DASHBOARD');
  };

  return (
    <div className="main-container" style={{ padding: '20px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#f4f7f9', minHeight: '100vh' }}>
      
      <style>{`
        @media print { .no-print { display: none !important; } .main-container { background: white !important; } .cert-mode { border: 2px solid #27ae60 !important; padding: 40px !important; } }
      `}</style>

      {/* PERSISTENT HEADER */}
      <header className="no-print" style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '3px solid #27ae60', paddingBottom: '10px' }}>
        <h1 style={{ margin: 0 }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#7f8c8d', margin: '5px 0' }}>National Sovereign Infrastructure | Dan Alwende, Principal Architect</p>
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => setView('LANDING')} style={{ marginRight: '10px', cursor: 'pointer' }}>Search</button>
          <button onClick={() => { setView('MAP'); handleSearch("GLOBAL_MAP"); }} style={{ cursor: 'pointer' }}>Regional Map View</button>
        </div>
      </header>

      {/* VIEW: LANDING / SEARCH */}
      {view === 'LANDING' && (
        <div className="no-print" style={{ maxWidth: '600px', margin: '100px auto', textAlign: 'center' }}>
          <h2>Verify Construction Integrity</h2>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <input 
              placeholder="Enter Project ID or Location..." 
              style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => handleSearch()} style={{ padding: '15px', background: '#2c3e50', color: 'white', border: 'none', borderRadius: '8px' }}>VERIFY</button>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#7f8c8d' }}>Don't have an ID? Use the <strong>Regional Map View</strong> above to browse the 10,000+ active projects.</p>
        </div>
      )}

      {/* VIEW: FULL CONSOLIDATED DASHBOARD */}
      {view === 'DASHBOARD' && result && (
        <div className="cert-mode" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* 1. REGULATORY & LEGAL (Restored) */}
          <div className="no-print" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', borderTop: '4px solid #e67e22' }}>
              <h5 style={{ margin: 0, color: '#d35400' }}>📜 REGULATORY</h5>
              <p style={{ fontSize: '0.8em' }}>NCA: {result.regulatory.nca}</p>
              <p style={{ fontSize: '0.8em' }}>NEMA: {result.regulatory.nema}</p>
            </div>
            {/* 2. SPATIAL & BIM (Restored) */}
            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', borderTop: '4px solid #3498db' }}>
              <h5 style={{ margin: 0, color: '#2980b9' }}>📐 SPATIAL SYNC</h5>
              <p style={{ fontSize: '0.8em' }}>BIM Sync: {result.spatial.alignment}</p>
              <p style={{ fontSize: '0.8em' }}>Drift: {result.spatial.drift}</p>
            </div>
            {/* 3. INGESTION (Restored) */}
            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', borderTop: '4px solid #7f8c8d' }}>
              <h5 style={{ margin: 0, color: '#7f8c8d' }}>📡 INGESTION</h5>
              <p style={{ fontSize: '0.8em' }}>Asset: {result.ingestion.asset}</p>
              <p style={{ fontSize: '0.8em' }}>Payload: {result.ingestion.payload}</p>
            </div>
            {/* 4. FORENSICS (Restored) */}
            <div style={{ background: '#2c3e50', color: 'white', padding: '15px', borderRadius: '10px' }}>
              <h5 style={{ margin: 0, color: '#f1c40f' }}>🛡️ FORENSICS</h5>
              <p style={{ fontSize: '0.7em' }}>Hash: {result.forensics.hash.substring(0, 16)}...</p>
              <p style={{ fontSize: '0.7em' }}>Risk: {result.forensics.risk}</p>
            </div>
          </div>

          {/* THE PRINTABLE CERTIFICATE LAYER */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #ddd' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid #27ae60', paddingBottom: '15px' }}>
              <h2 style={{ margin: 0, color: '#27ae60' }}>HATI YA UKAGUZI</h2>
              <p>Official Integrity Certificate: {result.id}</p>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <h4>💰 Financial Milestone</h4>
                <p>Authorized Payout: <strong>{result.fintech.amount}</strong></p>
                <button className="no-print" style={{ background: '#2c3e50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>EXECUTE TRANSFER</button>
              </div>
              <div style={{ textAlign: 'right' }}>
                <h4>📋 Legal Standing</h4>
                <p>Status: <strong>{result.regulatory.county}</strong></p>
                <button className="no-print" onClick={() => window.print()} style={{ background: '#27ae60', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>PRINT CERTIFICATE</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: REGIONAL MAP (Placeholder for Scaling) */}
      {view === 'MAP' && (
        <div style={{ maxWidth: '1200px', margin: '0 auto', background: '#fff', padding: '50px', borderRadius: '15px', textAlign: 'center' }}>
          <h2>Kenya National Construction Grid</h2>
          <div style={{ height: '400px', background: '#eef', border: '2px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            [ Interactive Regional Map: 10,000+ Projects Across 47 Counties ]
          </div>
          <p>Click on any marker to trigger <strong>Kagua Mjengo AI Audit</strong>.</p>
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
