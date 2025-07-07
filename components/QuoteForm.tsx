// src/components/QuoteForm.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  onSearch: (topic: string) => void;
}

export function QuoteForm({ onSearch }: Props) {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    onSearch(topic.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        placeholder="Enter a topic (e.g., life, success)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" className="whitespace-nowrap px-4">
        Get Quotes
      </Button>
    </form>
  );
}
