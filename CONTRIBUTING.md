# Contributing

- Create a focused branch for each change.
- Add tests for domain behavior, error cases, concurrency and fail-closed conditions.
- Never commit credentials, customer data, private keys or real transaction details.
- Do not represent test fixtures or testnet outcomes as production evidence.
- Record architectural decisions in `docs/architecture/`.
- Keep provider-specific logic behind adapter interfaces.
- Never disable a failing security or correctness check to merge.
