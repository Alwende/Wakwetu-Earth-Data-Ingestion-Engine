import json

class SovereignComplianceLens:
    def __init__(self):
        # Official Database of Approved Permits (NCA & County Planning)
        self.permit_registry = {
            "ZONE_A12": {"permit_id": "NCC-2026-001", "authorized_sqm": 1200, "status": "APPROVED"},
            "ZONE_B05": {"permit_id": "NCC-2026-044", "authorized_sqm": 800, "status": "APPROVED"}
        }

    def detect_anomaly(self, zone_id, current_sqm_from_satellite):
        permit = self.permit_registry.get(zone_id)

        if not permit:
            return {
                "signal": "CRITICAL_ANOMALY",
                "message": f"Illegal Construction Detected in {zone_id}. No permit on file.",
                "action": "ISSUE_STOP_ORDER_IMMEDIATELY",
                "severity": "HIGH"
            }

        deviation = current_sqm_from_satellite - permit['authorized_sqm']

        if deviation > 50:
            return {
                "signal": "REGULATORY_DRIFT",
                "message": f"Structure exceeds permitted footprint by {deviation}sqm.",
                "action": "RE-INSPECTION_REQUIRED",
                "severity": "MEDIUM"
            }

        return {
            "signal": "COMPLIANT", 
            "message": "As-Built aligns with Permit.", 
            "action": "AUTHORIZE_PAYMENT",
            "severity": "NONE"
        }

if __name__ == "__main__":
    engine = SovereignComplianceLens()
    # Scenario: High-Risk construction in Zone C03 (No permit)
    print(json.dumps(engine.detect_anomaly("ZONE_C03", 500), indent=2))
