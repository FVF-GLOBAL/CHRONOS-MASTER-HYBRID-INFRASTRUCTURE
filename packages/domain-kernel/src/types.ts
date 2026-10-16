export type Brand<T, Name extends string> = T & { readonly __brand: Name };

export type EntityId = Brand<string, "EntityId">;
export type InstrumentId = Brand<string, "InstrumentId">;
export type SettlementId = Brand<string, "SettlementId">;
export type LedgerAccountId = Brand<string, "LedgerAccountId">;
export type MoneyMinor = Brand<bigint, "MoneyMinor">;

export type CurrencyCode = string & { readonly __currencyCode: unique symbol };
export type NetworkId = string & { readonly __networkId: unique symbol };

export type EvidenceRef = {
  readonly evidenceId: string;
  readonly sha256: string;
  readonly mediaType: string;
  readonly createdAt: string;
  readonly storageUri?: string;
};

export type FinalityStatus =
  | "unknown"
  | "submitted"
  | "confirmed"
  | "rejected"
  | "reorged"
  | "expired";

export type LegalFinalityStatus =
  | "not_assessed"
  | "pending_review"
  | "confirmed_by_authorized_process"
  | "disputed"
  | "not_applicable";

export function assertNonEmpty(value: string, field: string): void {
  if (value.trim().length === 0) throw new Error(`${field} must not be empty`);
}
