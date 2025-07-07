import { QuoteModal } from "./QuoteModal";

interface Quote {
  topic: string;
  quote: string;
}

interface Props {
  quotes: Quote[];
}

export function QuoteList({ quotes }: Props) {
  if (quotes.length === 0) {
    return <p className="mt-4 text-muted-foreground text-center">No quotes found.</p>;
  }

  return (
    <ul className="mt-6 space-y-6">
      {quotes.map((q, i) => (
        <li key={i} className="flex justify-center">
          <QuoteModal quote={q.quote}>
            <div className="p-6 max-w-xl w-full border rounded-md shadow bg-card hover:bg-muted cursor-pointer transition">
              <p className="text-base text-foreground font-medium text-center">{q.quote}</p>
              <span className="block mt-2 text-xs text-muted-foreground text-center">
                Topic: {q.topic}
              </span>
            </div>
          </QuoteModal>
        </li>
      ))}
    </ul>
  );
}
