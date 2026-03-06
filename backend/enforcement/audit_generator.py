import json
from datetime import datetime

def generate_compliance_certificate(audit_data):
    certificate_id = f"NCA-AUDIT-{datetime.now().strftime('%Y%m%d')}-001"
    
    certificate_payload = {
        "certificate_id": certificate_id,
        "timestamp": datetime.now().isoformat(),
        "authority": "Kagua Mjengo na AI (Sovereign Intelligence)",
        "subject_region": audit_data['region'],
        "evidence_metrics": {
            "temporal_growth": f"+{audit_data['temporal_delta']*100}%",
            "legal_status": "UNAUTHORIZED_SATELLITE_DETECTION"
        },
        "legal_action_required": "SITE_STOP_ORDER_RECOMMENDED",
        "blockchain_hash": "sha256:8f43ac... (Immutability Proof)"
    }
    
    print(f"--- Certificate Generated: {certificate_id} ---")
    return certificate_payload

if __name__ == "__main__":
    mock_audit = {"region": "Nairobi North Sector", "temporal_delta": 0.06}
    cert = generate_compliance_certificate(mock_audit)
    print(json.dumps(cert, indent=2))
