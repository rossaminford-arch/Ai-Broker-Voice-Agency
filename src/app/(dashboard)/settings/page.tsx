const sections = [
  {
    title: "Numbers & routing",
    description: "Manage Twilio numbers, overflow routing, and business hours.",
    action: "Configure"
  },
  {
    title: "Calendars",
    description: "Connect Cal.com or Calendly to surface real availability.",
    action: "Connect"
  },
  {
    title: "CRM",
    description: "Link HubSpot or Pipedrive for automatic evidence packs.",
    action: "Manage"
  },
  {
    title: "Knowledge snippets",
    description: "Maintain scripts and disclosures for the AI receptionist.",
    action: "Edit"
  },
  {
    title: "Compliance",
    description: "Retention, disclosure wording, TPS/CTPS checks, and audit exports.",
    action: "Review"
  }
];

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-600">Configure telephony, compliance, integrations, and knowledge.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map(section => (
          <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{section.description}</p>
            <button className="mt-4 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-500">
              {section.action}
            </button>
          </div>
        ))}
      </div>
      <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-800">
        <h3 className="text-lg font-semibold">Compliance defaults</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Audio recordings retained 90 days by default.</li>
          <li>Summaries and transcripts retained 12 months.</li>
          <li>STOP/TPS/CTPS automatically opt contacts out of outreach.</li>
          <li>Do-not-answer topics: rates, underwriting, regulated advice.</li>
        </ul>
      </div>
    </div>
  );
}
