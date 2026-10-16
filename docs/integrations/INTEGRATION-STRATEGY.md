# Integration Strategy

## Network adapter policy

Each adapter must have a unique configured network ID, environment classification, supported transaction types, finality model, rate limits, credential requirements, health checks, and explicit enablement. Reject unknown chain IDs, mismatched network IDs, unsupported assets, and unapproved destinations.

Initial candidates:
- Canton Network: privacy-aware institutional workflows; use only supported, documented interfaces.
- Hyperledger Besu: permissioned EVM workflows; configure consensus and finality assumptions explicitly.
- Additional EVM networks: enable only after per-network risk, legal, custody and operational review.
- DTCC Tokenization Service: treat as an external regulated market utility; no integration is possible without appropriate participant eligibility and authorized interfaces.
- Cash rails: begin with an interface and test harness, then add a provider only with formal sandbox access and validated ISO 20022 requirements.
- Custody/signing: HSM/KMS/MPC provider must be separately selected and assessed.
- Market data: licensed provider, source timestamp, market calendar, freshness limits, circuit breakers and audit record.

## Adapter release gates

1. Contract and schema tests.
2. Authentication and secret-handling review.
3. Network/tenant isolation tests.
4. Duplicate submission and timeout recovery.
5. Provider status reconciliation.
6. Rate-limit and outage tests.
7. Observability and alert routing.
8. Security and legal approval.
9. Explicit environment flag; production disabled by default.

Never make an adapter report `confirmed` because a request was accepted. Confirmations must come from verifiable provider evidence.
