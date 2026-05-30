"use client";

/**
 * Sales inquiry form — used on /contact/sales.
 *
 * Posts to /api/contact with formType: "sales". Includes:
 *   • Required: name, email, company, industry, teamSize, inquiryType, message
 *   • Optional: role
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  salesSchema,
  INDUSTRY_OPTIONS,
  TEAM_SIZE_OPTIONS,
  INQUIRY_TYPE_OPTIONS,
  type SalesInput,
} from "@/lib/contact-schemas";
import { getRecaptchaToken } from "@/lib/recaptcha";
import {
  FormField,
  FormTextarea,
  FormSelect,
  HoneypotField,
  SubmitButton,
  FormStatus,
} from "./FormPrimitives";
import { RecaptchaNotice } from "./RecaptchaNotice";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function SalesForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SalesInput>({
    resolver: zodResolver(salesSchema),
    defaultValues: {
      formType: "sales",
      name: "",
      email: "",
      company: "",
      role: "",
      industry: "" as SalesInput["industry"],
      teamSize: "" as SalesInput["teamSize"],
      inquiryType: "" as SalesInput["inquiryType"],
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: SalesInput) {
    setState("submitting");
    setErrorMessage("");
    try {
      const recaptchaToken = await getRecaptchaToken("sales");
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
            "Something went wrong sending your inquiry. Please email sales@infizia.in directly.",
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
      <input type="hidden" {...register("formType")} value="sales" />
      <HoneypotField {...register("website")} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField
          id="sales-name"
          label="Your name"
          placeholder="Riya Sharma"
          autoComplete="name"
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <FormField
          id="sales-email"
          label="Work email"
          type="email"
          placeholder="riya@company.com"
          autoComplete="email"
          required
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField
          id="sales-company"
          label="Company"
          placeholder="Acme Industries"
          autoComplete="organization"
          required
          error={errors.company?.message}
          {...register("company")}
        />
        <FormField
          id="sales-role"
          label="Your role"
          placeholder="VP of Operations · optional"
          autoComplete="organization-title"
          error={errors.role?.message}
          {...register("role")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormSelect
          id="sales-industry"
          label="Industry"
          options={INDUSTRY_OPTIONS}
          required
          placeholder="Choose your industry…"
          error={errors.industry?.message}
          {...register("industry")}
        />
        <FormSelect
          id="sales-team-size"
          label="Team size"
          options={TEAM_SIZE_OPTIONS}
          required
          placeholder="Choose team size…"
          error={errors.teamSize?.message}
          {...register("teamSize")}
        />
      </div>

      <FormSelect
        id="sales-inquiry-type"
        label="What are you exploring?"
        options={INQUIRY_TYPE_OPTIONS}
        required
        placeholder="Choose an inquiry type…"
        error={errors.inquiryType?.message}
        {...register("inquiryType")}
      />

      <FormTextarea
        id="sales-message"
        label="Tell us more"
        placeholder="A few lines about what you're trying to do, the timeline you're working with, and how we can help…"
        rows={6}
        required
        error={errors.message?.message}
        {...register("message")}
      />

      <FormStatus
        state={state}
        successMessage="Thanks — your inquiry is in. A member of the sales team will reach out within one business day."
        errorMessage={errorMessage}
      />

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <SubmitButton state={state} idleLabel="Send inquiry" />
        <RecaptchaNotice />
        <p className="text-xs text-text-faint">
          Or email{" "}
          <a
            href="mailto:sales@infizia.in"
            className="text-brand-teal hover:underline"
          >
            sales@infizia.in
          </a>
          .
        </p>
      </div>
    </form>
  );
}
