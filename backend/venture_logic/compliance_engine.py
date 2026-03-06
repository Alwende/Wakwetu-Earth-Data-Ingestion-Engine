import json

def run_compliance_audit(historical_index, current_index, permit_database):
    print("--- Venture Audit: Initiating Change Detection ---")
    
    # Feature B: Multi-Temporal Change Detection
    # If current density > historical density, we have new construction.
    delta = current_index - historical_index
    is_new_construction = delta > 0.05
    
    # Feature A: Permit-to-Pixel Matcher
    # We check if the current region has a valid construction permit.
    has_valid_permit = permit_database.get("Nairobi_North_Sector", False)
    
    status = "COMPLIANT"
    if is_new_construction and not has_valid_permit:
        status = "CRITICAL_NON_COMPLIANCE"
    elif is_new_construction and has_valid_permit:
        status = "AUTHORIZED_DEVELOPMENT"

    audit_result = {
        "region": "Nairobi_North_Sector",
        "temporal_delta": round(delta, 3),
        "compliance_status": status,
        "recommendation": "Dispatch Physical Inspector" if status == "CRITICAL_NON_COMPLIANCE" else "Log Progress",
        "revenue_tier": "B2G_GOVERNANCE_SIGNAL"
    }
    
    return audit_result

if __name__ == "__main__":
    # Mock data for demonstration of the logic
    mock_permits = {"Nairobi_South_Sector": True, "Nairobi_North_Sector": False}
    result = run_compliance_audit(0.68, 0.74, mock_permits)
    print(json.dumps(result, indent=2))
