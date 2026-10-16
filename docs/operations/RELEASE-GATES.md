# Release Gates

## Gate 0 — Reproducible baseline
- Pin dependencies and runtime.
- CI runs typecheck, tests, lint, formatting and security scans.
- No disabled checks, hidden failures or skipped critical tests.

## Gate 1 — Persistence and ledger
- Database migrations reviewed.
- Atomic journal booking, unique idempotency constraints, isolation and concurrency verified.
- Backup/restore and disaster-recovery exercises pass.

## Gate 2 — Settlement
- All valid and invalid state transitions tested.
- Duplicate, delayed, reordered, rejected and ambiguous external events tested.
- DvP/PvP conditions are instrument- and network-specific; no generic claim of atomicity.

## Gate 3 — Provider integrations
- Contract tests and sandbox evidence retained.
- Production access separately approved.
- Health, reconciliation, monitoring, incident and rollback plans approved.

## Gate 4 — Security and legal
- Threat model reviewed.
- Penetration test and remediation verified.
- Legal and regulatory review for each asset class, jurisdiction and workflow.
- No assertion of title, lien perfection, securities status, bank acceptance or finality without authoritative evidence.

## Gate 5 — Controlled launch
- Feature flags default off for new networks and high-risk workflows.
- Limits, allowlists, monitoring, escalation and kill switches tested.
- Release artifacts and SBOM retained.
