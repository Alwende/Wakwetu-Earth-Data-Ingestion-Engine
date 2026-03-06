import json
import sys

class KaguaValidator:
    def __init__(self):
        # The National Registry of Projects
        self.registry = {
            "AF-HOUSING-001": {
                "nca_status": "VALID",
                "nema_status": "VALID",
                "county_permit": "APPROVED",
                "risk_score": 0.024,
                "structural_drift": 0.0042
            },
            "PVT-MOMBASA-099": {
                "nca_status": "EXPIRED",
                "nema_status": "VALID",
                "county_permit": "SUSPENDED",
                "risk_score": 0.45,
                "structural_drift": 0.12
            }
        }

    def check_id(self, project_id):
        project_id = project_id.upper().strip()
        data = self.registry.get(project_id)
        
        if data:
            return {"status": "SUCCESS", "data": data}
        return {"status": "ERROR", "message": "Project ID not found in National Registry."}

if __name__ == "__main__":
    validator = KaguaValidator()
    # If an argument is passed, check it; otherwise, list registry keys
    if len(sys.argv) > 1:
        print(json.dumps(validator.check_id(sys.argv[1]), indent=2))
    else:
        print(f"Registry initialized with {len(validator.registry)} projects.")
