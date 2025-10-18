import { z } from "zod";

export const outboundCallSchema = z.object({
  phone: z.string().min(8),
  accountId: z.string().uuid().optional()
});

export const inboundSmsSchema = z.object({
  From: z.string(),
  Body: z.string()
});

export const sendMessageSchema = z.object({
  to: z.string().min(8),
  body: z.string().min(1),
  channel: z.enum(["sms", "whatsapp"]).optional()
});

export const leadWebhookSchema = z.object({
  phone: z.string().min(8),
  accountId: z.string().uuid().optional(),
  metadata: z.record(z.string()).optional()
});

export const docRequestSchema = z.object({
  contactId: z.string().uuid(),
  checklist: z.array(z.string()).min(1)
});

export const docReceivedSchema = z.object({
  requestId: z.string().uuid(),
  item: z.string(),
  url: z.string().url().optional()
});

export const crmUpsertSchema = z.object({
  accountId: z.string().uuid(),
  contact: z.object({
    name: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email().optional()
  }),
  summary: z.string().optional(),
  metadata: z.record(z.any()).optional()
});
