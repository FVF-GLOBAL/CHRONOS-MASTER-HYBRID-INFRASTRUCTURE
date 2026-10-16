export type Posting = {
  readonly accountId: string;
  readonly currency: string;
  readonly amountMinor: bigint;
  readonly direction: "debit" | "credit";
};

export type JournalEntry = {
  readonly journalId: string;
  readonly idempotencyKey: string;
  readonly effectiveAt: string;
  readonly description: string;
  readonly postings: readonly Posting[];
};

export function validateBalancedJournal(entry: JournalEntry): void {
  if (!entry.journalId.trim() || !entry.idempotencyKey.trim()) {
    throw new Error("journalId and idempotencyKey are required");
  }
  if (entry.postings.length < 2) throw new Error("journal requires at least two postings");
  const totals = new Map<string, { debit: bigint; credit: bigint }>();
  for (const posting of entry.postings) {
    if (!posting.accountId.trim() || !posting.currency.trim()) {
      throw new Error("accountId and currency are required");
    }
    if (posting.amountMinor <= 0n) throw new Error("posting amount must be positive");
    const total = totals.get(posting.currency) ?? { debit: 0n, credit: 0n };
    total[posting.direction] += posting.amountMinor;
    totals.set(posting.currency, total);
  }
  for (const [currency, total] of totals) {
    if (total.debit !== total.credit) {
      throw new Error(`unbalanced journal for ${currency}: debit=${total.debit}, credit=${total.credit}`);
    }
  }
}
