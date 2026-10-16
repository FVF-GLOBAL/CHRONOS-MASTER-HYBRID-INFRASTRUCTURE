export type SettlementState =
  | "created"
  | "validated"
  | "awaiting_approval"
  | "approved"
  | "submitted"
  | "asset_leg_confirmed"
  | "cash_leg_confirmed"
  | "reconciling"
  | "settled"
  | "rejected"
  | "failed"
  | "manual_review"
  | "cancelled";

const transitions: Readonly<Record<SettlementState, readonly SettlementState[]>> = {
  created: ["validated", "rejected", "cancelled"],
  validated: ["awaiting_approval", "rejected", "cancelled"],
  awaiting_approval: ["approved", "rejected", "manual_review"],
  approved: ["submitted", "cancelled", "manual_review"],
  submitted: ["asset_leg_confirmed", "cash_leg_confirmed", "failed", "manual_review"],
  asset_leg_confirmed: ["cash_leg_confirmed", "reconciling", "failed", "manual_review"],
  cash_leg_confirmed: ["asset_leg_confirmed", "reconciling", "failed", "manual_review"],
  reconciling: ["settled", "failed", "manual_review"],
  settled: [],
  rejected: [],
  failed: ["manual_review"],
  manual_review: ["reconciling", "cancelled"],
  cancelled: []
};

export function transitionSettlement(from: SettlementState, to: SettlementState): SettlementState {
  if (!transitions[from].includes(to)) {
    throw new Error(`invalid settlement transition: ${from} -> ${to}`);
  }
  return to;
}

export type SettlementRecord = {
  readonly id: string;
  readonly idempotencyKey: string;
  readonly assetNetwork: string;
  readonly cashRail: string;
  readonly state: SettlementState;
  readonly technicalFinality: "unknown" | "pending" | "confirmed" | "rejected" | "reorged";
  readonly cashStatus: "unknown" | "pending" | "confirmed" | "rejected";
  readonly legalFinality: "not_assessed" | "pending_review" | "confirmed_by_authorized_process" | "disputed";
};
