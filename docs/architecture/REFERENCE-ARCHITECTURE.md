# Reference Architecture

## Control-plane pattern

```text
Institutional Console / Counterparty Portal / Oversight Console
                         |
                  API Gateway + IAM
                         |
       Policy Engine / Approval Service / Audit Evidence
                         |
  Instrument Registry — Settlement Orchestrator — Ledger
                         |                |
        Collateral & Liquidity Engine    Reconciliation
                         |
  Adapter Ports: Canton | Besu/EVM | Banking Rails | Custody | Data
```

## Source-of-truth boundaries

- **Internal accounting:** the double-entry ledger is authoritative for the platform's own booked entries.
- **External network status:** each network adapter reports provider evidence; status is not inferred from a successful API response.
- **Cash status:** payment-rail status remains distinct from blockchain status.
- **Legal status:** legal finality, title, security interests, and perfection require authorized evidence and jurisdiction-specific review.
- **Asset identity:** an on-chain token is not automatically equivalent to the underlying legal asset. The instrument registry must bind representation, issuer, rights, transfer restrictions, and evidence.

## Settlement lifecycle

1. Create command with a unique idempotency key.
2. Validate parties, instrument terms, account limits, eligibility, available liquidity, and policy.
3. Obtain independent maker-checker approvals.
4. Reserve internal funds/positions transactionally.
5. Submit supported legs through adapters.
6. Observe provider events and independently query status when necessary.
7. Reconcile external evidence against internal postings.
8. Complete only when configured completion conditions are satisfied.
9. Route ambiguous states to manual review; never infer success from timeout.
10. Record technical finality, cash status, and legal-finality evidence separately.

## Database requirements before production

Use a transactional relational database with unique constraints for idempotency keys, append-only event records, explicit transaction boundaries, migrations, backup/restore tests, and concurrency tests. Define retention and privacy rules for each data class. Do not place secrets or unnecessary personal data on public chains.
