import { track } from "@vercel/analytics";

/**
 * Safe wrapper for Vercel Analytics tracking
 * Ensures that tracking calls never crash the UI
 */
export const analytics = {
  trackCtaClick: (location: string) => {
    try {
      track("cta_click", { location });
    } catch (e) {
      console.error("Analytics Error:", e);
    }
  },
  trackWhatsappClick: (location: string) => {
    try {
      track("whatsapp_click", { location });
    } catch (e) {
      console.error("Analytics Error:", e);
    }
  },
  trackInquirySubmitted: (projectType: string, budgetRange: string) => {
    try {
      track("inquiry_submitted", { project_type: projectType, budget_range: budgetRange });
    } catch (e) {
      console.error("Analytics Error:", e);
    }
  },
  trackInquiryError: (error: string) => {
    try {
      track("inquiry_error", { error });
    } catch (e) {
      console.error("Analytics Error:", e);
    }
  },
  trackOfferingClick: (offering: string) => {
    try {
      track("offering_click", { offering });
    } catch (e) {
      console.error("Analytics Error:", e);
    }
  },
  trackThemeToggle: (theme: "light" | "dark") => {
    try {
      track("theme_toggle", { theme });
    } catch (e) {
      console.error("Analytics Error:", e);
    }
  },
};
