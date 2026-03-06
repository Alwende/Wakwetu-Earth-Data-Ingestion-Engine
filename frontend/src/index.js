import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [driftDetected, setDriftDetected] = useState(true);

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Segoe UI, sans-serif', color: '#2c3e50', background: '#eef2f3', minHeight: '100vh' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5em', margin: 0 }}>🏗️ Kagua Mjengo na AI</h1>
        <p style={{ color: '#34495e', fontWeight: 'bold' }}>BIM-to-Orbital Digital Twin Synchronizer</p>
      </header>
      
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        {/* BIM Data Card */}
        <div style={{ background: 'white', padding: '25px', borderRadius: '15px', textAlign: 'left', borderTop: '5px solid #3498db' }}>
          <h3>📐 Permitted BIM Design</h3>
          <p><strong>Approved Area:</strong> 1,200 m²</p>
          <p><strong>Structural Height:</strong> 18.5m (Planned)</p>
          <p><strong>Zoning Limit:</strong> Residential/Commercial Mix</p>
          <div style={{ height: '100px', background: '#d6eaf8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2980b9' }}>
             [ DESIGN BLUEPRINT OVERLAY ]
          </div>
        </div>

        {/* Satellite Sync Card */}
        <div style={{ background: 'white', padding: '25px', borderRadius: '15px', textAlign: 'left', borderTop: '5px solid #e67e22' }}>
          <h3>🛰️ Orbital "As-Built" Audit</h3>
          <p><strong>Detected Area:</strong> 1,310 m²</p>
          <p><strong>Structural Drift:</strong> <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>+9.17% (EXCEEDED)</span></p>
          <p><strong>Status:</strong> CRITICAL DEVIATION</p>
          <div style={{ height: '100px', background: '#fef9e7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d35400' }}>
             [ SATELLITE RADIOMETRIC SYNC ]
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px', background: '#c0392b', color: 'white', padding: '20px', borderRadius: '12px', maxWidth: '900px', margin: '30px auto' }}>
        <h2 style={{ margin: 0 }}>🚨 ALERT: STRUCTURAL INTEGRITY RISK</h2>
        <p>Physical construction has deviated by 110 m² from the permitted design. Structural stability cannot be guaranteed.</p>
      </div>

      <footer style={{ marginTop: '50px', color: '#7f8c8d' }}>
        <p>Principal Architect: Dan Alwende | Venture Strategy: Engineering Excellence & Urban Safety</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
