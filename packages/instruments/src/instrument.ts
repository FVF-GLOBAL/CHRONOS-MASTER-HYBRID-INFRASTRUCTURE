export type InstrumentKind =
  | "equity"
  | "bond"
  | "government_security"
  | "secured_note"
  | "loan"
  | "mortgage_note"
  | "mortgage_bond"
  | "mortgage_backed_security"
  | "receivable"
  | "fund_interest"
  | "repo"
  | "other";

export type InstrumentStatus =
  | "draft"
  | "under_review"
  | "approved"
  | "issued"
  | "active"
  | "suspended"
  | "matured"
  | "redeemed"
  | "cancelled";

export type InstrumentRecord = {
  readonly instrumentId: string;
  readonly kind: InstrumentKind;
  readonly issuerEntityId: string;
  readonly currency: string;
  readonly faceAmountMinor: bigint;
  readonly effectiveDate: string;
  readonly maturityDate?: string;
  readonly status: InstrumentStatus;
  readonly governingLaw?: string;
  readonly termsEvidenceRef?: string;
  readonly ownershipEvidenceStatus: "unverified" | "under_review" | "verified_by_authorized_process";
  readonly lienStatus: "unknown" | "unperfected" | "perfection_pending" | "perfected_by_authorized_process";
};

export function validateInstrument(record: InstrumentRecord): void {
  if (!record.instrumentId.trim() || !record.issuerEntityId.trim()) throw new Error("instrument and issuer IDs required");
  if (record.faceAmountMinor <= 0n) throw new Error("face amount must be positive");
  if (record.maturityDate && record.maturityDate < record.effectiveDate) {
    throw new Error("maturity date must not precede effective date");
  }
  if (record.status === "issued" || record.status === "active") {
    if (record.ownershipEvidenceStatus !== "verified_by_authorized_process") {
      throw new Error("issuance blocked: ownership evidence has not been verified by an authorized process");
    }
  }
}
