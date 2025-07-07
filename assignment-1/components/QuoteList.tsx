interface Quote {
  topic: string;
  quote: string;
}

interface Props {
  quotes: Quote[];
}

export function QuoteList({ quotes }: Props) {
  if (quotes.length === 0) {
    return <p className="mt-4 text-muted-foreground">No quotes found.</p>;
  }

  return (
    <ul className="mt-4 space-y-4">
      {quotes.map((q, index) => (
        <li
          key={index}
          className="p-4 bg-card text-card-foreground border rounded-lg shadow"
        >
          {q.quote}
        </li>
      ))}
    </ul>
  );
}
