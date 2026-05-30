"use client";

/**
 * Shared form primitives — used by ContactForm / DemoForm / SalesForm.
 *
 * Built on top of react-hook-form. Each primitive handles its own
 * label + input + error rendering. Honeypot (`HoneypotField`) is
 * visually hidden but still in the DOM so spam bots fill it.
 */

import { type ReactNode, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

/* ─── Field shell ─────────────────────────────────────────── */

type FieldShellProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

function FieldShell({
  id,
  label,
  error,
  hint,
  required,
  className,
  children,
}: FieldShellProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint"
      >
        {label}
        {required && <span className="ml-1 text-brand-rose">*</span>}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          className="text-xs leading-snug text-brand-rose"
          role="alert"
        >
          {error}
        </p>
      ) : hint ? (
        <p className="text-xs leading-snug text-text-faint">{hint}</p>
      ) : null}
    </div>
  );
}

/* ─── Text input ──────────────────────────────────────────── */

type FormFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "type"
> & {
  id: string;
  label: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
};

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  function FormField(
    { id, label, type = "text", error, hint, required, className, ...rest },
    ref,
  ) {
    return (
      <FieldShell
        id={id}
        label={label}
        error={error}
        hint={hint}
        required={required}
        className={className}
      >
        <input
          ref={ref}
          id={id}
          type={type}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "rounded-xl border border-white/10 bg-bg-base/60 px-4 py-3 text-base text-white placeholder:text-text-faint outline-none transition-all duration-200",
            "focus:border-brand-teal/50 focus:bg-bg-elevated focus:ring-2 focus:ring-brand-teal/30",
            error && "border-brand-rose/50 focus:border-brand-rose/60 focus:ring-brand-rose/30",
          )}
          {...rest}
        />
      </FieldShell>
    );
  },
);

/* ─── Textarea ────────────────────────────────────────────── */

type FormTextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id"
> & {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
};

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  function FormTextarea(
    { id, label, error, hint, required, className, rows = 5, ...rest },
    ref,
  ) {
    return (
      <FieldShell
        id={id}
        label={label}
        error={error}
        hint={hint}
        required={required}
        className={className}
      >
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "rounded-xl border border-white/10 bg-bg-base/60 px-4 py-3 text-base text-white placeholder:text-text-faint outline-none transition-all duration-200 resize-y",
            "focus:border-brand-teal/50 focus:bg-bg-elevated focus:ring-2 focus:ring-brand-teal/30",
            error && "border-brand-rose/50 focus:border-brand-rose/60 focus:ring-brand-rose/30",
          )}
          {...rest}
        />
      </FieldShell>
    );
  },
);

/* ─── Select ──────────────────────────────────────────────── */

type FormSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "id"
> & {
  id: string;
  label: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  placeholder?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
};

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  function FormSelect(
    {
      id,
      label,
      options,
      placeholder = "Choose one…",
      error,
      hint,
      required,
      className,
      ...rest
    },
    ref,
  ) {
    return (
      <FieldShell
        id={id}
        label={label}
        error={error}
        hint={hint}
        required={required}
        className={className}
      >
        <select
          ref={ref}
          id={id}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "rounded-xl border border-white/10 bg-bg-base/60 px-4 py-3 text-base text-white outline-none transition-all duration-200 appearance-none cursor-pointer",
            "focus:border-brand-teal/50 focus:bg-bg-elevated focus:ring-2 focus:ring-brand-teal/30",
            "bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394A3B8%22%20stroke-width%3D%221.6%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22/%3E%3C/svg%3E')] bg-no-repeat bg-[length:1rem_1rem] bg-[position:calc(100%-1rem)_center] pr-10",
            error && "border-brand-rose/50 focus:border-brand-rose/60 focus:ring-brand-rose/30",
          )}
          defaultValue=""
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-bg-elevated text-white">
              {opt.label}
            </option>
          ))}
        </select>
      </FieldShell>
    );
  },
);

/* ─── Honeypot field (visually hidden, in DOM for bots) ──── */

export const HoneypotField = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function HoneypotField(props, ref) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="hp-website">
          Website (leave blank)
          <input
            ref={ref}
            id="hp-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...props}
          />
        </label>
      </div>
    );
  },
);

/* ─── Submit button with loading / success / error states ── */

type SubmitButtonProps = {
  state: "idle" | "submitting" | "success" | "error";
  idleLabel?: string;
  submittingLabel?: string;
  successLabel?: string;
  className?: string;
};

export function SubmitButton({
  state,
  idleLabel = "Send message",
  submittingLabel = "Sending…",
  successLabel = "Sent ✓",
  className,
}: SubmitButtonProps) {
  const isSubmitting = state === "submitting";
  const isSuccess = state === "success";
  const isError = state === "error";

  return (
    <button
      type="submit"
      disabled={isSubmitting || isSuccess}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-base transition-all duration-200",
        "bg-brand-teal text-bg-base shadow-glow-teal",
        "hover:brightness-110 active:scale-[0.98]",
        "disabled:cursor-not-allowed disabled:opacity-80",
        isSuccess && "bg-brand-green",
        isError && "bg-brand-rose text-white",
        className,
      )}
    >
      {isSubmitting && (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {isSuccess ? successLabel : isSubmitting ? submittingLabel : idleLabel}
    </button>
  );
}

/* ─── Form-level status message ───────────────────────────── */

export function FormStatus({
  state,
  successMessage,
  errorMessage,
}: {
  state: "idle" | "submitting" | "success" | "error";
  successMessage?: string;
  errorMessage?: string;
}) {
  if (state === "success" && successMessage) {
    return (
      <div className="rounded-xl border border-brand-green/30 bg-brand-green/[0.06] px-4 py-3">
        <p className="text-sm leading-relaxed text-brand-green">
          {successMessage}
        </p>
      </div>
    );
  }
  if (state === "error" && errorMessage) {
    return (
      <div className="rounded-xl border border-brand-rose/30 bg-brand-rose/[0.06] px-4 py-3">
        <p className="text-sm leading-relaxed text-brand-rose">
          {errorMessage}
        </p>
      </div>
    );
  }
  return null;
}
