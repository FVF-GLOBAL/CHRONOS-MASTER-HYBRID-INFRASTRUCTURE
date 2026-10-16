# Control Matrix

| Control | Required behavior | Verification |
|---|---|---|
| Identity | Strong service and user identity; MFA for privileged actions | Authentication tests, access review |
| Authorization | Deny by default; resource and action scoped | Negative tests for every sensitive endpoint |
| Maker-checker | Approver distinct from initiator; quorum enforced | Self-approval and duplicate-actor tests |
| Ledger | Double-entry, per-currency balancing, atomic commit | Property and concurrency tests |
| Idempotency | Same key + same command returns same outcome; key reuse with different command rejected | Replay tests |
| Signing | External HSM/KMS/MPC boundary; signing after policy approval | Key custody review and controlled test |
| Market data | Provenance, freshness, source failover, circuit breaker | Stale/missing/manipulated input tests |
| Settlement | Explicit states; unknown outcomes are not success | Timeout, reorg, partial-leg and outage tests |
| Collateral | Eligibility, haircuts, encumbrance and freshness checks | Double-pledge and stale-price tests |
| Audit | Append-only event storage, digest verification | Tamper and deletion detection tests |
| Secrets | Secret manager; no committed credentials | Secret scanning and deployment review |
| Recovery | Backups, restore, RTO/RPO and incident playbooks | Witnessed recovery exercise |
