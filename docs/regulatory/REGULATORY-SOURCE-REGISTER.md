# Regulatory Source Register

**Purpose:** Maintain a source-linked, versioned inventory of official publications relevant to CHRONOS. This register is not legal advice and does not itself establish compliance.

Review official source pages before each release. Record publication date, effective date, proposal/final/withdrawn status, affected product domain, owner, implementation mapping and evidence of review.

| Source | Reference | Initial relevance | Implementation handling |
|---|---|---|---|
| Federal Reserve — Guidance & Supervision | https://www.federalreserve.gov/publications/guidance-and-supervision.htm | Bank supervision, examination manuals, safety and soundness | Map relevant control themes to policy, audit, risk and operational evidence; do not label the platform “Fed approved” |
| Federal Reserve — 2026 Supervision & Regulation Letters | https://www.federalreserve.gov/supervisionreg/srletters/2026.htm | Current supervisory letters, including model-risk and digital-credential material | Track each letter's scope and applicability; maintain source date and reviewer |
| Federal Reserve — crypto/dollar-token guidance withdrawal, 24 Apr 2025 | https://www.federalreserve.gov/newsevents/pressreleases/bcreg20250424a.htm | Historical crypto-asset and dollar-token supervisory guidance status | Mark the identified 2022–2023 letters as withdrawn; do not treat them as current active guidance |
| Federal Reserve / FDIC / OCC — tokenized-securities capital FAQ, 5 Mar 2026 | https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260305a.htm | Capital treatment of eligible tokenized securities | Track asset eligibility and bank-specific risk controls separately; technology-neutral capital treatment is not a blanket approval of every token |
| Federal Reserve — Trading and Capital-Markets Activities Manual | https://www.federalreserve.gov/publications/supervision_trading.htm | Trading, dealer operations, market, counterparty, legal and reporting risks | Official page states last update July 2011; use as a historical supervisory reference, not as a new 2026 crypto manual |
| U.S. Treasury — GENIUS Act proposed rulemaking, 17 Aug 2026 | https://home.treasury.gov/news/press-releases/sb0605 | Payment stablecoin issuance, offering and sale | Mark as proposed rulemaking; track comments, final rule, effective dates and scope before activating controls |
| U.S. Treasury — Digital Asset Industry Cybersecurity Information Sharing Initiative, 9 Apr 2026 | https://home.treasury.gov/news/press-releases/sb0437 | Cyber threat intelligence and critical-infrastructure resilience | Use as an operational risk reference; participation eligibility is separate from platform readiness |
| BIS — Project Agorá | https://www.bis.org/project/agora | Multi-currency wholesale settlement and tokenized bank deposits/reserves | Architecture reference only; not a CHRONOS connection or authorization |
| BIS — Project Agorá report, 27 May 2026 | https://www.bis.org/publications/project-agora-shared-programmable-platform-wholesale-cross-border-payments | Atomic settlement, privacy, shared platform design | Derive engineering hypotheses and tests; do not claim regulatory endorsement |
| BIS — Annual Economic Report 2026 | https://www.bis.org/publ/arpdf/ar2026e.pdf | Tokenization, stablecoins, unified ledgers, financial stability and interoperability | Architecture and risk reference; not a binding U.S. rule |

## Required source metadata

For each control derived from a source, retain:
- `source_id`, `official_url`, `publisher`, `publication_date`, `last_checked_at`
- `document_status`: `proposed`, `final`, `effective`, `withdrawn`, `historical`, `superseded`, or `under_review`
- `jurisdiction`, `product_scope`, `effective_date`, `review_owner`
- `control_mapping`, `applicability_decision`, `legal_review_reference`
- `supersedes_source_id` where relevant

## Mandatory safeguards

- Do not turn a proposed rule into an effective requirement.
- Do not continue treating withdrawn guidance as active.
- Do not infer that a manual specifically covers crypto if it is a general bank or capital-markets manual.
- Do not present an engineering checklist as legal compliance.
- Require qualified counsel/compliance review for each instrument, jurisdiction, entity and operating model.
- Preserve prior versions and decisions for audit; do not silently overwrite regulatory interpretations.
