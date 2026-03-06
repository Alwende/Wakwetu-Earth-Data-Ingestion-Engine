import json

def validate_permits(region_id):
    # Simulated connection to Kenyan Regulatory Databases
    regulatory_registry = {
        "Nairobi_North_A12": {
            "NCA_Registration": "NCA-99283-B",
            "NEMA_EIA_License": "NEMA/EIA/PS/5521", # Environmental Clearance
            "County_Build_Permit": "NCC/PLN/2026/001",
            "Occupational_Safety": "OSHA-VERIFIED"
        }
    }
    
    permits = regulatory_registry.get(region_id, {})
    
    # Logic: All three core certs must exist for 'Green' status
    is_legal = all([permits.get('NCA_Registration'), permits.get('NEMA_EIA_License'), permits.get('County_Build_Permit')])
    
    return {
        "status": "VALIDATED" if is_legal else "RE_INSPECTION_REQUIRED",
        "certificates": permits,
        "missing": [k for k, v in permits.items() if not v]
    }

if __name__ == "__main__":
    print(json.dumps(validate_permits("Nairobi_North_A12"), indent=2))
