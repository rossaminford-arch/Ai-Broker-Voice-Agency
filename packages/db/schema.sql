create extension if not exists "uuid-ossp";
create extension if not exists pgcrypto;
create extension if not exists vector;

create table if not exists accounts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  fca_ref text,
  timezone text default 'Europe/London',
  recording_retention_days int default 90,
  summary_retention_days int default 365,
  created_at timestamptz default now()
);

create type user_role as enum ('admin','advisor','staff');
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  email text unique not null,
  role user_role default 'admin',
  display_name text,
  created_at timestamptz default now()
);

create table if not exists numbers (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  twilio_sid text not null,
  label text,
  forwarding_target text,
  created_at timestamptz default now()
);

create table if not exists knowledge_items (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  topic text,
  text text,
  source_url text,
  embedding vector(768)
);

create table if not exists contacts (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  name text,
  phone text,
  email text,
  consent_flags jsonb default '{}'::jsonb,
  source text,
  created_at timestamptz default now()
);

create type lead_status as enum ('new','working','qualified','won','lost');
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  contact_id uuid references contacts(id) on delete cascade,
  campaign text,
  utm jsonb default '{}'::jsonb,
  status lead_status default 'new',
  created_at timestamptz default now()
);

create type call_direction as enum ('inbound','outbound');
create table if not exists calls (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  contact_id uuid references contacts(id),
  twilio_sid text,
  direction call_direction,
  started_at timestamptz default now(),
  duration_s int,
  outcome text,
  disclosure_version text,
  recording_url text,
  created_at timestamptz default now()
);

create table if not exists transcripts (
  id uuid primary key default gen_random_uuid(),
  call_id uuid references calls(id) on delete cascade,
  text text,
  redactions jsonb,
  confidence numeric
);

create table if not exists conversations (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  contact_id uuid references contacts(id) on delete cascade,
  last_intent text,
  owner_user_id uuid references users(id),
  updated_at timestamptz default now()
);

create type message_channel as enum ('sms','whatsapp','email','voice');
create type message_direction as enum ('inbound','outbound');
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid references conversations(id) on delete cascade,
  channel message_channel,
  body text,
  media_url text,
  direction message_direction,
  status text,
  created_at timestamptz default now()
);

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  contact_id uuid references contacts(id) on delete cascade,
  advisor_id uuid references users(id),
  starts_at timestamptz,
  status text default 'booked',
  created_at timestamptz default now()
);

create table if not exists doc_requests (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  contact_id uuid references contacts(id) on delete cascade,
  checklist jsonb,
  uploaded jsonb,
  created_at timestamptz default now()
);

create table if not exists consents (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  contact_id uuid references contacts(id) on delete cascade,
  channel text,
  wording_version text,
  ts timestamptz default now(),
  ip inet
);

create table if not exists usage (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  period_start date,
  minutes numeric default 0,
  sms int default 0,
  wa_sessions int default 0,
  storage_gb numeric default 0,
  cost_basis numeric default 0
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references accounts(id) on delete cascade,
  stripe_customer_id text,
  plan text,
  status text,
  created_at timestamptz default now()
);

create index if not exists idx_accounts_created_at on accounts(created_at desc);
create index if not exists idx_contacts_account on contacts(account_id, created_at desc);
create index if not exists idx_leads_account on leads(account_id, created_at desc);
create index if not exists idx_calls_account on calls(account_id, started_at desc);
create index if not exists idx_messages_conv on messages(conversation_id, created_at desc);
create index if not exists idx_usage_account_period on usage(account_id, period_start desc);

-- Row Level Security (enable once policies are ready)
-- alter table accounts enable row level security;
-- create policy "accounts_isolation" on accounts using (id = auth.uid());
-- Example template for per-account isolation:
-- alter table leads enable row level security;
-- create policy "tenant_isolation" on leads using (account_id = current_setting('app.current_account')::uuid);
