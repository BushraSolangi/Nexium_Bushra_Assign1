"use client";

import { useState } from "react";
import { QuoteForm } from "@/components/QuoteForm";
import { QuoteList } from "@/components/QuoteList";
import { getQuotesByTopic } from "@/lib/filterQuotes";

export default function Home() {
  const [quotes, setQuotes] = useState<{ topic: string; quote: string }[]>([]);

  // ✅ Add it here
  const handleSubmit = (topic: string) => {
    console.log("Searching for topic:", topic);         // Debug: input value
    const result = getQuotesByTopic(topic);
    console.log("Result:", result);                     // Debug: filtered quotes
    setQuotes(result);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 py-12 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        💡 Quote Generator
      </h1>

      <div className="w-full max-w-xl">
        {/* ✅ Make sure you pass the prop name correctly */}
        <QuoteForm onSearch={handleSubmit} />
        <QuoteList quotes={quotes} />
      </div>

      <footer className="mt-16 text-sm text-muted-foreground text-center">
        Made with ❤️ using ShadCN UI, Tailwind CSS, and Next.js
      </footer>
    </main>
  );
}
