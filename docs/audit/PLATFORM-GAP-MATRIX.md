# Platform Gap Matrix

Status values: `implemented-and-tested`, `implemented-but-unverified`, `partial`, `missing`, `blocked`, `not-applicable`.

This initial repository is a scaffold. Unless a test exists and has actually been run in CI, treat capability status as `partial` or `missing`.

| Capability | Target | Initial status | Evidence required |
|---|---|---|---|
| Double-entry ledger | Balanced postings per currency, transactional booking, idempotency | partial | Database-backed posting tests, concurrency and rollback tests |
| Settlement orchestration | Explicit state machine, DvP/PvP coordination, recovery | partial | Adapter contract tests, fault injection, end-to-end reconciliation |
| Canton | Permissioned privacy-aware ledger adapter | missing | Environment, SDK compatibility, contract tests, transaction evidence |
| Hyperledger Besu | Permissioned EVM adapter and finality monitoring | missing | Network config, RPC auth, chain ID checks, finality/reorg tests |
| Other EVM networks | Explicit allowlist and per-network policy | missing | Network-by-network security and operational approval |
| Banking rails | ISO 20022 boundary and provider adapters | missing | Provider sandbox, message validation, reconciliation and authorization evidence |
| DTCC/DTC | Authorized participant integration only | blocked | Formal eligibility, access, commercial/legal arrangements, documented API/interface |
| Tokenization | Issuance, transfer rules, redemption and servicing | partial | Instrument-specific standards and lifecycle tests |
| Debt instruments | Loans, secured notes, bonds, receivables | partial | Versioned terms, cash flows, authority, legal review |
| Mortgages | Note, lien, servicing and collateral references | partial | Jurisdiction-specific title/lien evidence, recording and servicing validation |
| Mortgage-backed instruments | Pooling, waterfall and investor reporting | missing | Pool eligibility, cash-flow engine validation, disclosures and legal structure |
| Repo | Collateralized funding, substitutions, maturity and closeout | missing | Haircuts, margin, collateral availability, settlement and closeout tests |
| Collateral engine | Eligibility, freshness, haircuts, encumbrance, release | partial | Independent price sources, limits, stress tests, audit evidence |
| Market data | Source provenance, freshness and fail-closed policy | missing | Licensed provider, stale-data tests, fallback and circuit breakers |
| Identity/compliance | KYC/KYB, sanctions, AML workflows | missing | Authorized provider integrations, case audit and privacy review |
| HSM/KMS/MPC | Key custody and controlled signing | missing | Real approved key boundary, key ceremony and recovery test |
| Audit evidence | Append-only storage and verifiable chain | partial | Storage controls, independent verification, tamper tests |
| Operations | Monitoring, alerting, incident and DR | missing | Runbooks, SLOs, restore tests, security exercise |

## Research baseline

- DTCC Tokenization Service materials identify eligible DTC-custodied assets and planned initial Canton/Besu connectivity; this does not confer DTCC access or approval on this project.
- Broadridge DLX is a market reference for multi-chain tokenization and institutional workflow orchestration.
- Broadridge DLR is a reference for repo, collateral mobility and atomic settlement.
- Lynq's October 2026 proof of concept is a reference for institutional stablecoin settlement workflows.
- These products are market benchmarks, not evidence that CHRONOS is connected to them.
