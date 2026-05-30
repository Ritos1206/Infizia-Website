/**
 * Contact form schemas (zod) — one per form type.
 *
 * Used by both the client-side react-hook-form resolver and the
 * server-side API route validator. Same schema, same constraints,
 * no duplication.
 */

import { z } from "zod";

/** Common fields shared across every form */
const baseFields = {
  name: z
    .string()
    .min(2, "Please enter your full name")
    .max(120, "Name is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  /** Honeypot — must be empty. Spam bots will fill it; humans can't see it. */
  website: z.string().max(0, "spam-detected").optional().or(z.literal("")),
  /** Optional reCAPTCHA v3 token from grecaptcha.execute() — verified server-side. */
  recaptchaToken: z.string().optional().or(z.literal("")),
};

/* ─── /contact (general inquiry) ───────────────────────────── */

export const contactSchema = z.object({
  formType: z.literal("contact"),
  ...baseFields,
  company: z
    .string()
    .min(2, "Company name is required")
    .max(200, "Company name is too long"),
  message: z
    .string()
    .min(20, "Tell us a bit more — at least 20 characters")
    .max(4000, "Message is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;

/* ─── /contact/demo (book a demo) ──────────────────────────── */

export const PRODUCT_OPTIONS = [
  { value: "general", label: "General platform overview" },
  { value: "eyecon", label: "EyeCON — AI sales platform" },
  { value: "vitacare", label: "VitaCare — digital clinic" },
  { value: "eyepos", label: "EyePOS — POS + accounting" },
  { value: "convenor", label: "Convenor — AI hiring" },
  { value: "performix", label: "Performix — AI assessments" },
  { value: "meetrix", label: "Meetrix — meeting intelligence" },
  { value: "intellix", label: "Intellix — voice + chat support" },
  { value: "learnova", label: "Learnova — AI course generation" },
  { value: "lms", label: "LMS — e-learning platform" },
  { value: "ecommerce", label: "Custom E-Commerce" },
  { value: "documind", label: "DocuMind — document intelligence" },
  { value: "infera", label: "Infera — sales intelligence" },
  { value: "opssight", label: "OpsSight — industrial intelligence" },
  { value: "enews", label: "E-News — digital publishing" },
  { value: "red-hat", label: "Red Hat practice (RHEL · OpenShift · Ansible · OpenShift AI)" },
  { value: "google-cloud", label: "Google Cloud (GCP) practice" },
] as const;

export const PRODUCT_VALUES = PRODUCT_OPTIONS.map((p) => p.value);

export const demoSchema = z.object({
  formType: z.literal("demo"),
  ...baseFields,
  company: z
    .string()
    .min(2, "Company name is required for a demo")
    .max(200, "Company name is too long"),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .max(40, "Phone number is too long"),
  product: z.enum(PRODUCT_VALUES as [string, ...string[]], {
    message: "Please choose a product or practice",
  }),
  useCase: z
    .string()
    .min(20, "Tell us a bit about your use case")
    .max(4000, "Message is too long"),
  preferredTime: z
    .string()
    .max(200, "Field is too long")
    .optional()
    .or(z.literal("")),
});

export type DemoInput = z.infer<typeof demoSchema>;

/* ─── /contact/sales (talk to sales) ───────────────────────── */

export const INDUSTRY_OPTIONS = [
  { value: "sales", label: "Sales" },
  { value: "healthcare", label: "Healthcare" },
  { value: "hr-workforce", label: "HR & Workforce" },
  { value: "customer-support", label: "Customer Support" },
  { value: "education", label: "Education" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "finance-operations", label: "Finance & Operations" },
  { value: "intelligence-research", label: "Intelligence & Research" },
  { value: "industrial-iot", label: "Industrial Intelligence & IoT" },
  { value: "media-publishing", label: "Media & Publishing" },
  { value: "other", label: "Other / Cross-vertical" },
] as const;

export const INDUSTRY_VALUES = INDUSTRY_OPTIONS.map((i) => i.value);

export const TEAM_SIZE_OPTIONS = [
  { value: "1-10", label: "1–10 people" },
  { value: "11-50", label: "11–50 people" },
  { value: "51-200", label: "51–200 people" },
  { value: "201-1000", label: "201–1,000 people" },
  { value: "1000+", label: "1,000+ people" },
] as const;

export const TEAM_SIZE_VALUES = TEAM_SIZE_OPTIONS.map((t) => t.value);

export const INQUIRY_TYPE_OPTIONS = [
  { value: "products", label: "Infizia products" },
  { value: "services", label: "Engineering services" },
  { value: "red-hat", label: "Red Hat stack" },
  { value: "google-cloud", label: "Google Cloud" },
  { value: "general", label: "General / not sure yet" },
] as const;

export const INQUIRY_TYPE_VALUES = INQUIRY_TYPE_OPTIONS.map((i) => i.value);

export const salesSchema = z.object({
  formType: z.literal("sales"),
  ...baseFields,
  company: z
    .string()
    .min(2, "Company name is required")
    .max(200, "Company name is too long"),
  role: z
    .string()
    .max(120, "Role is too long")
    .optional()
    .or(z.literal("")),
  industry: z.enum(INDUSTRY_VALUES as [string, ...string[]], {
    message: "Please choose an industry",
  }),
  teamSize: z.enum(TEAM_SIZE_VALUES as [string, ...string[]], {
    message: "Please choose a team size",
  }),
  inquiryType: z.enum(INQUIRY_TYPE_VALUES as [string, ...string[]], {
    message: "Please choose an inquiry type",
  }),
  message: z
    .string()
    .min(20, "Tell us a bit about what you need")
    .max(4000, "Message is too long"),
});

export type SalesInput = z.infer<typeof salesSchema>;

/* ─── Discriminated union — used by the API route ──────────── */

export const inquirySchema = z.discriminatedUnion("formType", [
  contactSchema,
  demoSchema,
  salesSchema,
]);

export type InquiryInput = z.infer<typeof inquirySchema>;
