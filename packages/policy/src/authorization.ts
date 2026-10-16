export type Approval = {
  readonly approvalId: string;
  readonly actorId: string;
  readonly action: string;
  readonly resourceId: string;
  readonly approvedAt: string;
};

export type AuthorizationRequest = {
  readonly actorId: string;
  readonly action: string;
  readonly resourceId: string;
  readonly requiredApprovals: number;
  readonly approvals: readonly Approval[];
  readonly prohibitedActorIds: readonly string[];
};

export function assertAuthorized(request: AuthorizationRequest): void {
  if (!request.actorId.trim() || !request.action.trim() || !request.resourceId.trim()) {
    throw new Error("actor, action, and resource are required");
  }
  const valid = request.approvals.filter(a =>
    a.action === request.action &&
    a.resourceId === request.resourceId &&
    a.actorId !== request.actorId &&
    !request.prohibitedActorIds.includes(a.actorId)
  );
  const uniqueActors = new Set(valid.map(a => a.actorId));
  if (uniqueActors.size < request.requiredApprovals) {
    throw new Error("authorization denied: required independent approvals not satisfied");
  }
}
