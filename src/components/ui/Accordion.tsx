"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="pr-4 font-medium text-white">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-foreground">{answer}</p>
      </div>
    </div>
  );
}
