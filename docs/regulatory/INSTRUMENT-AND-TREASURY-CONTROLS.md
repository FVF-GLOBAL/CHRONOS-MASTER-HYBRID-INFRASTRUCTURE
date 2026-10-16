# Instrument, Treasury and Digital-Asset Control Requirements

## Distinct asset and money categories

The registry must distinguish at least:
- Direct U.S. Treasury securities and other sovereign securities.
- Tokenized representations of Treasury securities.
- Commercial-bank deposits and any authorized tokenized-deposit representation.
- Payment stablecoins and their issuer/reserve/redemption arrangements.
- Central-bank reserves, which are not equivalent to a commercial stablecoin.
- Loans, secured notes, bonds, mortgage notes, mortgage-backed securities, receivables and repo positions.

A token identifier alone does not establish legal ownership of the referenced asset, a security interest, perfection, redemption rights, or access to central-bank settlement.

## Treasury workflows

- Instrument master data and authoritative identifier provenance.
- Coupon, maturity, accrued interest, amortization and redemption schedules where applicable.
- Trade capture, settlement instructions and confirmation status.
- Collateral eligibility, haircut, concentration and encumbrance.
- Repo opening leg, collateral movement, rate/term, margin, substitution and closing leg.
- Reconciliation against authorized custodians, counterparties and service providers.
- Audit evidence for amendments, corporate actions and lifecycle events.

## Stablecoin and deposit workflows

- Issuer and legal status verification.
- Supported network/contract allowlists.
- Redemption and transfer policy.
- Reserve/attestation evidence where legally and contractually available.
- Sanctions and transaction-monitoring controls.
- Network finality, issuer/payment status and internal accounting recorded separately.
- No claim that a stablecoin is a bank deposit, legal tender, insured deposit or cash equivalent without instrument-specific analysis and applicable authority.

## Model and valuation controls

- Track source, timestamp, currency, market calendar, confidence and permitted use for each price.
- Fail closed on missing or stale valuations for collateral and risk decisions.
- Version haircut models and record approvals.
- Stress test rate, spread, liquidity, issuer, settlement and concentration risk.
- Separate model output from approved business decision and human override evidence.

## Release gates

Do not enable production issuance, trading, collateral pledging, repo or mortgage-backed workflows until:
- Authoritative data sources and legal terms are verified.
- All required roles, approvals and controls are implemented.
- Ledger, lifecycle, reconciliation and exception tests pass.
- Provider access and participant eligibility are documented.
- Qualified legal and compliance review is complete.
