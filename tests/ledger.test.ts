import { describe, expect, it } from "vitest";
import { validateBalancedJournal } from "../packages/ledger/src/ledger.js";

describe("double-entry ledger invariants", () => {
  it("accepts a balanced journal per currency", () => {
    expect(() => validateBalancedJournal({
      journalId: "j-1", idempotencyKey: "idem-1", effectiveAt: "2026-10-16T00:00:00Z",
      description: "test transfer",
      postings: [
        { accountId: "cash", currency: "USD", amountMinor: 1000n, direction: "debit" },
        { accountId: "client-liability", currency: "USD", amountMinor: 1000n, direction: "credit" }
      ]
    })).not.toThrow();
  });

  it("rejects an unbalanced journal", () => {
    expect(() => validateBalancedJournal({
      journalId: "j-2", idempotencyKey: "idem-2", effectiveAt: "2026-10-16T00:00:00Z",
      description: "bad transfer",
      postings: [
        { accountId: "cash", currency: "USD", amountMinor: 1000n, direction: "debit" },
        { accountId: "client-liability", currency: "USD", amountMinor: 999n, direction: "credit" }
      ]
    })).toThrow(/unbalanced/);
  });
});
