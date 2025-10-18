"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormField } from "@/components/forms/FormField";

const schema = z.object({
  name: z.string().min(1, "Name required"),
  phone: z.string().min(8, "Phone required"),
  channel: z.enum(["voice", "whatsapp"]).default("voice")
});

type FormValues = z.infer<typeof schema>;

export default function DemoPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", channel: "voice" }
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("Dialling your line...");
    try {
      const resp = await fetch("/api/leads/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: values.phone })
      });
      if (!resp.ok) throw new Error("Failed to trigger call");
      setStatus("Call requested. Expect a ring within 60 seconds.");
      setTranscript(
        `Example transcript:\nAgent: Thanks for calling. Just to flag, this line is recorded and I'm your virtual receptionist.\nCaller: I'm looking for remortgage help.\nAgent: Brilliant. Let's capture some details so the right advisor calls you back.`
      );
    } catch (error) {
      setStatus("Unable to trigger the demo. Please email hello@broker.ai");
    }
  };

  return (
    <main className="bg-white py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-slate-900">Experience the live demo</h1>
        <p className="mt-4 text-slate-600">
          Enter your details and we&apos;ll trigger our AI receptionist to call you immediately. Demos can take up to 2
          minutes to queue.
        </p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <FormField
            control={form.control}
            name="name"
            label="Your name"
              render={({ value, onChange }) => (
                <input
                  id="name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  value={(value as string | undefined) ?? ""}
                  onChange={e => onChange(e.target.value)}
                />
              )}
            error={form.formState.errors.name?.message}
          />
          <FormField
            control={form.control}
            name="phone"
            label="Phone number"
            description="UK/EU numbers only"
              render={({ value, onChange }) => (
                <input
                  id="phone"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  value={(value as string | undefined) ?? ""}
                  onChange={e => onChange(e.target.value)}
                />
              )}
            error={form.formState.errors.phone?.message}
          />
          <div className="space-y-2 text-sm text-slate-600">
            <label className="font-medium text-slate-700">Channel</label>
            <select
              {...form.register("channel")}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
            >
              <option value="voice">Voice call</option>
              <option value="whatsapp">WhatsApp follow-up</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500"
          >
            Call me now
          </button>
        </form>
        {status ? <p className="mt-6 text-sm text-brand-600">{status}</p> : null}
        {transcript ? (
          <pre className="mt-6 whitespace-pre-wrap rounded-3xl bg-slate-900 p-6 text-sm text-slate-100">{transcript}</pre>
        ) : null}
      </div>
    </main>
  );
}
