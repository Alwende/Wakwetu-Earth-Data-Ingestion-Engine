import json

class NairobiProjectRegistry:
    def __init__(self):
        # This simulates real data variance across Nairobi sub-counties
        self.registry = {
            "KASARANI-B12": {
                "name": "Kasarani Mixed Use",
                "status": "CEASE_AND_DESIST",
                "structural_drift": "4.82% [CRITICAL]",
                "risk_horizon": "88% Failure Probability",
                "payout_status": "FROZEN",
                "nca_clearance": "REVOKED - SITE UNSAFE",
                "environmental_impact": "NON-COMPLIANT"
            },
            "PARKLANDS-A01": {
                "name": "Parklands Affordable Housing",
                "status": "APPROVED",
                "structural_drift": "0.42% [OPTIMAL]",
                "risk_horizon": "1.2% Stable",
                "payout_status": "AUTHORIZED: KES 15,400,000.00",
                "nca_clearance": "VALID",
                "environmental_impact": "VERIFIED"
            }
        }

    def get_audit(self, project_id):
        return self.registry.get(project_id.upper(), {
            "status": "INSPECTION_REQUIRED",
            "message": "Project ID not recognized in current orbital sweep."
        })

if __name__ == "__main__":
    registry = NairobiProjectRegistry()
    # Test a high-risk decision influence
    print("AUDIT RESULT FOR KASARANI-B12:")
    print(json.dumps(registry.get_audit("KASARANI-B12"), indent=2))
