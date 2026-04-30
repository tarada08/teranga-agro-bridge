import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { dict, type Lang } from "@/lib/i18n";

const RECIPIENT = "contact@terangabridgeafrica.com";

export function QuoteForm({ lang }: { lang: Lang }) {
  const q = dict[lang].about.quote;

  const schema = z.object({
    name: z.string().trim().min(1, q.required).max(100),
    company: z.string().trim().max(120).optional().or(z.literal("")),
    email: z.string().trim().email(q.emailInvalid).max(255),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    need: z.string().min(1, q.required),
    country: z.string().min(1, q.required),
    budget: z.string().min(1, q.required),
    message: z.string().trim().min(10, q.required).max(2000),
  });

  type Values = z.infer<typeof schema>;

  const [values, setValues] = useState<Values>({
    name: "",
    company: "",
    email: "",
    phone: "",
    need: "",
    country: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  const set = <K extends keyof Values>(key: K, v: Values[K]) => {
    setValues((s) => ({ ...s, [key]: v }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof Values, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof Values;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    const v = parsed.data;
    const lines = [
      `${q.name}: ${v.name}`,
      v.company ? `${q.company}: ${v.company}` : null,
      `${q.email}: ${v.email}`,
      v.phone ? `${q.phone}: ${v.phone}` : null,
      `${q.need}: ${v.need}`,
      `${q.country}: ${v.country}`,
      `${q.budget}: ${v.budget}`,
      "",
      `${q.message}:`,
      v.message,
    ].filter(Boolean) as string[];

    const subject = q.mailSubject(v.name);
    const body = lines.join("\n");
    const href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus("ok");
  };

  const labelCls = "block text-sm font-medium text-foreground mb-1.5";
  const inputCls =
    "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const errCls = "mt-1.5 text-xs font-medium text-destructive";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="quote-heading"
      className="grid gap-5 md:grid-cols-2"
    >
      <div>
        <label htmlFor="qf-name" className={labelCls}>
          {q.name} <span className="text-destructive">*</span>
        </label>
        <input
          id="qf-name"
          type="text"
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
          className={inputCls}
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "qf-name-err" : undefined}
        />
        {errors.name && <p id="qf-name-err" className={errCls}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="qf-company" className={labelCls}>{q.company}</label>
        <input
          id="qf-company"
          type="text"
          value={values.company}
          onChange={(e) => set("company", e.target.value)}
          className={inputCls}
          autoComplete="organization"
        />
      </div>

      <div>
        <label htmlFor="qf-email" className={labelCls}>
          {q.email} <span className="text-destructive">*</span>
        </label>
        <input
          id="qf-email"
          type="email"
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
          className={inputCls}
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "qf-email-err" : undefined}
        />
        {errors.email && <p id="qf-email-err" className={errCls}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="qf-phone" className={labelCls}>{q.phone}</label>
        <input
          id="qf-phone"
          type="tel"
          value={values.phone}
          onChange={(e) => set("phone", e.target.value)}
          className={inputCls}
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor="qf-need" className={labelCls}>
          {q.need} <span className="text-destructive">*</span>
        </label>
        <select
          id="qf-need"
          value={values.need}
          onChange={(e) => set("need", e.target.value)}
          className={inputCls}
          aria-invalid={!!errors.need}
          aria-describedby={errors.need ? "qf-need-err" : undefined}
        >
          <option value="">{q.select}</option>
          {q.needs.map((n) => (<option key={n} value={n}>{n}</option>))}
        </select>
        {errors.need && <p id="qf-need-err" className={errCls}>{errors.need}</p>}
      </div>

      <div>
        <label htmlFor="qf-country" className={labelCls}>
          {q.country} <span className="text-destructive">*</span>
        </label>
        <select
          id="qf-country"
          value={values.country}
          onChange={(e) => set("country", e.target.value)}
          className={inputCls}
          aria-invalid={!!errors.country}
          aria-describedby={errors.country ? "qf-country-err" : undefined}
        >
          <option value="">{q.select}</option>
          {q.countries.map((c) => (<option key={c} value={c}>{c}</option>))}
        </select>
        {errors.country && <p id="qf-country-err" className={errCls}>{errors.country}</p>}
      </div>

      <div className="md:col-span-2">
        <label htmlFor="qf-budget" className={labelCls}>
          {q.budget} <span className="text-destructive">*</span>
        </label>
        <select
          id="qf-budget"
          value={values.budget}
          onChange={(e) => set("budget", e.target.value)}
          className={inputCls}
          aria-invalid={!!errors.budget}
          aria-describedby={errors.budget ? "qf-budget-err" : undefined}
        >
          <option value="">{q.select}</option>
          {q.budgets.map((b) => (<option key={b} value={b}>{b}</option>))}
        </select>
        {errors.budget && <p id="qf-budget-err" className={errCls}>{errors.budget}</p>}
      </div>

      <div className="md:col-span-2">
        <label htmlFor="qf-message" className={labelCls}>
          {q.message} <span className="text-destructive">*</span>
        </label>
        <textarea
          id="qf-message"
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          rows={5}
          placeholder={q.messagePlaceholder}
          className={`${inputCls} resize-y min-h-[120px]`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "qf-msg-err" : undefined}
        />
        {errors.message && <p id="qf-msg-err" className={errCls}>{errors.message}</p>}
      </div>

      <div className="md:col-span-2 flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5 hover:bg-primary-glow"
        >
          {q.send} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
        {status === "ok" && (
          <p
            role="status"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            {q.success}
          </p>
        )}
      </div>
    </form>
  );
}
