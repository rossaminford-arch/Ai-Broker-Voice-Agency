export interface SessionContext {
  accountId: string;
  userId: string;
}

export function assertAccountContext(ctx: Partial<SessionContext>): asserts ctx is SessionContext {
  if (!ctx.accountId || !ctx.userId) {
    throw new Error("Missing account context for multi-tenant isolation");
  }
}

export function withAccountFilter<T extends { account_id: string }>(ctx: SessionContext, payload: T) {
  return { ...payload, account_id: ctx.accountId };
}

export function filterByAccount<T extends { account_id: string }>(ctx: SessionContext, rows: T[]) {
  return rows.filter(row => row.account_id === ctx.accountId);
}

export const disclosureVersion = "uk-2024-q3";
