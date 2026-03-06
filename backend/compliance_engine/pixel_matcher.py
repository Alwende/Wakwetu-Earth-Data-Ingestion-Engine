import json

def calculate_audit(zone_id):
    # Simulated Regional Data Lake for Nairobi
    # This ensures searching "KASARANI" vs "PARKLANDS" gives different outcomes
    registry = {
        "KASARANI": {
            "permit_sqm": 1200, 
            "satellite_sqm": 1550, 
            "status": "CRITICAL: ILLEGAL EXTENSION",
            "payout_multiplier": 0,
            "color": "#c0392b"
        },
        "PARKLANDS": {
            "permit_sqm": 1000, 
            "satellite_sqm": 998, 
            "status": "COMPLIANT",
            "payout_multiplier": 48000,
            "color": "#27ae60"
        }
    }
    
    site = registry.get(zone_id.upper())
    if not site:
        return {"status": "ILLEGAL / NO PERMIT", "payout": 0, "color": "#c0392b", "drift": "N/A"}
        
    variance = (site['satellite_sqm'] - site['permit_sqm']) / site['permit_sqm']
    payout = site['satellite_sqm'] * site['payout_multiplier']
    
    return {
        "status": site['status'],
        "payout": payout,
        "drift": f"{round(variance * 100, 2)}%",
        "color": site['color']
    }

if __name__ == "__main__":
    import sys
    # Use: python backend/compliance_engine/pixel_matcher.py KASARANI
    zone = sys.argv[1].upper() if len(sys.argv) > 1 else "KASARANI"
    print(json.dumps(calculate_audit(zone), indent=2))
