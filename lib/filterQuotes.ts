// src/lib/utils/filterQuotes.ts
import quotes from "@/data/quotes.json";

export function getQuotesByTopic(topic: string) {
  return quotes.filter(q => q.topic.toLowerCase() === topic.toLowerCase()).slice(0, 3);
}

export function getAllQuotes() {
  return quotes;
}
