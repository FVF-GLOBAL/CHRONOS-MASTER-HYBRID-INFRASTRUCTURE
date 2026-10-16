export type AuditEvent = {
  readonly eventId: string;
  readonly occurredAt: string;
  readonly actorId: string;
  readonly action: string;
  readonly resourceType: string;
  readonly resourceId: string;
  readonly correlationId: string;
  readonly payloadDigest: string;
  readonly previousEventDigest?: string;
};

export interface AppendOnlyAuditStore {
  append(event: AuditEvent): Promise<void>;
  getByCorrelationId(correlationId: string): Promise<readonly AuditEvent[]>;
}

// A database-backed append-only implementation and independently verifiable hash chaining
// are required before production use. This interface alone is not tamper-proof storage.
