import { describe, expect, it } from "vitest";
import { validateInstrument, type InstrumentRecord } from "../packages/instruments/src/instrument.js";

const base: InstrumentRecord = {
  instrumentId: "note-1", kind: "secured_note", issuerEntityId: "issuer-1", currency: "USD",
  faceAmountMinor: 100_000_000n, effectiveDate: "2026-10-16", status: "issued",
  ownershipEvidenceStatus: "unverified", lienStatus: "unknown"
};

describe("instrument controls", () => {
  it("blocks issuance when ownership evidence is unverified", () => {
    expect(() => validateInstrument(base)).toThrow(/issuance blocked/);
  });
  it("accepts a draft with positive face amount", () => {
    expect(() => validateInstrument({ ...base, status: "draft" })).not.toThrow();
  });
});
