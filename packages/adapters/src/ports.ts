import type { FinalityStatus } from "../../domain-kernel/src/types.js";

export type SubmitTransactionRequest = {
  readonly idempotencyKey: string;
  readonly networkId: string;
  readonly payload: unknown;
  readonly correlationId: string;
};

export type SubmitTransactionResult = {
  readonly providerReference: string;
  readonly status: FinalityStatus;
  readonly observedAt: string;
  readonly evidence?: { readonly txHash?: string; readonly blockHeight?: string };
};

export interface LedgerNetworkAdapter {
  readonly adapterId: string;
  readonly networkId: string;
  submit(request: SubmitTransactionRequest): Promise<SubmitTransactionResult>;
  getStatus(providerReference: string): Promise<SubmitTransactionResult>;
  healthCheck(): Promise<{ readonly reachable: boolean; readonly checkedAt: string; readonly details?: string }>;
}

export interface CashRailAdapter {
  readonly adapterId: string;
  submitPayment(request: {
    readonly idempotencyKey: string;
    readonly debtorReference: string;
    readonly creditorReference: string;
    readonly currency: string;
    readonly amountMinor: bigint;
    readonly remittanceReference: string;
  }): Promise<{ readonly providerReference: string; readonly status: "pending" | "confirmed" | "rejected" }>;
}

export interface SigningProvider {
  sign(request: {
    readonly payloadHash: string;
    readonly authorizationId: string;
    readonly approvalReferences: readonly string[];
  }): Promise<{ readonly signatureReference: string; readonly signedPayload: string }>;
}

// Intentionally no fake implementation. A provider adapter must be separately implemented,
// credentialed, contract-tested, monitored, and explicitly enabled by configuration.
