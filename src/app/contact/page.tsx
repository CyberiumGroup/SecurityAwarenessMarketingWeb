import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the CyberEscape team. Request a demo, ask about pricing, or discuss your security training needs.",
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-foreground">
              Have questions about CyberEscape? Want to see a demo? We&apos;d
              love to hear from you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-2">
                  <Mail className="h-5 w-5 text-accent-light" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Email Us</h3>
                  <p className="mt-1 text-sm text-foreground">
                    contact@cyberescape.io
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-2">
                  <MessageSquare className="h-5 w-5 text-accent-light" />
                </div>
                <div>
                  <h3 className="font-medium text-white">General Inquiries</h3>
                  <p className="mt-1 text-sm text-foreground">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
