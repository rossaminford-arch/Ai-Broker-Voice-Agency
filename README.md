# Broker Voice Agency

Compliant AI receptionist SaaS for mortgage, insurance, and finance brokers. Built with Next.js 14, Supabase, Twilio, and Stripe.

## Quick start

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Environment variables**
   - Copy `.env.example` to `.env.local` and fill credentials for Supabase, Twilio, Stripe, S3, and your chosen agent provider.
3. **Database**
   - Create a Supabase project (EU region recommended).
   - Run the schema: `psql "$SUPABASE_DB_URL" -f packages/db/schema.sql`.
   - Seed demo data: `npm run db:seed`.
4. **Local development**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 for the marketing site and /app for the dashboard.
5. **Expose webhooks**
   - Use ngrok/cloudflared to expose your dev server.
   - Configure Twilio webhooks:
     - Voice webhook → `POST https://<tunnel>/api/voice/inbound`
     - Voice status → `POST https://<tunnel>/api/voice/status`
     - SMS inbound → `POST https://<tunnel>/api/sms/inbound`
6. **Agent provider**
   - Set `AGENT_PROVIDER` to `retell`, `vapi`, or `custom`.
   - For Retell/Vapi, supply `AGENT_API_KEY` and follow comments in `src/lib/agent/*` to attach live calls.
   - Custom provider outlines Twilio Media Streams ↔ STT ↔ LLM ↔ TTS loop.
7. **Known limitations**
   - The AI assistant never provides regulated advice (rates, underwriting). Use `shouldHandoffForTopic` for enforced handoff.
   - CRM, calendar, and storage integrations run in mock mode without credentials.
   - RLS policies are documented but disabled until Supabase service role usage is configured.
8. **Compliance defaults**
   - Disclosure line enforced on every call (`disclosureLine`).
   - Opt-outs recorded on STOP keywords.
   - Retention defaults: audio 90 days, transcripts 12 months (configurable in settings).
9. **Deployment**
   - Deploy to Vercel. Ensure `STRIPE_WEBHOOK_SECRET` is set and configure the webhook route to receive raw body (already handled via `runtime = "nodejs"`).
   - Run `npm run build` before deploy to validate.
10. **Testing & CI**
    - Unit tests: `npm run test`
    - E2E tests: `npm run e2e`
    - CI pipeline lives at `.github/workflows/ci.yml` and runs lint, typecheck, unit tests, build, and smoke E2E.

## Scripts

- `npm run demo:call` prints example curl commands to simulate Twilio webhooks.
- `npm run db:seed` seeds demo data (requires `SUPABASE_DB_URL`).

## Folder structure

See repo tree for marketing pages, dashboard, API routes, lib integrations, and Supabase schema/seeds.
