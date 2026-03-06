import json

def evaluate_payment_release(sync_result, contract_value):
    print("--- Venture Audit: Evaluating Fiscal Milestone ---")
    
    # Logic: Only release funds if structural drift is < 5% 
    # and completion is verified.
    is_verified = sync_result['safety_status'] == "STRUCTURAL_ALIGNMENT_OK"
    
    payout_amount = 0
    if is_verified:
        # Releasing a 20% milestone payment
        payout_amount = contract_value * 0.20
        status = "PAYMENT_AUTHORIZED"
    else:
        status = "PAYMENT_HELD_FOR_DEVIATION"

    fiscal_result = {
        "milestone": "Foundation_Slab_Cast",
        "contract_status": status,
        "authorized_payout": f"KES {payout_amount:,.2f}",
        "reasoning": "Spatial verification matches BIM intent." if is_verified else "Structural drift exceeds safety threshold.",
        "notified_parties": ["Contractor_Admin", "Bank_Escrow_Node"]
    }
    
    return fiscal_result

if __name__ == "__main__":
    # Mocking a successful structural sync from our previous module
    mock_sync = {"safety_status": "STRUCTURAL_ALIGNMENT_OK"}
    result = evaluate_payment_release(mock_sync, 50000000) # 50M KES Contract
    print(json.dumps(result, indent=2))
