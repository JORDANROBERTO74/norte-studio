"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon } from "@/components/icons";
import type { Dictionary } from "@/i18n/get-dictionary";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [sent, setSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [requiredError, setRequiredError] = useState(false);

  const form = dict.contact.form;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(!emailValid);
    setRequiredError(!name || !message);

    if (!emailValid || !name || !message) {
      return;
    }

    // Demo form: there is no backend, so we only acknowledge the send.
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="flex flex-col items-start gap-4 rounded-card border border-line bg-white/50 p-8"
        role="status"
      >
        <span className="grid size-12 place-items-center rounded-full bg-accent text-paper">
          <CheckIcon className="size-6" />
        </span>
        <p className="max-w-sm text-lg leading-relaxed text-ink">{form.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={form.name} required={requiredError}>
          <input
            name="name"
            type="text"
            placeholder={form.namePlaceholder}
            className={inputClasses}
            aria-invalid={requiredError || undefined}
          />
        </Field>
        <Field label={form.email} error={emailError ? form.invalidEmail : undefined}>
          <input
            name="email"
            type="email"
            placeholder={form.emailPlaceholder}
            className={inputClasses}
            aria-invalid={emailError || undefined}
          />
        </Field>
      </div>

      <Field label={form.company}>
        <input
          name="company"
          type="text"
          placeholder={form.companyPlaceholder}
          className={inputClasses}
        />
      </Field>

      <Field label={form.budget}>
        <select name="budget" className={inputClasses} defaultValue={form.budgetOptions[4]}>
          {form.budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label={form.message} required={requiredError}>
        <textarea
          name="message"
          rows={5}
          placeholder={form.messagePlaceholder}
          className={inputClasses}
          aria-invalid={requiredError || undefined}
        />
      </Field>

      {requiredError ? (
        <p className="text-sm font-medium text-accent">{form.required}</p>
      ) : null}

      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-medium text-paper transition hover:bg-[#d94d1c]"
      >
        {form.submit}
      </button>
    </form>
  );
}

const inputClasses =
  "w-full rounded-xl border border-line bg-white/60 px-4 py-3 text-base text-ink outline-none transition placeholder:text-ink-soft/60 focus:border-accent focus:ring-2 focus:ring-accent/20";

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      {children}
      {error ? <span className="text-sm font-medium text-accent">{error}</span> : null}
    </label>
  );
}
