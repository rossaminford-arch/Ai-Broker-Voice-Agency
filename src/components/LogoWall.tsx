const logos = ["WiseAgent", "Mortgage Brain", "Iress", "Cal.com", "HubSpot", "Stripe"];

export function LogoWall() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-5xl px-6">
        <p className="text-center text-sm uppercase tracking-widest text-slate-500">Trusted integrations</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-slate-400">
          {logos.map(logo => (
            <span key={logo} className="text-lg font-semibold tracking-wide text-slate-400">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
