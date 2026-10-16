import { describe, expect, it } from "vitest";
import { eligibleValueMinor } from "../packages/collateral/src/collateral.js";

describe("collateral valuation controls", () => {
  it("applies haircut to unencumbered value", () => {
    const result = eligibleValueMinor({
      positionId: "p-1", ownerEntityId: "e-1", assetReference: "UST-1",
      valuationCurrency: "USD", marketValueMinor: 1_000_000n, haircutBps: 500,
      encumberedAmountMinor: 100_000n, valuationAsOf: "2026-10-16T10:00:00Z",
      valuationSource: "test-fixture", eligibilityStatus: "eligible"
    }, new Date("2026-10-16T10:01:00Z"), 300_000);
    expect(result).toBe(855_000n);
  });
  it("fails closed on stale valuation", () => {
    expect(() => eligibleValueMinor({
      positionId: "p-1", ownerEntityId: "e-1", assetReference: "UST-1",
      valuationCurrency: "USD", marketValueMinor: 1_000_000n, haircutBps: 500,
      encumberedAmountMinor: 0n, valuationAsOf: "2026-10-16T10:00:00Z",
      valuationSource: "test-fixture", eligibilityStatus: "eligible"
    }, new Date("2026-10-16T11:00:00Z"), 300_000)).toThrow(/stale/);
  });
});
