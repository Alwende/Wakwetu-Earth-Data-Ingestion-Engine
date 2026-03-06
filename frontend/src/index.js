import React from 'react';
import ReactDOM from 'react-dom/client';

const IntelligenceReport = ({ data }) => (
  <div style={{ background: '#eef2f3', padding: '15.px', borderRadius: '8px', borderLeft: '5px solid #2980b9', marginTop: '20px', textAlign: 'left' }}>
    <h3 style={{ color: '#2c3e50', marginTop: 0 }}>🧠 Analytical Elicitation: AI Report</h3>
    <p><strong>Target Region:</strong> {data.region}</p>
    <p><strong>Urban Density Index:</strong> {data.urban_density_index}</p>
    <p><strong>Vegetation Cover:</strong> {data.vegetation_cover_pct}</p>
    <p style={{ color: '#c0392b', fontWeight: 'bold' }}>⚠️ Anomalies: {data.detected_anomalies.join(", ")}</p>
    <p style={{ fontSize: '0.8em', color: '#7f8c8d' }}>Confidence: {data.inference_confidence} | Auditor: {data.architect_audit_status}</p>
  </div>
);

const App = () => {
  const mockAIResponse = {
    region: "Nairobi Metropolitan (S2A_37MBU)",
    urban_density_index: 0.74,
    vegetation_cover_pct: "22%",
    detected_anomalies: ["Unsanctioned Construction Zone Detected - North Sector"],
    inference_confidence: "91.4%",
    architect_audit_status: "VERIFIED_BY_ALWENDE"
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Segoe UI, Arial' }}>
      <h1>🌍 Wakwetu Earth-Data Engine</h1>
      <p><strong>Principal Architect:</strong> Dan Alwende</p>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ background: '#27ae60', color: 'white', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
          🟢 SYSTEM LIVE: Sovereign Ingestion Active
        </div>
        <IntelligenceReport data={mockAIResponse} />
        <hr />
        <p style={{ fontSize: '0.9em' }}>
          <strong>Verified Asset:</strong> <code>S2A_37MBU_20170119_0_L2A</code> (207.9 MiB)
        </p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
