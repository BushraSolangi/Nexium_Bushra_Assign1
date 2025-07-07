"use client";

import { useState } from "react";
import Link from "next/link";

import { QuoteForm } from "@/components/QuoteForm";
import { QuoteList } from "@/components/QuoteList";
import { getQuotesByTopic } from "@/lib/filterQuotes";

export default function Home() {
  const [quotes, setQuotes] = useState<{ topic: string; quote: string }[]>([]);

  const handleSearch = (topic: string) => {
    const result = getQuotesByTopic(topic);
    setQuotes(result);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
        💭 Quote Generator
      </h1>

      {/* WIDER CONTAINER */}
      <div className="w-full max-w-lg space-y-6 px-4 sm:px-8">
        <QuoteForm onSearch={handleSearch} />
        <QuoteList quotes={quotes} />
      </div>

      {/* Footer & Navigation */}
      <footer className="mt-16 text-sm text-muted-foreground text-center">
        <Link href="/all-quotes" className="text-blue-500 hover:underline">
          View all quotes →
        </Link>
        <p className="mt-4">Made with ❤️ using Next.js, Tailwind CSS & ShadCN UI</p>
      </footer>
    </main>
  );
}
