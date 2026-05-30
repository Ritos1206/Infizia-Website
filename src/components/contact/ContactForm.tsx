"use client";

/**
 * General contact form — used on /contact.
 *
 * Posts to /api/contact with formType: "contact". Uses react-hook-form
 * + zod resolver for client-side validation matching the server schema.
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/contact-schemas";
import { getRecaptchaToken } from "@/lib/recaptcha";
import {
  FormField,
  FormTextarea,
  HoneypotField,
  SubmitButton,
  FormStatus,
} from "./FormPrimitives";
import { RecaptchaNotice } from "./RecaptchaNotice";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      formType: "contact",
      name: "",
      email: "",
      company: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactInput) {
    setState("submitting");
    setErrorMessage("");

    try {
      const recaptchaToken = await getRecaptchaToken("contact");
      const payload = { ...data, recaptchaToken: recaptchaToken ?? "" };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.ok) {
        setState("error");
        setErrorMessage(
          json.error ??
            "Something went wrong sending your message. Please email sales@infizia.in directly.",
        );
        return;
      }

      setState("success");
      reset();
    } catch {
      setState("error");
      setErrorMessage(
        "We couldn't reach the server. Please check your connection or email sales@infizia.in directly.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative flex flex-col gap-5"
    >
      {/* Hidden formType + honeypot */}
      <input type="hidden" {...register("formType")} value="contact" />
      <HoneypotField {...register("website")} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField
          id="name"
          label="Your name"
          placeholder="Riya Sharma"
          autoComplete="name"
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <FormField
          id="email"
          label="Work email"
          type="email"
          placeholder="riya@company.com"
          autoComplete="email"
          required
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <FormField
        id="company"
        label="Company"
        placeholder="Acme Industries"
        autoComplete="organization"
        required
        error={errors.company?.message}
        {...register("company")}
      />

      <FormTextarea
        id="message"
        label="What's on your mind?"
        placeholder="A few lines about what you're trying to solve, what you've already tried, and what you'd like to discuss…"
        rows={6}
        required
        error={errors.message?.message}
        {...register("message")}
      />

      <FormStatus
        state={state}
        successMessage="Thanks — we've received your message and will reach out within one business day."
        errorMessage={errorMessage}
      />

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <SubmitButton state={state} idleLabel="Send message" />
        <RecaptchaNotice />
        <p className="text-xs text-text-faint">
          We respond within 1 business day. Or email{" "}
          <a
            href="mailto:sales@infizia.in"
            className="text-brand-teal hover:underline"
          >
            sales@infizia.in
          </a>{" "}
          directly.
        </p>
      </div>
    </form>
  );
}
