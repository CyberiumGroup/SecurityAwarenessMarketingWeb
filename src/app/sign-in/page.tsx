"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { SITE_NAME } from "@/lib/constants";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center py-16">
      <Container>
        <div className="mx-auto max-w-md">
          <Card hover={false} className="p-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">
                Sign In to{" "}
                <span className="gradient-text">{SITE_NAME}</span>
              </h1>
              <p className="mt-2 text-sm text-foreground">
                Access your training dashboard
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full rounded-lg border border-white/10 bg-surface-light px-4 py-3 pr-11 text-white placeholder-white/30 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <div className="mt-2 text-right">
                  <span className="text-sm text-accent-light cursor-pointer hover:underline">
                    Forgot password?
                  </span>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-surface px-4 text-foreground">or</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-surface-light px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 cursor-pointer"
                >
                  Sign in with Microsoft
                </button>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-surface-light px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 cursor-pointer"
                >
                  Sign in with Google
                </button>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/pricing"
                className="text-accent-light hover:underline"
              >
                Start Free Trial
              </Link>
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
