import { getAllQuotes } from "@/lib/filterQuotes";
import { QuoteList } from "@/components/QuoteList";
import Link from "next/link";

export default function AllQuotesPage() {
  const quotes = getAllQuotes();

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12 bg-background text-foreground">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">📚 All Quotes</h1>

      <div className="w-full max-w-4xl">
        <QuoteList quotes={quotes} />
        <div className="text-center mt-10">
          <Link
            href="/"
            className="text-sm text-blue-500 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
