# Domain Model

## Core aggregates
- `Instrument`: versioned legal/economic terms and lifecycle state.
- `Settlement`: immutable command identity, legs, state, approvals, provider references and reconciliation evidence.
- `JournalEntry`: balanced postings per currency, booked atomically.
- `CollateralPosition`: asset reference, valuation provenance, eligibility, haircut and encumbrance.
- `Approval`: actor, action, resource, time, policy version and evidence.
- `AuditEvent`: append-only event with correlation ID and integrity digest.

## Critical invariants
1. A journal must balance per currency.
2. An idempotency key cannot be reused for a different business command.
3. No high-risk execution without required independent approvals.
4. No collateral credit from stale, missing, future-dated, ineligible or over-encumbered valuations.
5. No settlement is marked complete solely because an adapter accepted a submission.
6. External status updates are deduplicated and correlated to the originating command.
7. Instrument lifecycle actions require authorized transitions and sufficient evidence.
8. Technical finality, cash status, and legal finality remain distinct fields.
9. Corrections use compensating entries/events, not silent history edits.
10. Provider outages and ambiguous outcomes route to retry or manual review, never guessed success.
