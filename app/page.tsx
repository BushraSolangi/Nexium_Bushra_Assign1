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
  <main
  className="min-h-screen flex flex-col items-center justify-center 
             bg-cover bg-center bg-no-repeat text-foreground px-4 py-12"
  style={{
    backgroundImage: "url('/images/bg.avif')",
  }}
>
  <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
    💭 Quote Generator
  </h1>

  <div className="w-full max-w-5xl space-y-6 px-4 sm:px-8 bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg">
    <QuoteForm onSearch={handleSearch} />
    <QuoteList quotes={quotes} />
  </div>

  <footer className="mt-16 text-sm text-muted-foreground text-center">
    <Link href="/all-quotes" className="text-blue-500 hover:underline">
      View all quotes →
    </Link>
  </footer>
</main>

  );
}
