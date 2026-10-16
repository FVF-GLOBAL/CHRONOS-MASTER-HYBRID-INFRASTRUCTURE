# Threat Model and Required Controls

## Assets to protect
- Ledger integrity and client/account separation.
- Signing keys and transaction authorization.
- Instrument terms, ownership and lien evidence.
- Personal and beneficial-ownership data.
- Provider credentials, settlement instructions and payment messages.
- Audit evidence, reconciliation results and deployment credentials.

## Threats
- Duplicate or replayed settlement commands.
- Unauthorized issuance, transfer, redemption, pledge or release.
- Compromised signing credentials or privileged account.
- Stale or manipulated market data.
- Cross-tenant data leakage.
- Chain reorganization or provider status inconsistency.
- Double pledge, stale collateral, incorrect haircut or double counting.
- Dependency compromise, secret leakage, malicious deployment.
- Audit log alteration or evidence substitution.

## Required controls
- Least privilege, MFA, service identities, short-lived credentials and secret manager.
- Maker-checker approval with independent actors; no self-approval.
- Idempotency constraints and transaction-level concurrency controls.
- Policy checks before signing and again before submission where needed.
- Allowlisted networks, assets, counterparties, contract addresses and destinations.
- Freshness and provenance checks on valuations and compliance data.
- Append-only audit store with independently verifiable integrity.
- Dependency scanning, SBOM, code scanning, secret scanning and signed release artifacts.
- Network segmentation, encryption in transit/at rest, backup protection and tested recovery.
- Independent penetration testing and smart-contract review where applicable.

## Explicit exclusions
No code in this scaffold should be treated as a custody service, bank, broker-dealer, transfer agent, qualified custodian, mortgage servicer, legal opinion, or guarantee of regulatory compliance.
