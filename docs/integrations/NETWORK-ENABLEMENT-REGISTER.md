# Network Enablement Register

Default state for all external networks is **disabled** until an owner signs off on evidence.

| Network / rail | Intended role | Initial state | Required evidence |
|---|---|---|---|
| Canton Network | Privacy-enabled institutional asset and settlement workflows | disabled | Network environment, identity/party setup, contract/API tests, finality model, operational approval |
| Hyperledger Besu | Permissioned EVM settlement and token contracts | disabled | Chain ID allowlist, consensus config, RPC authentication, contract review, finality/reorg tests |
| Additional EVM chains | Approved tokenized asset workflows | disabled | Separate risk assessment and configuration for each chain |
| DTCC Tokenization Service | Eligible DTC-custodied securities interoperability | blocked pending eligibility | Participant eligibility, commercial and legal authorization, official interface access, test evidence |
| Fedwire / FedNow / other bank rails | Cash leg and payment status | disabled | Sponsoring bank/provider, access approval, message specifications, sandbox evidence |
| Market data / FX | Valuation and collateral controls | disabled | License, provider identity, freshness SLA, timestamp and outage behavior |
| Custody / HSM / KMS / MPC | Transaction signing and key controls | disabled | Key ceremony, authorization policy, recovery tests, vendor assessment |

Do not use this register as evidence that a connection exists. Update statuses only with links to verifiable implementation and test evidence.
