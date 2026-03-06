import json

class RegulatoryValidator:
    def __init__(self):
        # Database of thousands of registered Kenyan projects
        self.registry = {
            "AF-HOUSING-001": {"NCA": "VALID", "NEMA": "VALID", "COUNTY": "APPROVED"},
            "PVT-DEV-099": {"NCA": "VALID", "NEMA": "EXPIRED", "COUNTY": "APPROVED"}
        }

    def verify_legal_standing(self, project_id):
        status = self.registry.get(project_id, {"NCA": "MISSING", "NEMA": "MISSING", "COUNTY": "PENDING"})
        is_legal = all(v == "VALID" or v == "APPROVED" for v in status.values())
        
        return {
            "project_id": project_id,
            "legal_standing": "AUTHORIZED" if is_legal else "CEASE_AND_DESIST",
            "agency_status": status
        }

if __name__ == "__main__":
    v = RegulatoryValidator()
    print(json.dumps(v.verify_legal_standing("AF-HOUSING-001"), indent=2))
