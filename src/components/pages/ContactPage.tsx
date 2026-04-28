import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { dict, type Lang } from "@/lib/i18n";

export function ContactPage({ lang }: { lang: Lang }) {
  const t = dict[lang].contact;
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().trim().min(2, t.errName).max(100),
    email: z.string().trim().email(t.errEmail).max(255),
    message: z.string().trim().min(10, t.errMsg).max(1000),
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(t.mailSubject(result.data.name));
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:contact@terangabridgeafrica.com?subject=${subject}&body=${body}`;
    setStatus("ok");
  }

  return (
    <section className="container-page py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.kicker}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">{t.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{t.lead}</p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-5">
          <InfoCard icon={MapPin} title={t.address}>Sacré Cœur 3 VDN, 57<br />Dakar, Sénégal</InfoCard>
          <InfoCard icon={Phone} title={t.phone}><a href="tel:+221338920721" className="hover:text-primary">+221 33 892 07 21</a></InfoCard>
          <InfoCard icon={Mail} title={t.email}><a href="mailto:contact@terangabridgeafrica.com" className="hover:text-primary break-all">contact@terangabridgeafrica.com</a></InfoCard>

          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title={t.mapTitle}
              src="https://www.google.com/maps?q=Sacre+Coeur+3+VDN+Dakar+Senegal&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-7 md:p-9 shadow-soft space-y-5">
          <Field label={t.name} name="name" error={errors.name} />
          <Field label={t.email} name="email" type="email" error={errors.email} />
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground">{t.message}</label>
            <textarea id="message" name="message" rows={6} maxLength={1000} className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary-glow">
            {t.send} <Send className="h-4 w-4" />
          </button>
          {status === "ok" && <p className="text-sm text-primary">{t.ok}</p>}
        </form>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground">{label}</label>
      <input id={name} name={name} type={type} maxLength={255} className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
