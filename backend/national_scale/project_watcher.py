import json

class KaguaNationalEngine:
    def __init__(self):
        # This mocks a database of thousands of projects across Kenya
        self.active_projects = {
            "PROJECT_NRB_001": {"coords": "-1.286, 36.817", "county": "Nairobi", "status": "Active"},
            "PROJECT_MSA_052": {"coords": "-4.043, 39.668", "county": "Mombasa", "status": "Pending_NEMA"},
            "PROJECT_KIS_012": {"coords": "-0.091, 34.767", "county": "Kisumu", "status": "Active"}
        }

    def trigger_orbital_scan(self, project_id):
        project = self.active_projects.get(project_id)
        if not project:
            return "Project Not Found"
        
        # Simulating the transition from Ingestion to Risk Analysis
        return {
            "project_id": project_id,
            "location": project['coords'],
            "county": project['county'],
            "orbital_sync": "SUCCESSFUL",
            "compliance_signal": "GREEN" if project['status'] == "Active" else "HOLD_LEGAL"
        }

if __name__ == "__main__":
    engine = KaguaNationalEngine()
    print(json.dumps(engine.trigger_orbital_scan("PROJECT_NRB_001"), indent=2))
