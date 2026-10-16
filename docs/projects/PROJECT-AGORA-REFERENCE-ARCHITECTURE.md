# Project Agorá Reference Architecture

**Reference reviewed:** BIS Project Agorá report and media release, 27 May 2026.  
**Official project page:** https://www.bis.org/project/agora  
**Report:** https://www.bis.org/publications/project-agora-shared-programmable-platform-wholesale-cross-border-payments

## Relevance to CHRONOS

Project Agorá is a BIS/IIF public-private collaboration exploring a multi-currency shared programmable platform for wholesale cross-border payments. Its published prototype demonstrates a design combining tokenized commercial-bank deposits with tokenized central-bank reserves, with atomic settlement across currencies and privacy controls.

This is a reference architecture, not a public network endpoint or an available CHRONOS integration. Do not claim participation, connectivity, access to central-bank money, or production settlement capability.

## Design patterns to evaluate

- Coordinated, all-or-nothing settlement across multiple currency legs.
- Separation between commercial-bank deposit representations and central-bank reserve settlement.
- Jurisdiction-specific control over central-bank reserves.
- Programmable validation, compliance conditions and conditional payment triggers.
- Privacy boundaries that expose transaction data only to authorized parties.
- Liquidity reservation and validation before execution.
- Explicit settlement evidence and reconciliation across domains.

## Proposed CHRONOS implementation boundary

Introduce a `WholesaleCrossBorderCoordinator` domain service that depends on explicit interfaces:

- `CurrencyLegValidator`
- `LiquidityReservationPort`
- `InstitutionalDepositLedgerPort`
- `CentralBankSettlementPort` (interface only unless an authorized implementation exists)
- `ComplianceDecisionPort`
- `AtomicSettlementCoordinator`
- `PrivacyPolicyPort`
- `SettlementEvidencePort`

The coordinator must fail closed if any required leg is unsupported, liquidity cannot be reserved, compliance is unresolved, or a provider returns an ambiguous outcome. It must not simulate central-bank reserve access in a production environment.

## Minimum tests

- All legs commit, or the workflow enters an explicitly defined safe recovery state.
- No duplicate payment from retries or replayed provider events.
- Currency, amount, party, and jurisdiction constraints are validated before reservation.
- A timeout is not interpreted as success or failure without authoritative status evidence.
- Confidential data is not leaked across counterparty or jurisdiction boundaries.
- Reconciliation identifies mismatched or missing legs.
- Every decision is correlated to a policy version and audit evidence.

## Source status

BIS describes the prototype as demonstrating feasibility and says further testing, including real-value transactions involving certain currencies and participants, is intended. Treat this as an evolving project and re-check official publications before implementing against it.
