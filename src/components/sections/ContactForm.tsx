"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl border border-accent/30 bg-surface p-8 text-center">
        <h3 className="text-xl font-semibold text-white">Thank You!</h3>
        <p className="mt-2 text-foreground">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white">
          Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-white">
          Company
        </label>
        <input
          type="text"
          id="company"
          className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-white">
          Subject <span className="text-accent">*</span>
        </label>
        <select
          id="subject"
          required
          className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="demo">Demo Request</option>
          <option value="pricing">Pricing Question</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50 resize-none"
          placeholder="How can we help?"
        />
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
