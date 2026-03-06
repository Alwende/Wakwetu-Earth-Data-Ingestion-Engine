import hashlib
import json
from datetime import datetime

def secure_audit_record(audit_result):
    # Create a unique string representing the audit state
    record_string = json.dumps(audit_result, sort_keys=True)
    
    # Generate a SHA-256 Hash (The Forensic Fingerprint)
    evidence_hash = hashlib.sha256(record_string.encode()).hexdigest()
    
    forensic_entry = {
        "event": "LEGAL_STOP_ORDER_ISSUED",
        "hash": evidence_hash,
        "metadata": audit_result,
        "integrity_check": "VERIFIED_BY_KAGUA_MJENGO_CORE"
    }
    
    print(f"--- Forensic Hash Generated: {evidence_hash[:16]}... ---")
    return forensic_entry

if __name__ == "__main__":
    mock_audit = {"region": "Nairobi North Sector", "delta": 0.06, "status": "NON_COMPLIANT"}
    entry = secure_audit_record(mock_audit)
    print(json.dumps(entry, indent=2))
