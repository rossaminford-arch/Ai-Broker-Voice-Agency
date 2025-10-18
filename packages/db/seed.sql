insert into accounts (id, name, fca_ref, timezone)
values
  ('11111111-1111-1111-1111-111111111111', 'Demo Brokerage', 'FCA123456', 'Europe/London')
on conflict (id) do nothing;

insert into users (id, account_id, email, role, display_name)
values
  ('22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'demo@broker.ai', 'admin', 'Demo Admin')
on conflict (id) do nothing;

insert into numbers (id, account_id, twilio_sid, label, forwarding_target)
values
  ('33333333-3333-3333-3333-333333333333', '11111111-1111-1111-1111-111111111111', 'PN123456789', 'Main Reception', '+442034567890')
on conflict (id) do nothing;

insert into knowledge_items (account_id, topic, text)
values
  ('11111111-1111-1111-1111-111111111111', 'Disclosure', 'Always introduce as the AI Receptionist and confirm the call is recorded.'),
  ('11111111-1111-1111-1111-111111111111', 'Fact Find', 'Capture loan purpose, timeline, deposit, credit considerations, preferred advisor.'),
  ('11111111-1111-1111-1111-111111111111', 'Document Checklist', 'Request bank statements, payslips, proof of ID, proof of address, and credit report.');

insert into contacts (id, account_id, name, phone, email, source)
values
  ('44444444-4444-4444-4444-444444444444', '11111111-1111-1111-1111-111111111111', 'Sam Borrower', '+447700900123', 'sam@example.com', 'website')
on conflict (id) do nothing;

insert into leads (account_id, contact_id, campaign, status)
values
  ('11111111-1111-1111-1111-111111111111', '44444444-4444-4444-4444-444444444444', 'mortgage-landing', 'new')
on conflict do nothing;
