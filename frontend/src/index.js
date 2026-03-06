import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
    <h1>🌍 Wakwetu Earth-Data Engine</h1>
    <h2>Lead Architect: Dan Alwende</h2>
    <hr />
    <p>Project 11: Sovereign Ingestion & Discovery Layer</p>
    <div style={{ background: '#f4f4f4', padding: '20px', borderRadius: '10px' }}>
      <h3>Sovereign Asset Verified:</h3>
      <code>S2A_37MBU_20170119_0_L2A (207.9 MiB)</code>
    </div>
    <p>Status: 🟢 System Live & Discoverable via Athena SQL</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
