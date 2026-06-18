"use client";

/**
 * Demo booking form — used on /contact/demo.
 *
 * Posts to /api/contact with formType: "demo". Includes:
 *   • Required: name, email, company, product (dropdown), useCase
 *   • Optional: phone, preferredTime
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  demoSchema,
  PRODUCT_OPTIONS,
  type DemoInput,
} from "@/lib/contact-schemas";
import { getRecaptchaToken } from "@/lib/recaptcha";
import { SITE } from "@/lib/constants";
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

export function DemoForm({
  defaultProduct,
}: {
  /** Optional pre-selected product slug (used when ?product=eyecon arrives) */
  defaultProduct?: string;
}) {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoInput>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      formType: "demo",
      name: "",
      email: "",
      company: "",
      phone: "",
      product: (defaultProduct as DemoInput["product"]) ?? "general",
      useCase: "",
      preferredTime: "",
      website: "",
    },
  });

  async function onSubmit(data: DemoInput) {
    setState("submitting");
    setErrorMessage("");
    try {
      const recaptchaToken = await getRecaptchaToken("demo");
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
            `Something went wrong booking your demo. Please email ${SITE.email} directly.`,
        );
        return;
      }
      setState("success");
      reset();
    } catch {
      setState("error");
      setErrorMessage(
        `We couldn't reach the server. Please check your connection or email ${SITE.email} directly.`,
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative flex flex-col gap-5"
    >
      <input type="hidden" {...register("formType")} value="demo" />
      <HoneypotField {...register("website")} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField
          id="demo-name"
          label="Your name"
          placeholder="Riya Sharma"
          autoComplete="name"
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <FormField
          id="demo-email"
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
          id="demo-company"
          label="Company"
          placeholder="Acme Industries"
          autoComplete="organization"
          required
          error={errors.company?.message}
          {...register("company")}
        />
        <FormField
          id="demo-phone"
          label="Phone"
          type="tel"
          placeholder="+91 98765 43210"
          autoComplete="tel"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <FormSelect
        id="demo-product"
        label="What do you want to see?"
        options={PRODUCT_OPTIONS}
        required
        placeholder="Choose a product or practice…"
        hint="14 products + Red Hat practice + Google Cloud — pick what fits."
        error={errors.product?.message}
        {...register("product")}
      />

      <FormTextarea
        id="demo-usecase"
        label="What's your use case?"
        placeholder="A few lines about how you'd use the product, who the users are, and what you're trying to solve…"
        rows={5}
        required
        error={errors.useCase?.message}
        {...register("useCase")}
      />

      <FormField
        id="demo-time"
        label="Preferred time"
        placeholder="e.g. Tuesday afternoon IST · optional"
        hint="We'll confirm a slot in the follow-up email."
        error={errors.preferredTime?.message}
        {...register("preferredTime")}
      />

      <FormStatus
        state={state}
        successMessage="Thanks — your demo request is in. We'll confirm a slot within one business day."
        errorMessage={errorMessage}
      />

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <SubmitButton state={state} idleLabel="Book a demo" />
        <RecaptchaNotice />
        <p className="text-xs text-text-faint">
          Or email{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-brand-teal hover:underline"
          >
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
