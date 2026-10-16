export type CollateralPosition = {
  readonly positionId: string;
  readonly ownerEntityId: string;
  readonly assetReference: string;
  readonly valuationCurrency: string;
  readonly marketValueMinor: bigint;
  readonly haircutBps: number;
  readonly encumberedAmountMinor: bigint;
  readonly valuationAsOf: string;
  readonly valuationSource: string;
  readonly eligibilityStatus: "unknown" | "eligible" | "ineligible" | "manual_review";
};

export function eligibleValueMinor(position: CollateralPosition, now: Date, maxAgeMs: number): bigint {
  if (position.eligibilityStatus !== "eligible") throw new Error("collateral is not eligible");
  if (!Number.isInteger(position.haircutBps) || position.haircutBps < 0 || position.haircutBps > 10_000) {
    throw new Error("haircutBps must be between 0 and 10000");
  }
  if (position.marketValueMinor < 0n || position.encumberedAmountMinor < 0n) {
    throw new Error("valuation and encumbrance must not be negative");
  }
  const asOf = Date.parse(position.valuationAsOf);
  if (!Number.isFinite(asOf) || now.getTime() - asOf > maxAgeMs || asOf > now.getTime()) {
    throw new Error("collateral valuation is stale or invalid");
  }
  const unencumbered = position.marketValueMinor > position.encumberedAmountMinor
    ? position.marketValueMinor - position.encumberedAmountMinor
    : 0n;
  return (unencumbered * BigInt(10_000 - position.haircutBps)) / 10_000n;
}
