import { describe, expect, it } from "vitest";
import { transitionSettlement } from "../packages/settlement/src/state-machine.js";

describe("settlement state machine", () => {
  it("permits validated settlement to enter approval", () => {
    expect(transitionSettlement("validated", "awaiting_approval")).toBe("awaiting_approval");
  });
  it("rejects skipping approval and submission controls", () => {
    expect(() => transitionSettlement("created", "settled")).toThrow(/invalid settlement transition/);
  });
});
